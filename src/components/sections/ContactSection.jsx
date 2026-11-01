import { Mail01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800 p-8 sm:p-14 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <HugeiconsIcon icon={Mail01Icon} size={16} />
              <span>Connect with ITSA</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white leading-tight">
              Ready to build the future with us?
            </h2>
            <p className="mt-4 text-neutral-400 text-base leading-relaxed">
              Whether you want to join our executive committees, collaborate as an industry sponsor, or propose a campus workshop — our doors are always open.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Department of Information Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>itsa@college.edu</span>
              </div>
            </div>
          </div>

          {/* Quick contact form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for reaching out to ITSA! We will get back to you shortly.');
            }}
            className="flex flex-col gap-4 bg-neutral-950/70 p-6 sm:p-8 rounded-2xl border border-neutral-800/80 backdrop-blur-md"
          >
            <h3 className="font-heading text-xl font-bold text-white mb-2">Send us a message</h3>
            <div>
              <label className="text-xs text-neutral-400 mb-1 block">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Sharma"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-neutral-400 mb-1 block">College Email / Roll No.</label>
              <input
                type="email"
                required
                placeholder="alex@college.edu"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-cyan-500 focus:outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-neutral-400 mb-1 block">What are you interested in?</label>
              <textarea
                rows={3}
                required
                placeholder="Joining a domain, volunteering for hackathons, sponsorship..."
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-cyan-500 focus:outline-none text-white text-sm resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
