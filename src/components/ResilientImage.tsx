import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  title,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden bg-[#ECEAE4]',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`${containerClassName} flex flex-col items-center justify-center p-6 text-center border border-[#E2DFD8]`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-8 h-8 text-[#7C7870] mb-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" />
          <circle cx="12" cy="12" r="4" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
        <span className="font-serif text-base text-[#171614] leading-snug">
          {title || 'Archivo visual'}
        </span>
        <span className="font-mono text-[11px] text-[#7C7870] mt-1">
          Nilda Marsili · Santa Fe
        </span>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
}
