import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import SlicedWaves from './components/background/SlicedWaves';
import BranchedMenu from './components/navigation/BranchedMenu';
import SplitFlapText from './components/text/SplitFlapText';
import MaskedHeading from './components/text/FullformText';
import PlaceholderPage from './pages/PlaceholderPage';
import TeamPage from './pages/TeamPage';
import { itsaMenuItems } from './data/navigationData';

/* ?? Spring presets ?? */
const SPRING_CRISP = { type: 'spring', stiffness: 160, damping: 22, mass: 1 };
const SPRING_SNAP = { type: 'spring', stiffness: 220, damping: 26, mass: 0.8 };

/* ?? Entrance variants ?? */
const logoVariants = {
  hidden: { opacity: 0, y: -22, scale: 0.88, filter: 'blur(8px) brightness(2.4)' },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px) brightness(1)',
    transition: { ...SPRING_SNAP, delay: 0 }
  },
};
const menuVariants = {
  hidden: { opacity: 0, x: -52, filter: 'blur(4px)' },
  visible: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { ...SPRING_CRISP, delay: 0.18 }
  },
};
const contentVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { ...SPRING_CRISP, delay: 0.32 }
  },
};

const PAGE_MAP = {
  /* Explore ITSA */
  about: { component: PlaceholderPage, label: 'About Us', category: 'Explore ITSA' },
  vision: { component: PlaceholderPage, label: 'Vision & Mission', category: 'Explore ITSA' },
  /* Activities */
  events: { component: PlaceholderPage, label: 'Flagship Events', category: 'Activities' },
  achievements: { component: PlaceholderPage, label: 'Achievements', category: 'Activities' },
  /* Community & Us */
  team: { component: TeamPage, label: 'Our Team', category: 'Community & Us' },
  socials: { component: PlaceholderPage, label: 'Us on Socials', category: 'Community & Us' },
  contact: { component: PlaceholderPage, label: 'Get in Touch', category: 'Community & Us' },
};

