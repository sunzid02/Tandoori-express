import { useEffect, useRef, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export function LazyImage({ src, alt, className = '', ...props }: LazyImageProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      src={shouldLoad ? src : undefined}
      alt={alt}
      loading="lazy"
      className={`block bg-beige object-cover dark:bg-white/10 ${className}`}
      {...props}
    />
  );
}
