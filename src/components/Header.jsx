import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio');

  const navItems = [
    { id: 'portfolio', label: 'Projects' },
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 150;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  const getNavButtonClass = (sectionId) => {
    if (sectionId === 'portfolio') {
      return 'relative cursor-pointer whitespace-nowrap rounded-full bg-white px-3 py-1.5 font-semibold text-navy transition-all duration-300 hover:scale-105 hover:text-navy-dark';
    }

    const isActive = activeSection === sectionId;
    const baseClass = 'transition-all duration-300 font-medium relative cursor-pointer whitespace-nowrap';

    if (isActive) {
      return `${baseClass} text-white font-bold hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-white`;
    }

    return `${baseClass} text-white/80 hover:text-white hover:scale-105 hover:font-semibold`;
  };

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6 lg:pt-5">
      <nav
        className={`pointer-events-auto mx-auto w-full max-w-[28rem] rounded-[1.75rem] border border-white/15 bg-navy/95 px-4 py-3 backdrop-blur-md transition-all duration-300 sm:max-w-[34rem] sm:px-5 sm:py-3.5 md:max-w-[42rem] lg:w-[68vw] lg:max-w-[66rem] xl:w-[70vw] ${
          isScrolled ? 'shadow-[0_18px_45px_rgba(0,0,128,0.28)]' : 'shadow-[0_14px_32px_rgba(0,0,128,0.22)]'
        }`}
      >
        <div className="relative flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="cursor-pointer text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:text-white/90 sm:text-lg md:text-xl"
          >
            cdrck.exe
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 md:flex lg:gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={getNavButtonClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="shrink-0 cursor-pointer rounded-lg bg-white/20 p-2 text-white transition-all duration-300 hover:scale-105 hover:bg-white/30 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-3 space-y-2 border-t border-white/15 pt-3 animate-fade-in md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full cursor-pointer rounded-xl px-2 py-2 text-left text-sm font-medium capitalize transition-all duration-300 ${
                  item.id === 'portfolio'
                    ? 'bg-white font-semibold text-navy'
                    : activeSection === item.id
                    ? 'bg-white/10 font-bold text-white'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
