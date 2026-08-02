"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Website Toko Kue",
    description:
      "A web-based cake shop application designed to simplify online ordering. The system allows customers to browse products, place orders, and enables administrators to manage products, customers, and orders efficiently.",
    image: "/projects/tokokue.png",
    stack: ["JavaScript", "PHP", "Bootstrap", "HTML", "CSS", "MySQL"],
    features: [
      ],
    href: "https://github.com/reezkaal/Website-Toko-Kue",
  },
  {
    title: "Decision Support System Using PROMETHEE",
    description:
      "A web-based Decision Support System developed to assist the selection process for the Student Competency Competition (LKS) using the PROMETHEE method to generate objective rankings based on predefined criteria.",
    image: "/projects/spkpromethee.png",
    stack: ["JavaScript", "Express.js", "Vue.js", "MongoDB"],
    features: [

      
    ],
    href: "https://github.com/reezkaal/Promethee-Frontend",
  }
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[600px]"
        >
          <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
            Projects
          </p>
          <h2 className="mt-3 text-[30px] font-semibold tracking-tightest text-foreground md:text-[36px]">
            Featured Projects
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-muted">
            A selection of projects developed through academic work and hands-on learning,
             showcasing my technical skills and problem solving abilities.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-[#FAFAFA]">
                <Image
                  src={project.image}
                  alt={`${project.title} application screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[18px] font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <ul className="mt-5 flex flex-col gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[13.5px] leading-[1.5] text-muted"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-accent"
                        strokeWidth={2.25}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-foreground"
                >
                  View Project
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
