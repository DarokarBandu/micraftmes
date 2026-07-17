"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

type AnimatedTitleProps = {
  children: React.ReactNode;
  animationStyle?: "style1" | "style2" | "style3";
  className?: string;
};

export default function AnimatedTitle({
  children,
  animationStyle = "style2",
  className,
}: AnimatedTitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Track when component mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !titleRef.current) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);

    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      if (!titleRef.current) return;

      ctx = gsap.context(() => {
        const quote = titleRef.current;
        if (!quote) return;

        // Target the wrapper specifically for better control
        const target = quote.querySelector('.title-animation-wrapper') || quote;

        // Create split
        const split = new SplitText(target, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });

        gsap.set(target, { perspective: 400 });

        // Set initial hidden state based on animation style
        const fromVars: gsap.TweenVars = { opacity: 0 };
        switch (animationStyle) {
          case "style1":
            fromVars.y = "90%";
            fromVars.rotateX = "-40deg";
            break;
          case "style2":
            fromVars.x = 50;
            break;
          case "style3":
            break;
          default:
            break;
        }

        // Use gsap.from() with ScrollTrigger
        gsap.from(split.chars, {
          ...fromVars,
          scrollTrigger: {
            trigger: quote,
            start: "top 95%",
          },
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.02,
          immediateRender: false,
        });

        // CRITICAL: Return cleanup function to revert SplitText
        return () => {
          if (split && typeof split.revert === 'function') {
            split.revert();
          }
        };
      }, titleRef);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [mounted, animationStyle]);

  return (
    <div ref={titleRef} className={className}>
      <div className="title-animation-wrapper">
        {children}
      </div>
    </div>
  );
}
