import { useEffect, useRef, useState } from 'react';
import VideoEditingPortfolio from './VideoEditingPortfolio';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
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
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const revealEls = currentSection.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className={`bg-gray-50 py-16 sm:py-20 md:py-24 px-2 sm:px-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Projects
          </h2>
        </div>
        <VideoEditingPortfolio embedded revealObserver />
      </div>
    </section>
  );
};
export default Portfolio;
