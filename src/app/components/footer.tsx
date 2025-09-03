const Footer = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-800">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nguyen Cao Minh.
        <br />
        Built with Next.js, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;
