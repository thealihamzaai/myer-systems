'use client';

interface LiveSignalBeaconProps {
  color?: 'brand' | 'emerald' | 'amber';
  label?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export function LiveSignalBeacon({
  color = 'brand',
  label,
  className = '',
  size = 'md',
}: LiveSignalBeaconProps) {
  const colorMap = {
    brand: {
      ping: 'bg-[#29A8E0]/40',
      dot: 'bg-[#29A8E0]',
      border: 'border-[#29A8E0]/20',
      text: 'text-[#1A6FA8]',
    },
    emerald: {
      ping: 'bg-emerald-500/40',
      dot: 'bg-emerald-500',
      border: 'border-emerald-500/20',
      text: 'text-emerald-700',
    },
    amber: {
      ping: 'bg-amber-500/40',
      dot: 'bg-amber-500',
      border: 'border-amber-500/20',
      text: 'text-amber-700',
    },
  };

  const selected = colorMap[color];
  const dotSize = size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2';
  const pingSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';

  return (
    <span className={`inline-flex items-center gap-1.5 select-none ${className}`}>
      <span className="relative flex items-center justify-center">
        <span className={`absolute ${pingSize} rounded-full ${selected.ping} animate-ping`} />
        <span className={`relative ${dotSize} rounded-full ${selected.dot}`} />
      </span>
      {label && (
        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${selected.text}`}>
          {label}
        </span>
      )}
    </span>
  );
}
