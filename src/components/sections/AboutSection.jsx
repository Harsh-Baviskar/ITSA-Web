import { Rocket01Icon, Award01Icon, UserMultipleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function AboutSection() {
  const highlights = [
    {
      title: 'Our Mission',
      desc: 'Bridge the gap between academic theory and real-world tech industry practices through hands-on hackathons and project bootcamps.',
      icon: Rocket01Icon
    },
    {
      title: 'Peer Learning',
      desc: 'A thriving community where seniors mentor juniors in web development, AI/ML, cloud technologies, competitive programming, and UI design.',
      icon: UserMultipleIcon
    },
    {
      title: 'Excellence & Impact',
      desc: 'Consistently representing our institution at national hackathons, bagging accolades, and publishing open-source projects.',
      icon: Award01Icon
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs uppercase font-semibold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full mb-3">
          Who We Are
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">
          About ITSA
        </h2>
        <p className="mt-4 text-neutral-400 max-w-2xl text-base sm:text-lg">
          The Information Technology Student's Association is the heart of engineering excellence, student leadership, and tech innovation at our college.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/40 transition-all group backdrop-blur-sm hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HugeiconsIcon icon={item.icon} size={24} strokeWidth={2} />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
