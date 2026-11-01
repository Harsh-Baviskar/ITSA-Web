import { technicalDomains } from '../../data/domainsData';
import { Layers01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function DomainsSection() {
  return (
    <section id="domains" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs uppercase font-semibold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full mb-3">
          Specializations
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">
          Technical Domains
        </h2>
        <p className="mt-4 text-neutral-400 max-w-2xl text-base sm:text-lg">
          Specialized wings where members collaborate, research cutting-edge technologies, and build impactful projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technicalDomains.map((domain) => (
          <div
            key={domain.id}
            className={`group relative p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 transition-all duration-300 hover:-translate-y-1 ${domain.borderColor} overflow-hidden`}
          >
            {/* Top gradient glow */}
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${domain.color} blur-2xl opacity-40 group-hover:opacity-75 transition-opacity`}></div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-neutral-800 border border-neutral-700/60 text-cyan-400">
                <HugeiconsIcon icon={Layers01Icon} size={20} strokeWidth={2} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                {domain.title}
              </h3>
            </div>

            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              {domain.tagline}
            </p>

            <div className="flex flex-wrap gap-2">
              {domain.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800/80 border border-neutral-700/60 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
