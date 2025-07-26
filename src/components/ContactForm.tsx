"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ContactForm() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border space-y-4">
        <form
          action="https://formspree.io/f/xdkdgagj"
          method="POST"
          className="space-y-4"
        >

          <CardItem
            translateZ="60"
            as="input"
            className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border dark:border-neutral-700 text-sm text-black dark:text-white"
            placeholder="Your Name"
            name="name"
            required
            />

            <CardItem
            translateZ="60"
            as="input"
            type="email"
            className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border dark:border-neutral-700 text-sm text-black dark:text-white"
            placeholder="Your Email"
            name="email"
            required
            />

            <CardItem
            translateZ="60"
            as="textarea"
            className="w-full p-2 h-32 rounded-lg bg-white dark:bg-neutral-800 border dark:border-neutral-700 text-sm text-black dark:text-white resize-none"
            placeholder="Your Message"
            name="message"
            required
            />

          <CardItem
            translateZ="20"
            translateX={0}
            as="button"
            type="submit"
            className="w-full px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold hover:opacity-90"
          >
            Send Message
          </CardItem>
        </form>
      </CardBody>
    </CardContainer>
  );
}
