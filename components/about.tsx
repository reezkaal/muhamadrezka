"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Users } from "lucide-react";

const points = [
  {
    icon: Code2,
    title: "Attention to Detail",
    description:
      "Pay close attention to accuracy, code quality, and consistency to ensure reliable and maintainable results.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and I am committed to continuously learning new tools, improving my skills, and adapting to new challenges.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I value teamwork, open communication, and collaboration to achieve shared goals while continuously learning from others.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[640px]"
        >
          <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
            About
          </p>
          <h2 className="mt-3 text-[30px] font-semibold tracking-tightest text-foreground md:text-[36px]">
            Driven by Curiosity and Continuous Learning.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-muted">
            I recently graduated with a degree in Informatics Engineering and developed a strong interest in technology through academic projects and hands-on learning. 
            Throughout my studies, I strengthened my problem-solving, analytical thinking, and teamwork skills while exploring various technologies. 
            I am always eager to learn, adapt, and continue growing both personally and professionally.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-border bg-surface p-6 shadow-subtle"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-[#FAFAFA]">
                <point.icon size={18} strokeWidth={1.75} className="text-accent" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-muted">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
