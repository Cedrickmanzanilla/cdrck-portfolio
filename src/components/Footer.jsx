const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12 px-4">
      <div className="container mx-auto max-w-[95%] lg:max-w-6xl">
        <div className="text-center text-white/90">
          <p>&copy; {new Date().getFullYear()} Cedrick Manzanilla.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
