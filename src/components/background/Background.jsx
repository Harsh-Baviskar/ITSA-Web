import SlicedWaves from './SlicedWaves';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* SlicedWaves WebGL canvas */}
      <SlicedWaves
        color1="#06b6d4" // Cyan
        color2="#3b82f6" // Electric Blue
        color3="#6366f1" // Indigo / Violet
        ribbons={3}
        spacing={26}
        perspective={0.45}
        blur={0.5}
        glow={1.1}
        position={0.65}
        brightness={1.2}
        mouseInteraction={true}
        fade={0.3}
        opacity={0.85}
        className="opacity-70"
      />

      {/* Subtle vignette and ambient dark gradient mask so text always remains ultra crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-transparent to-neutral-950/90 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-neutral-950/30 to-neutral-950/80 pointer-events-none" />
    </div>
  );
}
