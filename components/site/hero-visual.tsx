'use client';

/**
 * 3D Celestial Dual Spheres & Planetary Orbital System for Myer Systems.
 * Rendered in Myer Systems' Precision & Data palette (Sky Blue #29A8E0,
 * Steel Blue #1A6FA8, Light Sky #8FD6F5, and Dark Steel #101820)
 * perfectly calibrated for high contrast and elegance on the Off White canvas.
 */
export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[500px] aspect-square select-none pointer-events-none">
      
      {/* Ambient Luminous Sky Blue & Steel Blue Glow Bloom */}
      <div 
        className="absolute h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-tr from-brand/20 via-[#1A6FA8]/15 to-brand-tint/40 blur-[90px] animate-pulse" 
        style={{ animationDuration: '6s' }}
        aria-hidden="true" 
      />

      <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
        
        {/* ── Outer Planetary Orbital Ring ── */}
        <svg 
          className="absolute inset-0 w-full h-full z-20 animate-[spin_60s_linear_infinite]"
          viewBox="0 0 380 380" 
          fill="none"
        >
          <ellipse 
            cx="190" 
            cy="190" 
            rx="180" 
            ry="75" 
            stroke="url(#ringGradPrecision)" 
            strokeWidth="1.75" 
            transform="rotate(-28 190 190)" 
          />
          <defs>
            <linearGradient id="ringGradPrecision" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#29A8E0" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#1A6FA8" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#8FD6F5" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#29A8E0" stopOpacity="0.75" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── Sphere 1: Top-Right Glossy Sky & Steel Metallic Sphere ── */}
        <div 
          className="absolute top-2 right-4 sm:top-4 sm:right-6 w-[150px] h-[150px] sm:w-[185px] sm:h-[185px] rounded-full z-10 shadow-[0_20px_50px_rgba(26,111,168,0.35)]"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #8FD6F5 0%, #29A8E0 30%, #1A6FA8 65%, #101820 95%)',
          }}
        >
          {/* Intense Top Gloss Specular Sheen */}
          <div 
            className="absolute top-2.5 left-5 w-[75px] h-[45px] sm:w-[95px] sm:h-[55px] rounded-full bg-gradient-to-b from-white/80 via-white/30 to-transparent blur-[2px] transform -rotate-30" 
            aria-hidden="true" 
          />
          {/* Rim light border */}
          <div className="absolute inset-0 rounded-full border border-white/40" aria-hidden="true" />
        </div>

        {/* ── Sphere 2: Center-Left Luminous Geodesic Wireframe Sphere ── */}
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-[210px] h-[210px] sm:w-[255px] sm:h-[255px] rounded-full z-10">
          
          {/* Translucent Glass Core with Cyan Glow */}
          <div 
            className="absolute inset-0 rounded-full shadow-[inset_-15px_-15px_40px_rgba(16,24,32,0.6),inset_15px_15px_35px_rgba(41,168,224,0.35),0_15px_40px_rgba(41,168,224,0.25)]"
            style={{
              background: 'radial-gradient(circle at 40% 35%, rgba(224,244,252,0.85) 0%, rgba(143,214,245,0.6) 40%, rgba(26,111,168,0.7) 80%, rgba(16,24,32,0.95) 100%)'
            }}
          />

          {/* Precision Longitude / Latitude Vector Mesh */}
          <svg 
            className="absolute inset-0 w-full h-full rounded-full opacity-85"
            viewBox="0 0 255 255" 
            fill="none"
          >
            {/* Latitudes */}
            <ellipse cx="127.5" cy="60" rx="98" ry="25" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.6" />
            <ellipse cx="127.5" cy="95" rx="120" ry="34" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" />
            <ellipse cx="127.5" cy="127.5" rx="125" ry="40" stroke="#FFFFFF" strokeWidth="1.3" strokeOpacity="0.85" />
            <ellipse cx="127.5" cy="160" rx="120" ry="34" stroke="#8FD6F5" strokeWidth="1" strokeOpacity="0.6" />
            <ellipse cx="127.5" cy="195" rx="98" ry="25" stroke="#8FD6F5" strokeWidth="0.9" strokeOpacity="0.5" />

            {/* Longitudes */}
            <ellipse cx="127.5" cy="127.5" rx="38" ry="125" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.65" />
            <ellipse cx="127.5" cy="127.5" rx="80" ry="125" stroke="#8FD6F5" strokeWidth="0.9" strokeOpacity="0.5" />
            <ellipse cx="127.5" cy="127.5" rx="116" ry="125" stroke="#8FD6F5" strokeWidth="0.8" strokeOpacity="0.4" />
            <line x1="127.5" y1="2" x2="127.5" y2="253" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.75" />

            {/* Glowing Internal Data Nodes */}
            {[
              [127.5, 60], [80, 95], [175, 95], [45, 127.5], [127.5, 127.5], [210, 127.5], [80, 160], [175, 160], [127.5, 195]
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="2.75" fill="#FFFFFF" className="animate-pulse" style={{ animationDelay: `${i * 0.35}s` }} />
                <circle cx={cx} cy={cy} r="5.5" stroke="#29A8E0" strokeWidth="0.8" strokeOpacity="0.8" />
              </g>
            ))}
          </svg>

          {/* Surface Gloss Sheen */}
          <div 
            className="absolute top-2 left-5 w-[100px] h-[60px] rounded-full bg-gradient-to-b from-white/70 to-transparent blur-[2px] transform -rotate-25 pointer-events-none" 
            aria-hidden="true" 
          />
        </div>

        {/* ── Floating Crystalline Satellites / Prisms in Precision Blues ── */}
        
        {/* Crystal 1 (Top Right Floating Diamond) */}
        <div 
          className="absolute -top-1 -right-1 sm:top-2 sm:right-2 w-7 h-7 sm:w-9 sm:h-9 z-30 animate-bounce"
          style={{ animationDuration: '4.5s' }}
        >
          <svg viewBox="0 0 36 36" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(26,111,168,0.4)]">
            <polygon points="18,2 34,18 18,34 2,18" fill="url(#prismGradA2)" stroke="#1A6FA8" strokeWidth="1" />
            <polygon points="18,2 18,34 34,18" fill="#FFFFFF" fillOpacity="0.4" />
            <defs>
              <linearGradient id="prismGradA2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8FD6F5" />
                <stop offset="100%" stopColor="#1A6FA8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Crystal 2 (Lower Right Floating Diamond) */}
        <div 
          className="absolute bottom-6 -right-2 sm:bottom-10 sm:right-0 w-6 h-6 sm:w-8 sm:h-8 z-30"
        >
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full drop-shadow-[0_4px_10px_rgba(41,168,224,0.35)]">
            <polygon points="16,2 30,16 16,30 2,16" fill="url(#prismGradB2)" stroke="#29A8E0" strokeWidth="0.8" />
            <defs>
              <linearGradient id="prismGradB2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#29A8E0" />
                <stop offset="100%" stopColor="#101820" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Small Floating Orb 3 (Bottom Left Orbit) */}
        <div 
          className="absolute bottom-2 left-6 w-5 h-5 rounded-full z-30 shadow-[0_4px_14px_rgba(41,168,224,0.45)] animate-pulse"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #8FD6F5 35%, #29A8E0 75%, #1A6FA8 100%)',
            animationDuration: '3s'
          }}
        />

      </div>
    </div>
  );
}
