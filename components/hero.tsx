"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 pb-20 md:pt-24 md:pb-24"
    >
      <div className="section-container grid grid-cols-1 items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        <div>
          

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-[40px] font-semibold leading-[1.1] tracking-tightest text-foreground sm:text-[52px] md:text-[56px]"
          >
            Muhamad Rezka Al Anshori
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-3 text-[18px] font-medium text-accent md:text-[20px]"
          >
            Fresh Graduate Informatics Engineering
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-muted md:text-[17px]"
          >
            Fresh Graduate in Informatics Engineering with a strong interest in technology and continuous learning.
             Passionate about solving problems, exploring new technologies,
             and improving technical skills through hands-on projects and real-world experiences.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex items-center gap-4"
          >
            <a
              href="#contact"
              className={buttonVariants({ size: "lg", className: "group" })}
            >
              Contact Me
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#projects"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-[360px] md:mx-0"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <img
              src="/fotorezka.jpg"
              alt="Portrait of Muhamad Rezka Al Anshori"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-surface px-4 py-3 shadow-card md:block">
            <p className="text-[13px] font-medium text-foreground">
              Based in South Tangerang, Indonesia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
