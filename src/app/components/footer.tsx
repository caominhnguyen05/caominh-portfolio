const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-10 border-t border-white/[0.08]">
      <p className="max-w-6xl mx-auto text-gray-500 text-base leading-relaxed">
        &copy; {new Date().getFullYear()} Nguyen Cao Minh.
        <span className="hidden sm:inline">
          {" "}
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </span>
      </p>
    </footer>
  );
};

export default Footer;
