import { useState, useEffect, useRef } from 'react';
import { FaDiscord, FaLinkedin, FaBriefcase, FaArrowUp } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const platformLinks = [
  {
    icon: FaBriefcase,
    label: 'Hire me on OnlineJobs.ph',
    href: 'https://www.onlinejobs.ph/jobseekers/info/2966139',
  },
  {
    icon: SiUpwork,
    label: 'Hire me on Upwork',
    href: 'https://www.upwork.com/freelancers/~0166016cc1c03ea381?mp_source=share',
  },
  {
    icon: FaLinkedin,
    label: 'Connect with me on LinkedIn',
    href: 'https://www.linkedin.com/in/manzanilla-cedrick-m-8140332a2/',
  },
  {
    icon: FaDiscord,
    label: 'Message me on Discord',
    href: 'https://discord.com/users/rzk27',
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`bg-gray-50 py-16 md:py-24 px-4 sm:px-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-3xl">
        <div className={`mb-10 text-center sm:mb-12 ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-75' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Let's Work Together
          </h2>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-600">
            Open for freelance and remote work — reach out on any of these platforms.
          </p>
        </div>

        <div className="space-y-4">
          {platformLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-lg ${isVisible ? 'animate-slide-up anim-fill-both' : 'opacity-0'}`}
                style={isVisible ? { animationDelay: `${150 + index * 75}ms` } : undefined}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-navy-dark">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="min-w-0 text-base font-semibold leading-relaxed text-slate-900 group-hover:text-navy sm:text-lg">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 z-50 rounded-full bg-navy p-3 text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-navy-dark sm:bottom-8 sm:right-8 sm:p-4"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </section>
  );
};

export default Contact;
