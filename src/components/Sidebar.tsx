import { LayoutDashboard, Video, PlayCircle, BookOpen, User, LogOut, Settings, Bell, CreditCard } from 'lucide-react';

interface SidebarProps {
  activeSection: 'dashboard' | 'upcoming' | 'recordings' | 'resources' | 'payments' | 'profile';
  setActiveSection: (section: 'dashboard' | 'upcoming' | 'recordings' | 'resources' | 'payments' | 'profile') => void;
  onSignOut: () => void;
}

export function Sidebar({ activeSection, setActiveSection, onSignOut }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'upcoming' as const, label: 'Upcoming', icon: Video },
    { id: 'recordings' as const, label: 'Recordings', icon: PlayCircle },
    { id: 'resources' as const, label: 'Resources', icon: BookOpen },
    { id: 'payments' as const, label: 'Payments', icon: CreditCard },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col">
      {/* Header */}
      <div className="px-8 py-10 border-b border-white/10">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="2" fill="white"/>
              <path d="M6 12C6 10 8 8 12 8C16 8 18 10 18 12C18 14 16 16 12 16C8 16 6 14 6 12Z" fill="white"/>
            </svg>
          </div>
          <div>
            <h1 className="text-white leading-tight">The Practical World</h1>
            <p className="text-white/50 text-xs mt-0.5">Premium Learning</p>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
            <span className="text-white text-sm">AJ</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm truncate">Alex Johnson</div>
            <div className="text-white/50 text-xs truncate">Premium Member</div>
          </div>
          <button className="text-white/50 hover:text-white transition-colors">
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6">
        <ul className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                    isActive
                      ? 'bg-white/10 backdrop-blur-sm text-white shadow-lg border border-white/20'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                  <Icon className={`w-5 h-5 relative z-10 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Actions */}
      <div className="px-5 py-6 space-y-2 border-t border-white/10">
        <button 
          onClick={() => setActiveSection('profile')}
          className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button 
          onClick={onSignOut}
          className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-white/60 hover:bg-rose-500/20 hover:text-rose-400 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}