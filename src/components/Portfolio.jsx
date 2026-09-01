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

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className={`bg-gray-50 py-16 sm:py-20 md:py-24 px-2 sm:px-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto">
        <div className={`mb-10 sm:mb-12 md:mb-16 text-center ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-75' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Projects
          </h2>
        </div>
        <div className={`${isVisible ? 'animate-slide-up anim-fill-both anim-delay-150' : 'opacity-0'}`}>
          <VideoEditingPortfolio embedded />
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