export default function App() {
  const [activePage, setActivePage] = useState(null);
  const scrollRef = useRef(null);

  /* scroll-linked fade for the content section */
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);

  const handleSelect = (value) => {
    setActivePage(PAGE_MAP[value] ? value : null);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };
  const handleBack = () => {
    setActivePage(null);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const pageEntry = activePage ? PAGE_MAP[activePage] : null;
  const PageComponent = pageEntry?.component ?? null;

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#09090b' }}>

      {/* ?? Background ?? */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <SlicedWaves color1="#3b82f6" color2="#eab308" color3="#a7d661"
          ribbons={3} spacing={28} perspective={0.45} blur={0.6} glow={1}
          position={0.78} mouseInteraction={true} />
      </div>

      {/* ?? Logo ? top centre (click to go home) ?? */}
      <motion.div variants={logoVariants} initial="hidden" animate="visible"
        style={{ position: 'absolute', top: 24, left: '50%', translateX: '-50%', zIndex: 50 }}>
        <motion.button
          onClick={handleBack}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          style={{
            background: 'transparent', border: 'none', padding: 0,
            cursor: 'pointer', display: 'block', lineHeight: 0,
          }}
          title="Go to Home"
        >
          <img src="/logo.png" alt="ITSA Logo"
            style={{ height: 70, width: 'auto', objectFit: 'contain', display: 'block' }} />
        </motion.button>
      </motion.div>

      {/* ?? Scroll container — hidden when any page is active so home content doesn't show through ?? */}
      <div ref={scrollRef} style={{
        position: 'absolute', inset: 0, zIndex: 5,
        overflowY: 'scroll',
        overflowX: 'hidden',
        visibility: activePage ? 'hidden' : 'visible',
        pointerEvents: activePage ? 'none' : 'auto',
      }}>
        {/* tall canvas so scroll-linked transforms have range */}
        <div style={{ height: '160vh', position: 'relative' }}>

          <div style={{
            position: 'sticky', top: 0, height: '100vh',
            overflow: 'hidden', pointerEvents: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>

            {/* ?? Main content layer ?? */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              style={{
                opacity: sectionOpacity,
                textAlign: 'center',
                width: 'min(1180px, calc(100vw - 300px))',
                padding: '0 1rem',
                pointerEvents: 'none',
              }}
            >
              {/* ?? MaskedHeading: full ITSA name ?? */}
              <MaskedHeading
                text="Information Technology Students Association"
                tag="h2"
                mediaType="video"
                src="https://www.pexels.com/download/video/35925210/"
                poster="https://picsum.photos/id/0/1400/400"
                reveal="blur"
                trigger="view"
                parallax={20}
                drift={12}
                brightness={1.15}
                saturation={1.5}
                spotlight={false}
                spotlightRadius={260}
                textScale={0.09}
                align="center"
                weight={900}
                tracking={-0.03}
                lineHeight={1.05}
                duration={0.03}
                stagger={0.06}
                style={{
                  color: '#adf4ff',
                  marginBottom: '20px',
                  /*fontFamily: '"Anton", "Bebas Neue", sans-serif'*/
                  fontFamily: 'Anton',
                  textTransform: 'uppercase',
                }}
              />

              {/* Accent line */}
              <div style={{
                width: '52px', height: '1px', margin: '0 auto 20px',
                background: 'linear-gradient(90deg, transparent, rgba(173,244,255,0.6), transparent)',
              }} />

              {/* College */}
              <p style={{
                fontSize: '20px', letterSpacing: '0.8em', textTransform: 'uppercase',
                color: 'rgba(245,245,245,0.30)', margin: '0 0 18px', fontFamily: 'inherit', fontWeight: 'bold'
              }}>
                PVG&rsquo;s COET &amp; M
              </p>

              {/* ?? SplitFlapText year tag (moved from hero) ?? */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                <SplitFlapText
                  words={['2026-2027']}
                  flipDuration={0.12}
                  stagger={0.06}
                  cycleDelay={2400}
                  charset="alphanumeric"
                  flipsPerChar={8}
                  order="left"
                  align="center"
                  tileStyle="board"
                  tileColor="#0f172a"
                  textColor="#c4f7ff"
                  glare={0}
                  depth={0.5}
                  tileRadius={8}
                  gap={6}
                  fontSize={32}
                  loop={false}
                  padTo={9}
                  intro
                />
              </div>

              {/* ?? MaskedHeading: tagline ?? */}
              <MaskedHeading
                text="By the students, For the students."
                tag="p"
                mediaType="video"
                src="https://www.pexels.com/download/video/8482781/"
                reveal="wipe"
                trigger="view"
                parallax={10}
                drift={6}
                brightness={1.0}
                saturation={1.2}
                spotlight={false}
                textScale={0.044}
                align="center"
                weight={900}
                tracking={0.005}
                lineHeight={1.2}
                duration={0.04}
                stagger={0.045}
                style={{
                  color: 'rgba(245,245,245,0.82)',
                  fontStyle: 'italic',
                  marginBottom: '16px',
                }}
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* ?? Page overlay ?? */}
      <AnimatePresence mode="wait">
        {PageComponent && (
          <PageComponent
            key={activePage}
            onBack={handleBack}
            label={pageEntry.label}
            category={pageEntry.category}
          />
        )}
      </AnimatePresence>

      {/* ?? BranchedMenu ? always on top ?? */}
      <motion.div variants={menuVariants} initial="hidden" animate="visible"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 30, padding: '2rem' }}>
        <BranchedMenu items={itsaMenuItems} defaultOpen={-1} onSelect={handleSelect}
          color="#f5f5f5" accentColor="#adf4ffff" lineColor="#3f3f46" width={240} />
      </motion.div>

    </div>
  );
}
