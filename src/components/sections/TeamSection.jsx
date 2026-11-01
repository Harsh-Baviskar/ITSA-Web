import { teamMembers } from '../../data/teamData';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs uppercase font-semibold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full mb-3">
          Our Backbone
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">
          Meet the ITSA Council
        </h2>
        <p className="mt-4 text-neutral-400 max-w-2xl text-base sm:text-lg">
          A dynamic collective of student leaders, coders, designers, and organizers powering ITSA initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 backdrop-blur-sm group"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-16 h-16 rounded-xl object-cover border border-neutral-700/80 group-hover:border-cyan-400 transition-colors"
            />
            <div>
              <span className="text-[11px] font-semibold text-cyan-400 tracking-wider uppercase">
                {member.wing}
              </span>
              <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {member.name}
              </h3>
              <p className="text-xs text-neutral-400">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Junior contributor note / callout */}
      <div className="mt-12 p-6 rounded-2xl bg-neutral-900/40 border border-dashed border-neutral-800 text-center">
        <p className="text-sm text-neutral-400">
          💡 <strong className="text-neutral-200">For ITSA Team Members:</strong> To add your profile, open{' '}
          <code className="text-cyan-400 bg-neutral-950 px-2 py-0.5 rounded text-xs">src/data/teamData.js</code>{' '}
          and append your name, role, photo URL, and links!
        </p>
      </div>
    </section>
  );
}
