import { PlayCircle, Download, Clock, Search, Award, TrendingUp, Video } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Development', 'Design', 'Backend', 'DevOps', 'Security'];

const recordings = [
  {
    id: 1,
    title: 'Introduction to TypeScript for React Developers',
    date: 'December 18, 2025',
    duration: '85 min',
    instructor: 'Sarah Chen',
    instructorAvatar: 'SC',
    views: 234,
    rating: 4.9,
    category: 'Development',
    completed: true,
    icon: Video,
  },
  {
    id: 2,
    title: 'Modern CSS: Grid, Flexbox & Container Queries',
    date: 'December 10, 2025',
    duration: '95 min',
    instructor: 'Alex Rivera',
    instructorAvatar: 'AR',
    views: 189,
    rating: 4.8,
    category: 'Development',
    completed: false,
    icon: Video,
  },
  {
    id: 3,
    title: 'Authentication & Security Best Practices',
    date: 'November 28, 2025',
    duration: '110 min',
    instructor: 'Michael Torres',
    instructorAvatar: 'MT',
    views: 312,
    rating: 5.0,
    category: 'Security',
    completed: true,
    icon: Video,
  },
  {
    id: 4,
    title: 'State Management with Zustand & React Query',
    date: 'November 15, 2025',
    duration: '90 min',
    instructor: 'Emma Watson',
    instructorAvatar: 'EW',
    views: 267,
    rating: 4.7,
    category: 'Development',
    completed: false,
    icon: Video,
  },
  {
    id: 5,
    title: 'Building Design Systems from Scratch',
    date: 'November 8, 2025',
    duration: '105 min',
    instructor: 'Lisa Park',
    instructorAvatar: 'LP',
    views: 198,
    rating: 4.9,
    category: 'Design',
    completed: false,
    icon: Video,
  },
  {
    id: 6,
    title: 'Docker & Kubernetes for Developers',
    date: 'October 25, 2025',
    duration: '120 min',
    instructor: 'James Wilson',
    instructorAvatar: 'JW',
    views: 278,
    rating: 4.8,
    category: 'DevOps',
    completed: true,
    icon: Video,
  },
];

export function PastRecordings() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecordings = recordings.filter((recording) => {
    const matchesCategory = selectedCategory === 'All' || recording.category === selectedCategory;
    const matchesSearch = recording.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-white mb-2 text-2xl lg:text-3xl">Webinar Recordings</h2>
        <p className="text-white/60 text-base lg:text-lg">Watch previous sessions on-demand</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 lg:gap-6">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 text-white border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-2 lg:mb-3">
            <PlayCircle className="w-6 h-6 lg:w-8 lg:h-8" />
            <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 opacity-70" />
          </div>
          <div className="text-2xl lg:text-3xl mb-1">47.5</div>
          <div className="text-white/70 text-xs lg:text-sm">Hours Watched</div>
        </div>
        <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 text-white border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-2 lg:mb-3">
            <Award className="w-6 h-6 lg:w-8 lg:h-8" />
            <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 opacity-70" />
          </div>
          <div className="text-2xl lg:text-3xl mb-1">23</div>
          <div className="text-white/70 text-xs lg:text-sm">Completed</div>
        </div>
        <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 text-white border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-2 lg:mb-3">
            <Clock className="w-6 h-6 lg:w-8 lg:h-8" />
            <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 opacity-70" />
          </div>
          <div className="text-2xl lg:text-3xl mb-1">4.8</div>
          <div className="text-white/70 text-xs lg:text-sm">Avg Rating</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search recordings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3.5 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/40 backdrop-blur-xl text-sm"
          />
        </div>
        <div className="flex items-center gap-1.5 lg:gap-2 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl p-1 lg:p-1.5 backdrop-blur-xl overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-md lg:rounded-lg text-xs lg:text-sm transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-white/10 backdrop-blur-sm text-white shadow-lg border border-white/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Recordings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {filteredRecordings.map((recording) => {
          const Icon = recording.icon;
          return (
            <div
              key={recording.id}
              className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 active:scale-95 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-white/5 overflow-hidden flex items-center justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 lg:bottom-3 right-2 lg:right-3 px-2 lg:px-2.5 py-0.5 lg:py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-md lg:rounded-lg border border-white/10">
                  {recording.duration}
                </div>
                
                {/* Completed Badge */}
                {recording.completed && (
                  <div className="absolute top-2 lg:top-3 left-2 lg:left-3 px-2 lg:px-2.5 py-0.5 lg:py-1 bg-emerald-500/80 backdrop-blur-sm text-white text-xs rounded-md lg:rounded-lg flex items-center gap-1 shadow-lg border border-emerald-400/30">
                    <Award className="w-3 h-3" />
                    <span className="hidden sm:inline">Completed</span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-2 lg:top-3 right-2 lg:right-3 px-2 lg:px-2.5 py-0.5 lg:py-1 bg-white/10 backdrop-blur-sm text-white/90 text-xs rounded-md lg:rounded-lg shadow-lg border border-white/20">
                  {recording.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5">
                <h3 className="text-white mb-2 lg:mb-3 text-base lg:text-lg line-clamp-2 min-h-[3rem] lg:min-h-[3.5rem]">{recording.title}</h3>
                
                {/* Instructor */}
                <div className="flex items-center gap-2.5 lg:gap-3 mb-3 lg:mb-4">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 shadow-lg border border-white/20">
                    {recording.instructorAvatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white truncate">{recording.instructor}</div>
                    <div className="text-xs text-white/50">{recording.date}</div>
                  </div>
                </div>

                {/* Stats & Actions */}
                <div className="flex items-center justify-between pt-3 lg:pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 lg:gap-4 text-xs lg:text-sm text-white/50">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      {recording.views}
                    </div>
                    <div className="flex items-center gap-1">
                      ⭐ {recording.rating}
                    </div>
                  </div>
                  <button className="text-white/60 hover:text-white transition-colors active:scale-95">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredRecordings.length === 0 && (
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-12 lg:p-20 border border-white/10 text-center">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 backdrop-blur-sm">
            <PlayCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white/40" />
          </div>
          <h3 className="text-white mb-2 lg:mb-3 text-lg lg:text-xl">No recordings found</h3>
          <p className="text-white/60 text-sm lg:text-base">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}