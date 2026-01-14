import { FileText, Download, ExternalLink, Code, BookOpen, Search } from 'lucide-react';
import { useState } from 'react';

const resourceTypes = ['All', 'PDF', 'Code', 'Tools', 'Documents'];

const resources = [
  {
    id: 1,
    title: 'Advanced React Patterns - Code Examples',
    type: 'Code Repository',
    fileType: 'Code',
    size: '2.4 MB',
    icon: Code,
    webinar: 'Advanced React Patterns & Best Practices',
    date: 'January 15, 2026',
    downloadUrl: '#',
  },
  {
    id: 2,
    title: 'TypeScript Cheat Sheet',
    type: 'PDF Document',
    fileType: 'PDF',
    size: '1.2 MB',
    icon: FileText,
    webinar: 'Introduction to TypeScript for React Developers',
    date: 'December 18, 2025',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: 'CSS Grid & Flexbox Reference Guide',
    type: 'PDF Document',
    fileType: 'PDF',
    size: '3.1 MB',
    icon: FileText,
    webinar: 'Modern CSS: Grid, Flexbox & Container Queries',
    date: 'December 10, 2025',
    downloadUrl: '#',
  },
  {
    id: 4,
    title: 'Security Checklist for Web Applications',
    type: 'PDF Document',
    fileType: 'PDF',
    size: '890 KB',
    icon: FileText,
    webinar: 'Authentication & Security Best Practices',
    date: 'November 28, 2025',
    downloadUrl: '#',
  },
  {
    id: 5,
    title: 'State Management Comparison Chart',
    type: 'Interactive Tool',
    fileType: 'Tools',
    size: 'Web App',
    icon: ExternalLink,
    webinar: 'State Management with Zustand & React Query',
    date: 'November 15, 2025',
    downloadUrl: '#',
  },
  {
    id: 6,
    title: 'Design System Component Library',
    type: 'Code Repository',
    fileType: 'Code',
    size: '5.2 MB',
    icon: Code,
    webinar: 'Building Design Systems from Scratch',
    date: 'November 8, 2025',
    downloadUrl: '#',
  },
  {
    id: 7,
    title: 'Docker Compose Templates',
    type: 'Code Repository',
    fileType: 'Code',
    size: '1.8 MB',
    icon: Code,
    webinar: 'Docker & Kubernetes for Developers',
    date: 'October 25, 2025',
    downloadUrl: '#',
  },
  {
    id: 8,
    title: 'API Documentation Best Practices',
    type: 'PDF Document',
    fileType: 'Documents',
    size: '2.1 MB',
    icon: BookOpen,
    webinar: 'Building Scalable APIs with Node.js',
    date: 'January 22, 2026',
    downloadUrl: '#',
  },
];

export function Resources() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter((resource) => {
    const matchesType = selectedType === 'All' || resource.fileType === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-white mb-2 text-2xl lg:text-3xl">Resources & Materials</h2>
        <p className="text-white/60 text-base lg:text-lg">Summaries, code examples, and supplementary materials</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3.5 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/40 backdrop-blur-xl text-sm"
          />
        </div>
        <div className="flex items-center gap-1.5 lg:gap-2 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl p-1 lg:p-1.5 backdrop-blur-xl overflow-x-auto">
          {resourceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-md lg:rounded-lg text-xs lg:text-sm transition-all whitespace-nowrap ${
                selectedType === type
                  ? 'bg-white/10 backdrop-blur-sm text-white shadow-lg border border-white/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {filteredResources.map((resource) => {
          const Icon = resource.icon;
          return (
            <div
              key={resource.id}
              className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5 active:scale-[0.98] group"
            >
              {/* Gradient Background */}
              <div className="absolute top-0 right-0 w-32 lg:w-48 h-32 lg:h-48 bg-white/5 rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-opacity" />
              
              <div className="relative flex items-start gap-3 lg:gap-4">
                {/* Icon */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white text-base lg:text-lg line-clamp-2 flex-1 pr-2">{resource.title}</h3>
                  </div>
                  
                  <p className="text-xs lg:text-sm text-white/60 mb-2 lg:mb-3 line-clamp-1">From: {resource.webinar}</p>
                  
                  <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm text-white/50 mb-3 lg:mb-4 flex-wrap">
                    <span className="px-2 lg:px-2.5 py-0.5 lg:py-1 bg-white/5 border border-white/10 text-white/70 rounded backdrop-blur-sm">
                      {resource.type}
                    </span>
                    <span>•</span>
                    <span>{resource.size}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">{resource.date}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {resource.type === 'Interactive Tool' ? (
                      <a
                        href={resource.downloadUrl}
                        className="flex items-center justify-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 hover:shadow-lg rounded-lg lg:rounded-xl transition-all text-xs lg:text-sm flex-1 sm:flex-none"
                      >
                        Open Tool
                        <ExternalLink className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      </a>
                    ) : (
                      <>
                        <a
                          href={resource.downloadUrl}
                          className="flex items-center justify-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 hover:shadow-lg rounded-lg lg:rounded-xl transition-all text-xs lg:text-sm flex-1 sm:flex-none"
                        >
                          <Download className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                          Download
                        </a>
                        <button className="hidden sm:flex items-center justify-center px-3 lg:px-4 py-2 lg:py-2.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg lg:rounded-xl transition-all text-xs lg:text-sm backdrop-blur-sm border border-white/10">
                          Preview
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-12 lg:p-20 border border-white/10 text-center">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 backdrop-blur-sm">
            <FileText className="w-8 h-8 lg:w-10 lg:h-10 text-white/40" />
          </div>
          <h3 className="text-white mb-2 lg:mb-3 text-lg lg:text-xl">No resources found</h3>
          <p className="text-white/60 text-sm lg:text-base">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}