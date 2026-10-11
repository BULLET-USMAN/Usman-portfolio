/**
 * Static, dependency-free stand-in for the 3D hero scene. No WebGL, no JS
 * animation loop — just layered radial gradients. Used on low-tier
 * devices, when WebGL is unavailable, and when reduced-motion is on.
 */
export function StaticGlow() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center lg:justify-end lg:pr-[8%]"
      aria-hidden="true"
    >
      <div
        className="h-64 w-64 rounded-full sm:h-80 sm:w-80"
        style={{
          background:
            'radial-gradient(circle at center, var(--color-accent-dim) 0%, transparent 70%)',
        }}
      />
      <div className="absolute h-40 w-40 rounded-full border border-accent-line sm:h-52 sm:w-52" />
      <div className="absolute h-24 w-24 rounded-full border border-border-strong sm:h-32 sm:w-32" />
    </div>
  )
}
