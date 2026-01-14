import { Calendar, Clock, ExternalLink, Copy, Check, Users, Video } from 'lucide-react';
import { useState } from 'react';

const upcomingWebinars = [
  {
    id: 1,
    title: 'Advanced React Patterns & Best Practices',
    date: 'January 15, 2026',
    time: '2:00 PM EST',
    duration: '90 minutes',
    instructor: 'Sarah Chen',
    instructorTitle: 'Senior React Engineer @ Meta',
    instructorAvatar: 'SC',
    attendees: 156,
    joinLink: 'https://meet.practical.world/react-advanced-jan15',
    description: 'Deep dive into advanced React patterns including compound components, render props, and custom hooks for building scalable applications.',
    topics: ['Compound Components', 'Render Props', 'Custom Hooks', 'Performance'],
    category: 'Development',
  },
  {
    id: 2,
    title: 'Building Scalable APIs with Node.js',
    date: 'January 22, 2026',
    time: '3:00 PM EST',
    duration: '120 minutes',
    instructor: 'Michael Torres',
    instructorTitle: 'Backend Architect @ Stripe',
    instructorAvatar: 'MT',
    attendees: 203,
    joinLink: 'https://meet.practical.world/nodejs-apis-jan22',
    description: 'Learn how to design and build production-ready APIs with Node.js, Express, and best practices for scalability and reliability.',
    topics: ['API Design', 'Express.js', 'Scalability', 'Security'],
    category: 'Backend',
  },
  {
    id: 3,
    title: 'Modern UI/UX Design Principles',
    date: 'January 29, 2026',
    time: '1:00 PM EST',
    duration: '75 minutes',
    instructor: 'Emma Watson',
    instructorTitle: 'Lead Designer @ Airbnb',
    instructorAvatar: 'EW',
    attendees: 187,
    joinLink: 'https://meet.practical.world/uiux-modern-jan29',
    description: 'Explore contemporary design principles, accessibility standards, and user-centered design methodologies for creating delightful experiences.',
    topics: ['Design Systems', 'Accessibility', 'User Research', 'Prototyping'],
    category: 'Design',
  },
];

export function UpcomingWebinars() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyLink = (id: number, link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-white mb-2 text-2xl lg:text-3xl">Upcoming Webinars</h2>
        <p className="text-white/60 text-base lg:text-lg">Your registered sessions and workshops</p>
      </div>

      {/* Webinars Grid */}
      <div className="space-y-4 lg:space-y-6">
        {upcomingWebinars.map((webinar) => (
          <div
            key={webinar.id}
            className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 group"
          >
            {/* Gradient Background Decoration */}
            <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-white/5 rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-opacity" />
            
            <div className="relative p-5 lg:p-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start justify-between mb-4 lg:mb-6 gap-3 lg:gap-0">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4 flex-wrap">
                    <span className="px-3 lg:px-4 py-1 lg:py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs lg:text-sm rounded-full shadow-lg">
                      {webinar.category}
                    </span>
                    <span className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm text-white/50">
                      <Users className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      {webinar.attendees} registered
                    </span>
                  </div>
                  <h3 className="text-white mb-2 lg:mb-3 text-xl lg:text-2xl">{webinar.title}</h3>
                  <p className="text-white/60 text-sm lg:text-lg mb-4 lg:mb-6">{webinar.description}</p>
                  
                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                    {webinar.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-2.5 lg:px-3 py-1 lg:py-1.5 bg-white/5 border border-white/10 text-white/70 text-xs lg:text-sm rounded-lg backdrop-blur-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:ml-6 px-4 lg:px-5 py-1.5 lg:py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg lg:rounded-xl text-xs lg:text-sm shadow-sm backdrop-blur-sm">
                  ✓ Registered
                </div>
              </div>

              {/* Instructor Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 mb-4 lg:mb-6 p-4 lg:p-5 bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/10">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg border border-white/20">
                  {webinar.instructorAvatar}
                </div>
                <div className="flex-1">
                  <div className="text-white mb-0.5 text-sm lg:text-base">{webinar.instructor}</div>
                  <div className="text-white/50 text-xs lg:text-sm">{webinar.instructorTitle}</div>
                </div>
                <div className="text-left sm:text-right w-full sm:w-auto">
                  <div className="flex items-center gap-2 text-white/70 mb-1">
                    <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white/40" />
                    <span className="text-xs lg:text-sm">{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Clock className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white/40" />
                    <span className="text-xs lg:text-sm">{webinar.time} • {webinar.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:gap-3">
                <button
                  onClick={() => handleCopyLink(webinar.id, webinar.joinLink)}
                  className="flex items-center justify-center gap-2 px-4 lg:px-5 py-2.5 lg:py-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg lg:rounded-xl transition-all backdrop-blur-sm border border-white/10 text-sm"
                >
                  {copiedId === webinar.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy Link</span>
                      <span className="sm:hidden">Copy</span>
                    </>
                  )}
                </button>
                <button className="hidden sm:flex items-center justify-center gap-2 px-4 lg:px-5 py-2.5 lg:py-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg lg:rounded-xl transition-all backdrop-blur-sm border border-white/10 text-sm">
                  <Calendar className="w-4 h-4" />
                  Add to Calendar
                </button>
                <div className="flex-1 hidden lg:block" />
                <a
                  href={webinar.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 lg:px-8 py-2.5 lg:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 hover:shadow-lg rounded-lg lg:rounded-xl transition-all text-sm"
                >
                  <Video className="w-4 h-4" />
                  Join Session
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {upcomingWebinars.length === 0 && (
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-12 lg:p-20 border border-white/10 text-center">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 backdrop-blur-sm">
            <Calendar className="w-8 h-8 lg:w-10 lg:h-10 text-white/40" />
          </div>
          <h3 className="text-white mb-2 lg:mb-3 text-lg lg:text-xl">No Upcoming Webinars</h3>
          <p className="text-white/60 mb-4 lg:mb-6 text-sm lg:text-base">Browse our catalog to discover and register for upcoming sessions.</p>
          <button className="px-5 lg:px-6 py-2.5 lg:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg lg:rounded-xl hover:bg-white/15 hover:shadow-lg transition-all text-sm">
            Browse Catalog
          </button>
        </div>
      )}
    </div>
  );
}