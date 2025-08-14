'use client';

import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/data/resume';
import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';
import React from 'react';

const Skills: React.FC = () => {
  // Flatten the MY_STACK data into a single array of all skills
  const allSkills = Object.values(MY_STACK).flat();

  // Split skills into two halves
  const middleIndex = Math.ceil(allSkills.length / 2);
  const firstHalf = allSkills.slice(0, middleIndex);
  const secondHalf = allSkills.slice(middleIndex);

  return (
    <section id="my-stack">
      <div className="container">
        {/* <SectionTitle title="My Stack" /> */}

        <div className="py-20 space-y-8">
          {/* First row - Left direction */}
          <Marquee speed="slow" pauseOnHover direction="left">
            {firstHalf.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-3.5 leading-none w-fit px-5"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-10 object-contain"
                />
                <span className="text-2xl capitalize whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </Marquee>

          {/* Second row - Right direction */}
          <Marquee speed="slow" pauseOnHover direction="right">
            {secondHalf.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-3.5 leading-none w-fit mr-10"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-10 object-contain"
                />
                <span className="text-2xl capitalize whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
