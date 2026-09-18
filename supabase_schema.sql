-- Hotel SVN Lake Palace - Supabase Schema
-- Includes RLS, pgvector, and necessary tables

-- Enable pgvector extension for RAG
CREATE EXTENSION IF NOT EXISTS vector;

-- 1. Profiles Table (Linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    city TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for Profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, phone)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'phone');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Note: In Supabase, you might need to create this trigger manually in the Auth schema if doing it from UI, 
-- but this works if run as postgres role:
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- 2. Bookings Table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    booking_reference TEXT UNIQUE NOT NULL,
    guest_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    room_category TEXT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    adults INTEGER NOT NULL,
    children INTEGER NOT NULL DEFAULT 0,
    number_of_rooms INTEGER NOT NULL DEFAULT 1,
    special_request TEXT,
    status TEXT DEFAULT 'REQUEST RECEIVED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for Bookings
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own bookings" ON public.bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own bookings" ON public.bookings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all bookings" ON public.bookings FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can update bookings" ON public.bookings FOR UPDATE USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));


-- 3. Event Enquiries Table
CREATE TABLE IF NOT EXISTS public.event_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    reference TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    event_type TEXT NOT NULL,
    event_date DATE,
    expected_guests INTEGER,
    preferred_venue TEXT,
    message TEXT,
    status TEXT DEFAULT 'ENQUIRY RECEIVED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for Event Enquiries
ALTER TABLE public.event_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own event enquiries" ON public.event_enquiries FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own event enquiries" ON public.event_enquiries FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all event enquiries" ON public.event_enquiries FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));
CREATE POLICY "Admins can update event enquiries" ON public.event_enquiries FOR UPDATE USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));


-- 4. General Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    reference TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    preferred_date DATE,
    message TEXT,
    status TEXT DEFAULT 'RECEIVED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for General Enquiries
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own general enquiries" ON public.enquiries FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own general enquiries" ON public.enquiries FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all general enquiries" ON public.enquiries FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));


-- 5. Hotel Knowledge Table (for RAG)
CREATE TABLE IF NOT EXISTS public.hotel_knowledge (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    source_name TEXT,
    source_url TEXT,
    source_type TEXT,
    verified BOOLEAN DEFAULT false,
    verified_at TIMESTAMP WITH TIME ZONE,
    embedding vector(768), -- Assumes using standard 768d embeddings. Update dimension if using a different model (e.g. text-embedding-004 is 768).
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for Hotel Knowledge
ALTER TABLE public.hotel_knowledge ENABLE ROW LEVEL SECURITY;
-- Public can read verified knowledge (needed for RAG backend if using anon key, though backend will likely use service_role key)
CREATE POLICY "Public can view verified knowledge" ON public.hotel_knowledge FOR SELECT USING (verified = true);
-- Admins can manage knowledge
CREATE POLICY "Admins can manage knowledge" ON public.hotel_knowledge FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));


-- 6. Chat Sessions Table
CREATE TABLE IF NOT EXISTS public.chat_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    session_id TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for Chat Sessions
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own chat sessions" ON public.chat_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own chat sessions" ON public.chat_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all chat sessions" ON public.chat_sessions FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));


-- 7. Chat Messages Table
CREATE TABLE IF NOT EXISTS public.chat_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT REFERENCES public.chat_sessions(session_id) ON DELETE CASCADE,
    user_message TEXT NOT NULL,
    assistant_response TEXT NOT NULL,
    retrieved_knowledge_ids UUID[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- RLS for Chat Messages
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
-- To view a message, user must own the session
CREATE POLICY "Users can view own chat messages" ON public.chat_messages FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.chat_sessions WHERE session_id = public.chat_messages.session_id AND user_id = auth.uid())
);
CREATE POLICY "Users can create own chat messages" ON public.chat_messages FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.chat_sessions WHERE session_id = public.chat_messages.session_id AND user_id = auth.uid())
);
CREATE POLICY "Admins can view all chat messages" ON public.chat_messages FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));


-- Function for similarity search
CREATE OR REPLACE FUNCTION match_hotel_knowledge (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
RETURNS TABLE (
  id uuid,
  category text,
  title text,
  content text,
  source_name text,
  verified boolean,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    hk.id,
    hk.category,
    hk.title,
    hk.content,
    hk.source_name,
    hk.verified,
    1 - (hk.embedding <=> query_embedding) AS similarity
  FROM hotel_knowledge hk
  WHERE hk.verified = true AND 1 - (hk.embedding <=> query_embedding) > match_threshold
  ORDER BY hk.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
