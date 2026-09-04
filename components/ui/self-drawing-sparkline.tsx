'use client';

import { useEffect, useRef, useState } from 'react';

interface SelfDrawingSparklineProps {
  trend?: 'up' | 'sla' | 'surge' | 'down';
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export function SelfDrawingSparkline({
  trend = 'up',
  className = '',
  width = 68,
  height = 26,
  color = '#29A8E0',
}: SelfDrawingSparklineProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Curve paths and endpoint coords (viewBox 0 0 70 28)
  const configs = {
    up: {
      linePath: 'M2 24 C16 20, 26 22, 38 12 C48 7, 56 8, 68 4',
      areaPath: 'M2 24 C16 20, 26 22, 38 12 C48 7, 56 8, 68 4 L68 28 L2 28 Z',
      endPoint: { cx: 68, cy: 4 },
    },
    sla: {
      linePath: 'M2 14 C12 12, 22 16, 32 12 C44 14, 54 9, 68 8',
      areaPath: 'M2 14 C12 12, 22 16, 32 12 C44 14, 54 9, 68 8 L68 28 L2 28 Z',
      endPoint: { cx: 68, cy: 8 },
    },
    surge: {
      linePath: 'M2 25 C22 24, 38 22, 48 13 C54 7, 60 4, 68 3',
      areaPath: 'M2 25 C22 24, 38 22, 48 13 C54 7, 60 4, 68 3 L68 28 L2 28 Z',
      endPoint: { cx: 68, cy: 3 },
    },
    down: {
      linePath: 'M2 5 C16 7, 26 13, 38 18 C48 22, 56 22, 68 24',
      areaPath: 'M2 5 C16 7, 26 13, 38 18 C48 22, 56 22, 68 24 L68 28 L2 28 Z',
      endPoint: { cx: 68, cy: 24 },
    },
  };

  const { linePath, areaPath, endPoint } = configs[trend];
  const gradientId = `sparkline-grad-${trend}-${Math.random().toString(36).substr(2, 5)}`;

  return (
    <div 
      ref={containerRef} 
      className={`relative inline-flex items-center select-none ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 70 28" 
        fill="none" 
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Soft illuminated area fill under line */}
        <path
          d={areaPath}
          fill={`url(#${gradientId})`}
          className="transition-opacity duration-1000 ease-out"
          style={{
            opacity: isInView ? 1 : 0,
            transitionDelay: '600ms',
          }}
        />

        {/* Self-drawing line */}
        <path
          d={linePath}
          stroke={color}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="100"
          style={{
            strokeDasharray: 100,
            strokeDashoffset: isInView ? 0 : 100,
            transition: 'stroke-dashoffset 1.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Glowing endpoint pulse dot */}
        {isInView && (
          <g className="transition-opacity duration-500" style={{ opacity: isInView ? 1 : 0 }}>
            {/* Outer halo */}
            <circle
              cx={endPoint.cx}
              cy={endPoint.cy}
              r="4"
              fill={color}
              className="animate-ping opacity-60"
            />
            {/* Solid core */}
            <circle
              cx={endPoint.cx}
              cy={endPoint.cy}
              r="2.5"
              fill={color}
              stroke="#ffffff"
              strokeWidth="1"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
