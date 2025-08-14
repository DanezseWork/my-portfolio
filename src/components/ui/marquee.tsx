

import React from 'react';
import { cn } from "@/lib/utils"; // Assuming you have a utility for class names

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
}

const Marquee = ({
  className,
  children,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
}: MarqueeProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [childrenWidth, setChildrenWidth] = React.useState(0);

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      // Calculate the total width of all children
      const totalWidth = Array.from(containerRef.current.children).reduce(
        (acc, child) => acc + child.scrollWidth,
        0
      );
      setChildrenWidth(totalWidth);
    }
  }, [children]);

  const speedClasses = {
    fast: 'marquee-speed-fast',
    normal: 'marquee-speed-normal',
    slow: 'marquee-speed-slow',
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex overflow-hidden [--duration:40s] [--gap:1rem]',
        className
      )}
    >
      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(calc(-100% - var(--gap)));
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation-name: scroll-${direction};
          animation-duration: var(--duration);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-speed-fast { --duration: 20s; }
        .marquee-speed-normal { --duration: 40s; }
        .marquee-speed-slow { --duration: 60s; }
      `}</style>
      <div
        className={cn(
          'flex flex-shrink-0 justify-around gap-[--gap] animate-scroll',
          speedClasses[speed],
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex flex-shrink-0 justify-around gap-[--gap] animate-scroll',
          speedClasses[speed],
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { Marquee };