import { motion } from 'framer-motion';

const pageVariants = {
  hidden:  { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 140, damping: 22, delay: 0.05 } },
  exit:    { opacity: 0, y: -16, filter: 'blur(8px)',
    transition: { duration: 0.22, ease: 'easeInOut' } },
};

/**
 * PlaceholderPage — shows only the animated background with a page heading.
 * Props:
 *   label    — page title (e.g. "About Us")
 *   category — parent group label (e.g. "Explore ITSA")
 *   onBack   — called when Back is clicked
 */
export default function PlaceholderPage({ label, category, onBack }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',   /* transparent — clicks fall through to background */
      }}
    >
      {/* Back button — needs pointer events re-enabled */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        style={{
          pointerEvents: 'auto',
          position: 'absolute',
          top: '2.4rem',
          left: 'calc(240px + 3rem)',
          background: 'transparent',
          border: '1px solid rgba(196,247,255,0.2)',
          color: '#c4f7ff', padding: '6px 18px', borderRadius: '999px',
          cursor: 'pointer', fontSize: '13px', letterSpacing: '0.06em',
          fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '8px',
          backdropFilter: 'blur(8px)',
        }}
      >
        ← Back
      </motion.button>

      {/* Heading block */}
      <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
        {/* Category label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.5 } }}
          style={{
            fontSize: '11px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(173,244,255,0.55)',
            margin: '0 0 14px',
            fontFamily: 'inherit',
            fontWeight: 600,
          }}
        >
          {category}
        </motion.p>

        {/* Page name */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18, delay: 0.26 } }}
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 800,
            color: '#f5f5f5',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            margin: 0,
            fontFamily: 'Anton, inherit',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </motion.h1>

        {/* Accent dot */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 18, delay: 0.4 } }}
          style={{
            display: 'inline-block',
            width: 8, height: 8, borderRadius: '50%',
            background: '#adf4ff',
            marginTop: 18,
            boxShadow: '0 0 16px 4px rgba(173,244,255,0.45)',
          }}
        />
      </div>
    </motion.div>
  );
}
