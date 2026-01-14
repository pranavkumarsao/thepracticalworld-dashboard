import { ArrowUpRight, TrendingUp, Clock, Award, PlayCircle, Calendar, Video, Sparkles } from 'lucide-react';

interface DashboardProps {
  setActiveSection: (section: 'dashboard' | 'upcoming' | 'recordings' | 'resources' | 'payments' | 'profile') => void;
}

const stats = [
  { label: 'Hours Watched', value: '47.5', change: '+12%', icon: Clock },
  { label: 'Completed', value: '23', change: '+8%', icon: Award },
  { label: 'Upcoming', value: '5', change: '+2', icon: Calendar },
  { label: 'Streak Days', value: '14', change: '+4', icon: TrendingUp },
];

const upcomingSessions = [
  {
    id: 1,
    title: 'Advanced React Patterns & Best Practices',
    instructor: 'Sarah Chen',
    date: 'Jan 15',
    time: '2:00 PM',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Building Scalable APIs with Node.js',
    instructor: 'Michael Torres',
    date: 'Jan 22',
    time: '3:00 PM',
    category: 'Backend',
  },
];

const recentRecordings = [
  {
    id: 1,
    title: 'Introduction to TypeScript for React Developers',
    instructor: 'Sarah Chen',
    duration: '85 min',
    progress: 65,
    icon: Video,
  },
  {
    id: 2,
    title: 'Modern CSS: Grid, Flexbox & Container Queries',
    instructor: 'Alex Rivera',
    duration: '95 min',
    progress: 0,
    icon: Video,
  },
  {
    id: 3,
    title: 'Authentication & Security Best Practices',
    instructor: 'Michael Torres',
    duration: '110 min',
    progress: 100,
    icon: Video,
  },
];

export function Dashboard({ setActiveSection }: DashboardProps) {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-white text-2xl lg:text-3xl">Welcome back, Alex</h2>
          <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white/60" />
        </div>
        <p className="text-white/60 text-base lg:text-lg">Continue your learning journey</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 active:scale-95"
            >
              <div className="flex items-start justify-between mb-3 lg:mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="text-emerald-400 text-xs lg:text-sm flex items-center gap-1 bg-emerald-500/10 px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-lg border border-emerald-500/20">
                  <TrendingUp className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl lg:text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-xs lg:text-sm text-white/50">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Upcoming Sessions */}
        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-lg lg:text-xl">Upcoming Sessions</h3>
            <button
              onClick={() => setActiveSection('upcoming')}
              className="text-white/60 hover:text-white text-sm flex items-center gap-1 group"
            >
              View All
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {upcomingSessions.map((session) => (
              <div
                key={session.id}
                className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 active:scale-[0.98] group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-opacity" />
                
                <div className="relative flex flex-col lg:flex-row items-start justify-between gap-3 lg:gap-0">
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3 flex-wrap">
                      <span className="px-2.5 lg:px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs rounded-full">
                        {session.category}
                      </span>
                      <span className="text-xs lg:text-sm text-white/50">
                        {session.date} • {session.time}
                      </span>
                    </div>
                    <h4 className="text-white mb-1.5 lg:mb-2 text-base lg:text-lg">{session.title}</h4>
                    <p className="text-white/60 text-sm">with {session.instructor}</p>
                  </div>
                  <button className="w-full lg:w-auto px-4 lg:px-5 py-2 lg:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg lg:rounded-xl hover:bg-white/15 hover:shadow-lg transition-all text-sm">
                    Join Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Watching */}
        <div className="space-y-4 lg:space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-lg lg:text-xl">Continue Watching</h3>
            <button
              onClick={() => setActiveSection('recordings')}
              className="text-white/60 hover:text-white text-sm flex items-center gap-1 group"
            >
              View All
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
            {recentRecordings.map((recording) => {
              const Icon = recording.icon;
              return (
                <div
                  key={recording.id}
                  className="bg-white/5 backdrop-blur-xl rounded-lg lg:rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 active:scale-95 group cursor-pointer"
                >
                  <div className="relative aspect-video bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="absolute top-2 right-2 px-1.5 lg:px-2 py-0.5 lg:py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded border border-white/10">
                      {recording.duration}
                    </div>
                    {recording.progress > 0 && recording.progress < 100 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                        <div
                          className="h-full bg-white/50"
                          style={{ width: `${recording.progress}%` }}
                        />
                      </div>
                    )}
                    {recording.progress === 100 && (
                      <div className="absolute top-2 left-2 px-1.5 lg:px-2 py-0.5 lg:py-1 bg-emerald-500/80 backdrop-blur-sm text-white text-xs rounded flex items-center gap-1 border border-emerald-400/30">
                        <Award className="w-3 h-3" />
                        <span className="hidden lg:inline">Completed</span>
                      </div>
                    )}
                  </div>
                  <div className="p-3 lg:p-4">
                    <h4 className="text-white text-sm mb-1 line-clamp-2">{recording.title}</h4>
                    <p className="text-white/50 text-xs">{recording.instructor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}