import { itsaEvents } from '../../data/eventsData';
import { Calendar01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function EventsSection() {
  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs uppercase font-semibold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full mb-3">
          What's Happening
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">
          Events & Workshops
        </h2>
        <p className="mt-4 text-neutral-400 max-w-2xl text-base sm:text-lg">
          From high-energy 36-hour hackathons to hands-on tech masterclasses led by industry engineers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {itsaEvents.map((evt) => (
          <div
            key={evt.id}
            className="flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                  evt.status === 'Upcoming' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                }`}>
                  {evt.status}
                </span>
                <span className="text-xs font-medium text-cyan-400">
                  {evt.tag}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-2">
                {evt.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
                <HugeiconsIcon icon={Calendar01Icon} size={14} />
                <span>{evt.date}</span>
                <span>•</span>
                <span>{evt.location}</span>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {evt.description}
              </p>
            </div>

            <button className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-cyan-500/20 text-neutral-200 hover:text-cyan-300 border border-neutral-700 hover:border-cyan-500/40 transition-all cursor-pointer">
              {evt.status === 'Upcoming' ? 'Register Now' : 'View Recap & Photos'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
