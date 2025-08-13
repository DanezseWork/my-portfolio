"use client";

import { useEffect, useRef } from "react";
import { DATA } from "@/data/resume";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ScrollFloat from "./ScrollFloat";


gsap.registerPlugin(ScrollTrigger);

const EducationTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".timeline-item");
    if (items) {
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    if (lineRef.current && containerRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="education" className="min-h-[100vh] py-16 px-4 flex flex-col items-center">
      <div className="flex gap-5">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom+=10%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="text-2xl font-bold"
        >
        Education
        </ScrollFloat>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom+=40%'
          scrollEnd='bottom bottom-=80%'
          stagger={0.03}
          textClassName="text-2xl font-bold"
        >
          <span role="img" aria-label="document">🎓</span>
        </ScrollFloat>
      </div>    
      <div className="relative mx-auto max-w-5xl" ref={containerRef}>
        <div
          ref={lineRef}
          className="timeline-line absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full origin-top scale-y-0 bg-black dark:bg-white z-0"
        />

        <div className="space-y-10 relative z-10">
          {DATA.education.map((edu, index) => (
            <div
              key={edu.school}
              className={cn(
                "timeline-item relative flex flex-col md:flex-row gap-6",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black z-10" />

              <div
                className={cn(
                  "bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-md border border-muted ml-5 md:ml-0 md:w-1/2",
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                )}
              >
                <div className="flex items-center gap-3 mb-2">  
                  <div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                  </div>  
                  {edu.logoUrl && (
                    <Image
                      src={edu.logoUrl}
                      alt={edu.school}
                      width={40}
                      height={40}
                      className="rounded-full object-contain"
                    />
                  )}
                </div>
                <p className="text-xs">
                  {edu.start} – {edu.end}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
