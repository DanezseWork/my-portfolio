"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Typewriter from 'typewriter-effect';
import { useEffect, useMemo, useState } from "react";
import Skills from "@/components/Skills";
import { ContactForm } from "@/components/ContactForm";
import { TextScramble } from "@/components/ui/text-scramble";
import WorkTimeline from "@/components/WorkTimeline";
import EducationTimeline from "@/components/EducationTimeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const styledDescription = DATA.description
  .replace(
    "Frontend Developer",
    `<span class='text-blue-600 font-semibold shine'>Frontend Developer</span>`
  )
  .replace(
    "responsive UIs",
    `<span class='text-green-600 font-semibold shine'>responsive UIs</span>`
  )
  .replace(
    "Laravel-based systems",
    `<span class='text-purple-600 font-semibold shine'>Laravel-based systems</span>`
  );

const BLUR_FADE_DELAY = 0.04;

const MyTypewriter = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [done, setDone] = useState(false);
  const [init, setInit] = useState(false); // controls when to mount <Typewriter>
  const finalText = "Hi, I'm Daniel";

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.refresh(); // helps with layout shifts


  const timeout = setTimeout(() => {
    setInit(true);
  }, 1500);

  return () => clearTimeout(timeout);
}, []);


  return (
    <>
      {done ? (
        <>{finalText}</>
      ) : init ? (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .deleteAll(1) // ensure it starts empty
              .typeString(finalText)
              .pauseFor(1000)
              .callFunction(() => setDone(true))
              .start();
          }}
          options={{
            autoStart: false, // we'll call .start() manually
            loop: false,
            delay: 100,
            cursor: '|',
          }}
        />
      ) : (
        <span>&nbsp;</span> // empty placeholder while waiting
      )}
    </>
  );
};

export default function Page() {
// inside your Page() function:
const [showEmoji, setShowEmoji] = useState(false);

useEffect(() => {
  // Show emoji after delay to match BlurFade timing (e.g., 1s)
  const timeout = setTimeout(() => setShowEmoji(true), 1000);
  return () => clearTimeout(timeout);
}, []);

  return (
    <main className="flex flex-col min-h-[100dvh] max-w-[700px] px-10 mx-auto space-y-10 minecraft-glass">
      <section id="hero" className="min-h-[100vh] flex items-center">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex flex-col-reverse items-center md:flex-row md:justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                 <MyTypewriter />
                </h1>
                {showEmoji && (
                  <span
                    className="inline-block text-5xl leading-none animate-wave origin-[70%_70%]"
                  >
                    👋
                  </span>
                )}
              </div>
              <TextScramble
                className="text-neutral-500 text-base"
                duration={3}
                speed={0.04}
                delay={1.5}
              >
                {styledDescription}
              </TextScramble>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-[300px] md:size-28 border mb-5 md:mb-0">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className=" min-h-[100vh] flex flex-col justify-center">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 id="about-heading" className="text-3xl font-bold pb-3">
            About Me <span role="img" aria-label="document">🧾</span>
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <WorkTimeline />
      <section id="skills" className=" min-h-[100vh] flex items-center">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold pb-3">Skills ✨</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            <Skills />
          </div>
        </div>
      </section>
      <EducationTimeline />
      <section id="contact" className="min-h-[100vh] flex items-center">
        <div className="flex min-h-0 flex-col gap-y-3 w-full text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold pb-3">Contact Me ✉️</h2>
          </BlurFade>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
