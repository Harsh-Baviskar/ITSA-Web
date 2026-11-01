import { motion } from 'framer-motion';
import Folder from '../components/folder/Folder';

/* ??? Data ?????????????????????????????????????????????????????????? */
const SECTIONS = [
  {
    label: 'Executive Council', color: '#3d8bff',
    members: [
      { name: 'Harsha Vardhan', role: 'President',      dept: 'CS ? Final Year', image: 'https://picsum.photos/id/1005/900/1200' },
      { name: 'Priya Sharma',   role: 'Vice President', dept: 'IT ? Final Year', image: 'https://picsum.photos/id/1011/900/1200' },
      { name: 'Arjun Mehta',    role: 'Secretary',      dept: 'CS ? Final Year', image: 'https://picsum.photos/id/1012/900/1200' },
    ],
  },
  {
    label: 'Technical Team', color: '#7c5cfc',
    members: [
      { name: 'Rahul Kumar',  role: 'Tech Lead', dept: 'CS ? 3rd Year', image: 'https://picsum.photos/id/1027/900/1200' },
      { name: 'Sneha Joshi',  role: 'Dev Lead',  dept: 'IT ? 3rd Year', image: 'https://picsum.photos/id/1074/900/1200' },
      { name: 'Aditya Nair',  role: 'Web Dev',   dept: 'CS ? 2nd Year', image: 'https://picsum.photos/id/1062/900/1200' },
    ],
  },
  {
    label: 'Events & Outreach', color: '#f97316',
    members: [
      { name: 'Ananya Singh', role: 'Events Head', dept: 'IT ? 3rd Year', image: 'https://picsum.photos/id/91/900/1200' },
      { name: 'Rohan Desai',  role: 'Co-Head',     dept: 'CS ? 2nd Year', image: 'https://picsum.photos/id/1002/900/1200' },
      { name: 'Kavya Menon',  role: 'Outreach',    dept: 'IT ? 2nd Year', image: 'https://picsum.photos/id/338/900/1200' },
    ],
  },
  {
    label: 'Design Team', color: '#ec4899',
    members: [
      { name: 'Ishaan Roy',   role: 'Design Lead', dept: 'CS ? 2nd Year', image: 'https://picsum.photos/id/1060/900/1200' },
      { name: 'Divya Rao',    role: 'UI/UX Lead',  dept: 'IT ? 2nd Year', image: 'https://picsum.photos/id/1016/900/1200' },
      { name: 'Nikhil Verma', role: 'Creative Dir',dept: 'CS ? 2nd Year', image: 'https://picsum.photos/id/338/900/1200' },
    ],
  },
];

/* ??? Framer variants ??????????????????????????????????????????????? */
const pageVariants = {
  hidden:  { opacity: 0, x: 60, filter: 'blur(10px)' },
  visible: { opacity: 1, x: 0,  filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 120, damping: 20, delay: 0.05 } },
  exit:    { opacity: 0, x: -60, filter: 'blur(10px)',
    transition: { duration: 0.28, ease: 'easeInOut' } },
};

/* ??? Page ?????????????????????????????????????????????????????????? */
export default function TeamPage({ onBack }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0,
        left: 'calc(240px + 2rem)',
        overflowY: 'auto',
        zIndex: 20,
        paddingTop: '2.4rem',
        paddingLeft: '2.4rem',
        paddingRight: '2.4rem',
        paddingBottom: '8rem',
      }}
    >
      {/* ?? Back ?? */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'transparent',
          border: '1px solid rgba(196,247,255,0.2)',
          color: '#c4f7ff', padding: '6px 18px', borderRadius: '999px',
          cursor: 'pointer', fontSize: '13px', letterSpacing: '0.06em',
          fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '8px',
          backdropFilter: 'blur(8px)', marginBottom: '2.2rem',
        }}
      >
        ? Back
      </motion.button>

      {/* ?? Heading ?? */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 22, delay: 0.15 } }}
        style={{ marginBottom: '3rem' }}
      >
        <p style={{
          fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase',
          color: '#adf4ff', opacity: 0.65, marginBottom: '6px', fontFamily: 'inherit', margin: '0 0 6px',
        }}>Community &amp; Us</p>
        <h1 style={{
          fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 800,
          color: '#f5f5f5', letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 10px',
          fontFamily: 'inherit',
        }}>
          Our Team
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: '#adf4ff', marginLeft: 10, verticalAlign: 'middle',
            boxShadow: '0 0 12px #adf4ff',
          }} />
        </h1>
        <p style={{ color: 'rgba(245,245,245,0.4)', fontSize: '13px', margin: 0, fontFamily: 'inherit' }}>
          Click a folder to open and explore members.
        </p>
      </motion.div>

      {/* ?? Sections ?? */}
      {SECTIONS.map((section, si) => (
        <motion.section
          key={section.label}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20, delay: 0.25 + si * 0.12 } }}
          style={{ marginBottom: '4rem' }}
        >
          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{
              fontSize: '10px', letterSpacing: '0.26em', textTransform: 'uppercase',
              color: section.color, fontWeight: 700, fontFamily: 'inherit', whiteSpace: 'nowrap',
            }}>
              {section.label}
            </span>
            <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${section.color}55, transparent)` }} />
          </div>

          {/* 3-column folder grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, max-content)',
            gap: '2.4rem 3rem',
          }}>
            {section.members.map((member, mi) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 160, damping: 18, delay: 0.35 + si * 0.12 + mi * 0.08 } }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
              >
                {/* Glassmorphic Folder */}
                <Folder
                  label={member.name.split(' ')[0]}
                  items={[
                    { image: member.image, title: member.name, alt: member.name },
                    { title: member.role, description: member.dept },
                  ]}
                  mode="flap"
                  variant="glass"
                  color={section.color}
                  paperColor="#0d0d20"
                  tabPosition="right"
                  layout="spread"
                  size={1.55}
                  openOn="click"
                  frost={0.32}
                  intro={true}
                  draggable={false}
                  zoomOnClick={false}
                  theme="dark"
                  defaultOpen={false}
                />

                {/* Name + role below folder */}
                <div style={{ textAlign: 'center', maxWidth: '200px' }}>
                  <p style={{
                    color: '#f0f0f5', fontSize: '13.5px', fontWeight: 700,
                    fontFamily: 'inherit', margin: '0 0 3px', letterSpacing: '-0.01em',
                  }}>
                    {member.name}
                  </p>
                  <p style={{
                    color: section.color, fontSize: '11.5px',
                    fontFamily: 'inherit', margin: '0 0 2px', fontWeight: 500,
                  }}>
                    {member.role}
                  </p>
                  <p style={{
                    color: 'rgba(245,245,245,0.38)', fontSize: '10.5px',
                    fontFamily: 'inherit', margin: 0,
                  }}>
                    {member.dept}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
}
