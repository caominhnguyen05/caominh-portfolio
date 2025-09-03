"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
};

const SectionWrapper = ({ children, id }: SectionWrapperProps) => (
  <motion.section
    id={id}
    className="py-20 px-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto max-w-4xl text-center">{children}</div>
  </motion.section>
);

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        I'm currently looking for new opportunities in the software engineering
        field after my graduation. Whether you have a question or just want to
        say hi, I'll try my best to get back to you!
      </p>
      <a
        href="mailto:minhnc2005@gmail.com"
        className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Say Hello
      </a>
      <div className="flex justify-center space-x-8 mt-12">
        <a
          href="https://github.com/caominhnguyen05"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FiGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/caominh-nguyen/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FiLinkedin size={28} />
        </a>
        <a
          href="mailto:minhnc2005@gmail.com"
          className="text-gray-400 hover:text-white"
        >
          <FiMail size={28} />
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
