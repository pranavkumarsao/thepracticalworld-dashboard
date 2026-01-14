import { LayoutDashboard, Video, PlayCircle, BookOpen, User } from 'lucide-react';

interface MobileNavProps {
  activeSection: 'dashboard' | 'upcoming' | 'recordings' | 'resources' | 'payments' | 'profile';
  setActiveSection: (section: 'dashboard' | 'upcoming' | 'recordings' | 'resources' | 'payments' | 'profile') => void;
}

export function MobileNav({ activeSection, setActiveSection }: MobileNavProps) {
  const menuItems = [
    { id: 'dashboard' as const, label: 'Home', icon: LayoutDashboard },
    { id: 'upcoming' as const, label: 'Upcoming', icon: Video },
    { id: 'recordings' as const, label: 'Videos', icon: PlayCircle },
    { id: 'resources' as const, label: 'Files', icon: BookOpen },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 z-50 pb-safe">
      <div className="flex items-center justify-around px-2 py-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[64px] active:scale-95 ${
                isActive
                  ? 'bg-white/10 backdrop-blur-sm text-white'
                  : 'text-white/60'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? '' : 'opacity-70'}`} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
