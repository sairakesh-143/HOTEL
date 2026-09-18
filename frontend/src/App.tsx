import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';
import Events from './pages/Events';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Book from './pages/Book';
import EventEnquiry from './pages/EventEnquiry';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './pages/AdminBookings';
import AdminEvents from './pages/AdminEvents';
import AdminKnowledge from './pages/AdminKnowledge';
import AdminSettings from './pages/AdminSettings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* ── Public Website (Header + Footer + AI Chat) ── */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/events" element={<Events />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/event-enquiry" element={<EventEnquiry />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/*" element={<Profile />} />
        </Route>

        {/* ── Admin Application (Sidebar + Admin Header, NO public nav) ── */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/knowledge" element={<AdminKnowledge />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>

        {/* ── 404 ── */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
