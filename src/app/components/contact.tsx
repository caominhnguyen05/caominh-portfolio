"use client";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  const links = [
    {
      platform: "Email",
      handle: "minhnc2005@gmail.com",
      href: "mailto:minhnc2005@gmail.com",
    },
    {
      platform: "LinkedIn",
      handle: "caominh-nguyen",
      href: "https://www.linkedin.com/in/caominh-nguyen/",
    },
    {
      platform: "GitHub",
      handle: "caominhnguyen05",
      href: "https://github.com/caominhnguyen05",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-28 md:py-36 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.32fr_0.68fr] gap-8 lg:gap-16 items-end mb-12 md:mb-16 border-b border-white/[0.08] pb-10">
          <p className="text-sm md:text-base font-semibold tracking-[0.16em] uppercase">
            Contact
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-normal text-white leading-[0.98] tracking-tight">
            Let&apos;s connect.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-[1.65] max-w-xl">
              I&apos;m actively looking for graduate software engineering roles
              in 2026. If you have an opening or just want to connect, drop me a
              message on LinkedIn or via email.
            </p>
            <a
              href="https://www.linkedin.com/in/caominh-nguyen/"
              className="text-base font-semibold px-7 py-3.5 bg-white text-black rounded-full hover:bg-gray-200 transition-colors w-fit"
            >
              Say hello
            </a>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {links.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center justify-between gap-6 py-7 group"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg md:text-xl font-semibold group-hover:text-white transition-colors duration-200">
                    {link.platform}
                  </span>
                  <span className="text-base md:text-lg text-gray-400 break-all">
                    {link.handle}
                  </span>
                </div>
                <span className="text-gray-500 group-hover:text-white transition-colors duration-200 text-xl">
                  {"->"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
