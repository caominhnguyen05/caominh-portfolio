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
      className="py-24 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-l font-medium tracking-[0.12em] uppercase mb-14">
          Contact
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white leading-[1.1] tracking-tight">
              Let&apos;s connect.
              <br />
            </h2>
            <p className="text-md text-gray-300 font-light leading-[1.8] max-w-xs">
              I&apos;m actively looking for graduate software engineering roles
              in 2026. If you have an opening or just want to connect — drop me
              a message on Linkedin or via email!
            </p>
            <a
              href="https://www.linkedin.com/in/caominh-nguyen/"
              className="text-[13px] font-medium px-5 py-2.5 bg-white text-black rounded-full hover:opacity-80 transition-opacity w-fit"
            >
              Say hello →
            </a>
          </div>

          {/* Right — link rows */}
          <div className="divide-y divide-white/[0.06]">
            {links.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center justify-between py-5 group"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-medium group-hover:text-white transition-colors duration-200">
                    {link.platform}
                  </span>
                  <span className="text-sm text-gray-400">{link.handle}</span>
                </div>
                <span className="text-gray-600 group-hover:text-gray-400 transition-colors duration-200 text-sm">
                  ↗
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
