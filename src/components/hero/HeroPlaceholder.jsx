import { Rocket01Icon, CodeIcon, Calendar01Icon, UserGroupIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function HeroPlaceholder() {
  return (
    <section id="hero" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* Association Announcement Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>Information Technology Student's Association • 2024–2025</span>
      </div>

      {/* Main Heading */}
      <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]">
        Empowering the Next Generation of{' '}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Tech Innovators
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed">
        The premier student body driving coding culture, open-source collaboration, high-octane hackathons, and industry mentorship across the department.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#events"
          className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
        >
          Explore Events
        </a>
        <a
          href="#about"
          className="px-6 py-3.5 rounded-xl font-semibold text-neutral-300 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all transform hover:-translate-y-0.5"
        >
          About ITSA
        </a>
      </div>

      {/* Quick Metrics */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl">
        {[
          { label: 'Active Members', value: '500+', icon: UserGroupIcon },
          { label: 'Events Organized', value: '35+', icon: Calendar01Icon },
          { label: 'Hackathons', value: '12+', icon: CodeIcon },
          { label: 'Domains & Wings', value: '5', icon: Rocket01Icon }
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm flex flex-col items-center">
            <HugeiconsIcon icon={stat.icon} size={22} className="text-cyan-400 mb-2" strokeWidth={1.8} />
            <span className="font-heading text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
            <span className="text-xs text-neutral-400 mt-1 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
