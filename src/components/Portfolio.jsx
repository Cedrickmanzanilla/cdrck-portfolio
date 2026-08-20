import { useEffect, useRef, useState } from 'react';
import VideoEditingPortfolio from './VideoEditingPortfolio';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Projects
          </h2>
        </div>
        <VideoEditingPortfolio embedded />
      </div>
    </section>
  );
};
export default Portfolio;
