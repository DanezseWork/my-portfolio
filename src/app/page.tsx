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
import FaultyTerminal from "@/components/FaultyTerminal";
import FuzzyText from "@/components/FuzzyText";
import TextPressure from "@/components/TextPressure";
import TextType from "@/components/TextType";
import Squares from "@/components/Squares";
import ScrollVelocity from "@/components/ScrollVelocity";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal";
import SquaresWrapper from "@/components/SquaresWrapper";
import RippleGrid from "@/components/RippleGrid";
import { Contact } from "lucide-react";
import MyContactSection from "@/components/ContactSection";

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
    <main className="flex flex-col space-y-10">

      <section id="hero" className="min-h-[100vh] flex items-center">
        {/* Foreground text */}
        <div className="flex justify-between w-full max-w-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-[-1]">
          <div className="flex flex-col justify-start">
            <FuzzyText 
              baseIntensity={0.2} 
              hoverIntensity={0.5} 
              enableHover={true}
              fontSize={200}
            >
              Daniel
            </FuzzyText>
            <div className="pl-5 max-w-[450px]">
              {/* <TextPressure
              text="FRONTEND DEVELOPER"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={30}
            /> */}
            <FuzzyText 
              baseIntensity={0.2} 
              hoverIntensity={0.5} 
              enableHover={true}
              fontSize={50}
              fontWeight={500}
            >
              Frontend Developer
            </FuzzyText>

            </div>
            
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-[300px] md:size-100 border mb-5 md:mb-0">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <div className="fixed inset-0 z-[-2]">
          <FaultyTerminal
            scanlineIntensity={.2}
            curvature={0}
            brightness={0.5}
            digitSize={1.5}
          />
        </div>
      </section>
      
      <div className="relative bg-black">
        {/* SQUARE BACKGROUND */}
        <div className="absolute inset-0 opacity-50">
          <Squares 
            speed={0.5} 
            squareSize={50}
            direction="diagonal"
            borderColor="#fff"
          />

        </div>

        <section id="about" className="relative min-h-[100vh] flex flex-col overflow-hidden">
          {/* <ScrollVelocity
            texts={['Welcome To', 'My Portfolio']} 
              velocity={100} 
              className="bg-black"
            /> */}
          {/* CONTENT */}
          <div className="min-h-[100vh] items-center flex flex-col text-center justify-center">
            <div className="flex gap-5">
              <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='top bottom+=10%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
                textClassName="text-2xl font-bold"
              >
                About Me
              </ScrollFloat>
              <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='top bottom+=40%'
                scrollEnd='bottom bottom-=80%'
                stagger={0.03}
                textClassName="text-2xl font-bold"
              >
                <span role="img" aria-label="document">🧾</span>
              </ScrollFloat>
            </div>
          
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={20}
          blurStrength={10}
          textClassName="!text-[20px] max-w-[600px] text-muted-foreground dark:text-muted-background"
        >
          {DATA.summary}
        </ScrollReveal>
          </div>
        </section>

        <WorkTimeline />

        <section id="skills" className=" min-h-[100vh] flex flex-col justify-center items-center">
          <div className="flex gap-5">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='top bottom+=10%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textClassName="text-2xl font-bold"
            >
              Skills
            </ScrollFloat>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='top bottom+=40%'
              scrollEnd='bottom bottom-=80%'
              stagger={0.03}
              textClassName="text-2xl font-bold"
            >
              <span role="img" aria-label="document">✨</span>
            </ScrollFloat>
          </div>
          <div className="flex min-h-0 flex-col gap-y-3">
            <div className="flex flex-wrap gap-1">
              <Skills />
            </div>
          </div>
        </section>

        <EducationTimeline />
{/* 
        <ScrollVelocity
          texts={['Reach Out', 'Contact Me']} 
          velocity={100} 
          className="bg-black"
        /> */}
      </div>

      <MyContactSection />
      {/* <section id="contact" className="min-h-[100vh] flex items-center bg-black !mt-0">
        <div className="flex min-h-0 flex-col gap-y-3 w-full text-center relative">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='top bottom+=10%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textClassName="text-2xl font-bold"
          >
            Contact Me <span role="img" aria-label="document">✉️</span>
          </ScrollFloat>
          <ContactForm/>
            <RippleGrid
              enableRainbow={false}
              gridColor="#ffffff"
              rippleIntensity={0.05}
              gridSize={10}
              gridThickness={15}
              mouseInteraction={true}
              mouseInteractionRadius={1.2}
              opacity={0.8}
            />
        </div>
      </section> */}
    </main>
  );
}
