import React from "react";

/**
 * PerimeterPageLayout
 * Shared chrome for Perimeter's legal/info pages (privacy policy, support, etc).
 * Green diamond-checker background, image wordmark, white Lato body copy.
 *
 * Drop your logo file in as `/perimeter-wordmark.png` (e.g. in your public/
 * folder), or pass a different path via the `logoSrc` prop.
 *
 * Usage:
 *   <PerimeterPageLayout title="Privacy Policy">
 *     ...your content...
 *   </PerimeterPageLayout>
 */

export default function PerimeterPageLayout({
  title,
  children,
  logoSrc = "/images/perimeter-wordmark.png",
  logoAlt = "Perimeter",
}) {
  const tileSize = 56; // size of each square BEFORE rotation
  const half = tileSize / 2;
  const lightGreen = "#2F654B";
  const darkGreen = "#295C44";

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center relative overflow-hidden"
      style={{ backgroundColor: lightGreen }}
    >
      {/* Diamond checker: a normal axis-aligned checkerboard, oversized and
          rotated 45deg so the squares read as diamonds, like the reference. */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          inset: "-60%",
          backgroundImage: `
            linear-gradient(45deg, ${darkGreen} 25%, transparent 25%),
            linear-gradient(-45deg, ${darkGreen} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${darkGreen} 75%),
            linear-gradient(-45deg, transparent 75%, ${darkGreen} 75%)
          `,
          backgroundSize: `${tileSize}px ${tileSize}px`,
          backgroundPosition: `0 0, 0 ${half}px, ${half}px -${half}px, -${half}px 0`,
          transform: "rotate(45deg)",
        }}
      />
      {/* Font: Lato for body copy */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
      `}</style>

      <div className="relative z-10 w-full max-w-3xl px-6 sm:px-10 pt-16">
        {/* Wordmark */}
        <div className="flex justify-center">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-auto"
            style={{ maxWidth: "min(100%, 1500px)", height: "auto" }}
          />
        </div>

        {/* Page heading (optional, kept quiet — the wordmark is the only shout on this page) */}
        {title && (
          <h1
            className="text-white/90 text-5xl font-bold text-left mb-8 mt-16"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {title}
          </h1>
        )}

        {/* Body content */}
        <div
          className="text-white text-left text-base sm:text-lg leading-relaxed space-y-5"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}