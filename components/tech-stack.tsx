"use client";

import { motion } from "framer-motion";

const stack = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code"],
  },
];

export function TechStack() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[600px]"
        >
          <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
            Stack
          </p>
          <h2 className="mt-3 text-[30px] font-semibold tracking-tightest text-foreground md:text-[36px]">
            Tools I use to build.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-muted">
            These are the technologies I reach for most when designing, 
            building, and shipping applications.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-border bg-surface p-6 shadow-subtle"
            >
              <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-lg border border-border bg-[#FAFAFA] px-3 py-1.5 text-[13.5px] font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-subtle hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
