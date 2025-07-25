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
  const [done, setDone] = useState(false);
  const [init, setInit] = useState(false); // controls when to mount <Typewriter>
  const finalText = "Hi, I'm Daniel";

  useEffect(() => {
    // Delay mounting Typewriter to prevent initial text flash
    const timeout = setTimeout(() => {
      setInit(true);
    }, 1500); // small delay is enough
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
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                {/* <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                /> */}
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
              {/* <BlurFadeText
                html={styledDescription}
                className="text-neutral-700 text-base"
              /> */}
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
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className=" min-h-[100vh] flex flex-col justify-center">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-3xl font-bold pb-3">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work" className=" min-h-[100vh] flex items-center">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl font-bold pb-3">Work</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills" className=" min-h-[100vh] flex items-center">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold pb-3">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {/* {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))} */}
            <Skills />
          </div>
        </div>
      </section>
      <section id="education" className="min-h-[100vh] flex items-center">
        <div className="flex min-h-0 flex-col gap-y-3 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-3xl font-bold pb-3">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      
      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact" className="min-h-[100vh] flex items-center">
        <div className="flex min-h-0 flex-col gap-y-3 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold pb-3">Contact</h2>
          </BlurFade>
          <ContactForm />
        </div>
        {/* <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m currently looking for new opportunities, my inbox is
                always open. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
            </div>
          </BlurFade>
        </div> */}
      </section>
    </main>
  );
}
