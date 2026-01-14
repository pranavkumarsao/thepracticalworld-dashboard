import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { Dashboard } from './components/Dashboard';
import { UpcomingWebinars } from './components/UpcomingWebinars';
import { PastRecordings } from './components/PastRecordings';
import { Resources } from './components/Resources';
import { ProfileSettings } from './components/ProfileSettings';
import { Payments } from './components/Payments';
import { Auth } from './components/Auth';

export default function App() {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'upcoming' | 'recordings' | 'resources' | 'payments' | 'profile'>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setActiveSection('dashboard');
  };

  if (!isAuthenticated) {
    return <Auth onAuthSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-[#0a0f1e] relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          onSignOut={handleSignOut}
        />
      </div>
      
      <main className="flex-1 lg:ml-72 relative z-10 pb-20 lg:pb-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-6 lg:py-12">
          {activeSection === 'dashboard' && <Dashboard setActiveSection={setActiveSection} />}
          {activeSection === 'upcoming' && <UpcomingWebinars />}
          {activeSection === 'recordings' && <PastRecordings />}
          {activeSection === 'resources' && <Resources />}
          {activeSection === 'payments' && <Payments />}
          {activeSection === 'profile' && <ProfileSettings />}
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}