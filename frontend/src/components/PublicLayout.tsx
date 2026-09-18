import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AIChatWidget from './ui/AIChatWidget';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
