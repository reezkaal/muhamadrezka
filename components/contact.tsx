"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "rezkamuhamad212@gmail.com",
    href: "mailto:rezkamuhamad212@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhamad-rezka-al-anshori",
    href: "https://linkedin.com/in/muhamad-rezka-al-anshori",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    value: "@rezka.al",
    href: "https://instagram.com/rezka.al",
    icon: Instagram,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[560px] text-center"
        >
          <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-[30px] font-semibold tracking-tightest text-foreground md:text-[36px]">
            Let's Connect.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-muted">
            I'm always open to connecting with new people,
             discussing opportunities, and learning through meaningful conversations and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.label !== "Email" ? "_blank" : undefined}
              rel={channel.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-7 text-center shadow-subtle transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-[#FAFAFA] transition-colors duration-200 group-hover:border-accent/40 group-hover:bg-accent-subtle">
                <channel.icon
                  size={18}
                  strokeWidth={1.75}
                  className="text-muted transition-colors duration-200 group-hover:text-accent"
                />
              </div>
              <div>
                <p className="text-[14px] font-medium text-foreground">
                  {channel.label}
                </p>
                <p className="mt-0.5 flex items-center justify-center gap-1 text-[13px] text-muted">
                  {channel.value}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
