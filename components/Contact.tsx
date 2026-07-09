"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const EMAIL = "hello@addisonhagan.dev";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something great together.
          </h2>
          <p className="mt-6 text-lg leading-7 text-neutral-400">
            I&apos;m currently open to Frontend and Full-Stack Software
            Engineering opportunities. Whether it&apos;s a role,
            collaboration, or just a conversation, I&apos;d love to hear from
            you.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium whitespace-nowrap text-white transition hover:bg-white/10 sm:px-7 sm:text-base"
          >
            <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
            {EMAIL}
          </a>

          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href="https://github.com/AHagan24"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-white/20 hover:text-white"
            >
              <BsGithub aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/addison-hagan-32583732a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-white/20 hover:text-white"
            >
              <BsLinkedin aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-white/20 hover:text-white"
            >
              <FileText aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-14 font-mono text-xs text-neutral-500">
            ~/contact
          </p>
        </motion.div>
      </div>
    </section>
  );
}
