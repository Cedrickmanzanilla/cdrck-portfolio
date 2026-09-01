import { useState, useEffect, useRef } from 'react';
import heroImage from '../assets/Pngs/GradpicNoBackground.png';
import { FeaturedExamplesGrid } from './VideoEditingPortfolio';
import { featuredExampleVideos } from './videoEditingData';

/* index 0–3: Examples 1–4 | index 4: Example 5 (above head) */
const floatingVideoPositions = [
  'absolute -left-[9%] top-[16%] w-[5.25rem] -rotate-6 sm:-left-[10%] sm:top-[18%] sm:w-[5.75rem] md:-left-[9%] md:top-[20%] md:w-[6rem] lg:-left-4 lg:top-[22%] lg:w-45',
  'absolute -right-[8%] top-[23%] w-[5.25rem] rotate-6 sm:-right-[9%] sm:top-[24%] sm:w-[5.75rem] md:-right-[8%] md:top-[24%] md:w-[6rem] lg:-right-1 lg:top-[20%] lg:w-45',
  'absolute -left-[12%] bottom-[10%] w-[5.25rem] -rotate-10 sm:-left-[10%] sm:bottom-[10%] sm:w-[5.75rem] md:-left-[10%] md:bottom-[9%] md:w-[5.75rem] lg:-left-40 lg:bottom-[6%] lg:w-[10rem]',
  'absolute -right-[10%] bottom-[16%] w-[5.25rem] rotate-10 sm:-right-[11%] sm:bottom-[3%] sm:w-[5.75rem] md:-right-[9%] md:bottom-[12%] md:w-[5.75rem] lg:-right-5 lg:bottom-[9%] lg:w-[11rem]',
  'absolute left-1/2 top-[2%] w-[5rem] -translate-x-1/2 rotate-5 sm:top-[2%] sm:w-[5.5rem] md:top-[2%] md:w-[5.75rem] lg:left-135 lg:top-10 lg:w-40',
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktopHero, setIsDesktopHero] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : true
  );
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
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleMediaChange = (event) => {
      setIsDesktopHero(event.matches);
    };

    setIsDesktopHero(mediaQuery.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroBackgroundVideoSrc = isDesktopHero
    ? `${import.meta.env.BASE_URL}white-background-2025-12-09-07-05-41-utc.mp4`
    : `${import.meta.env.BASE_URL}videos/hero-mobile/white-bg-mobile.mp4`;

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`relative overflow-x-hidden bg-white px-2 sm:px-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-500"
        >
          <source src={heroBackgroundVideoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/55" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[96%] xl:max-w-[100rem]">
        {/* Hero landing — mobile: image fills width then text; desktop: side-by-side full viewport */}
        <div className="grid grid-cols-1 gap-4 pt-[4.75rem] sm:gap-5 sm:pt-20 lg:min-h-[calc(100dvh-6rem)] lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:gap-8 lg:pt-[5.5rem] xl:gap-10">
          {/* LEFT — profile image + floating videos (contained to this column) */}
          <div className="relative order-1 flex w-full justify-center lg:items-end lg:justify-end">
            <div className="relative w-[min(82vw,21rem)] pt-5 sm:w-[min(78vw,24rem)] sm:pt-6 md:w-[min(74vw,27rem)] lg:h-[calc(100dvh-7rem)] lg:w-full lg:max-w-none lg:pt-0 lg:pr-2 xl:pr-4">
              {/* BOTTOM LAYER — floating videos, framed tightly around the image */}
              <div className={`pointer-events-none absolute inset-0 z-[1] overflow-visible transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {featuredExampleVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`overflow-hidden rounded-xl border border-white bg-white/80 shadow-lg backdrop-blur-sm sm:rounded-2xl ${floatingVideoPositions[index]}`}
                    style={{
                      animation: `float ${8 + index * 1.5}s ease-in-out ${index * 0.8}s infinite`,
                    }}
                  >
                    <div className="relative aspect-[9/16] overflow-hidden bg-slate-950">
                      <video
                        key={`${video.id}-${isDesktopHero ? 'desktop' : 'mobile'}`}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={video.heroPoster}
                        preload={isDesktopHero || index < 2 ? 'auto' : 'metadata'}
                        aria-hidden="true"
                      >
                        <source src={isDesktopHero ? video.src : video.heroMobileSrc} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-x-[8%] bottom-0 z-[2] hidden h-8 rounded-full bg-navy/10 blur-3xl lg:block lg:h-10" />

              {/* MIDDLE LAYER — mobile: width-driven, no fixed height; desktop: fills column height */}
              <img
                src={heroImage}
                alt="Cedrick Manzanilla - DTC Performance Creative Editor"
                className={`relative z-[2] mx-auto block h-auto w-[84%] object-contain sm:w-[82%] md:w-[80%] lg:mx-0 lg:h-full lg:w-auto lg:max-w-full lg:object-bottom drop-shadow-[0_24px_48px_rgba(0,0,128,0.18)] ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-75' : 'opacity-0'}`}
              />
            </div>
          </div>

          {/* RIGHT — hero text & CTAs (top layer, separate from image column on mobile) */}
          <div className="relative z-[3] order-2 flex flex-col justify-center space-y-4 py-2 text-center sm:space-y-5 sm:py-3 lg:py-6 lg:pl-2 lg:text-left xl:pl-4">
            <div className={`flex flex-wrap justify-center gap-2 lg:justify-start ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-150' : 'opacity-0'}`}>
              {['UGC', 'VSL', 'Meta Ad Creatives', 'Performance Creative', 'Direct Response'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-navy/15 bg-white/85 px-3 py-1 text-xs sm:text-sm font-semibold text-navy shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <h1 className={`translate-x-[4%] text-3xl font-bold leading-tight text-slate-900 sm:translate-x-[4%] sm:text-4xl md:translate-x-[4%] md:text-5xl lg:translate-x-0 lg:text-[3.25rem] xl:text-6xl ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-225' : 'opacity-0'}`}>
              DTC Performance <span className="text-navy">Creative Editor</span>
            </h1>
            <h2 className={`translate-x-[4%] text-lg font-medium leading-relaxed text-slate-700 sm:translate-x-[4%] sm:text-xl md:translate-x-[4%] md:text-2xl lg:translate-x-0 lg:text-[1.65rem] xl:text-3xl ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-300' : 'opacity-0'}`}>
              UGC, VSL, Meta ad creatives, and direct-response video editing built to stop scrolls, hold attention, and drive sales.
            </h2>
            <p className={`mx-auto max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg md:text-xl lg:mx-0 ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-375' : 'opacity-0'}`}>
              I create performance-driven creatives for DTC brands that capture attention, hold retention, and are built to sell.
            </p>
            <div className={`flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-450' : 'opacity-0'}`}>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="cursor-pointer rounded-lg bg-navy px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-navy-dark hover:shadow-2xl active:scale-95 sm:px-8 sm:py-4 sm:text-lg md:px-10"
              >
                View Projects
              </button>
              <a
                href="https://drive.google.com/file/d/1YRE11CZF_1sHHqx4pVeYK-5lITghXf9n/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-lg border-2 border-navy bg-white px-6 py-3 text-center text-base font-semibold text-navy shadow-lg transition-all duration-300 hover:scale-110 hover:border-navy-dark hover:bg-slate-50 hover:shadow-2xl active:scale-95 sm:px-8 sm:py-4 sm:text-lg md:px-10"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        <div className={`relative z-[3] mt-8 rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-xl backdrop-blur-sm sm:mt-10 sm:p-6 md:mt-12 md:p-8 ${isVisible ? 'animate-slide-up anim-fill-both anim-delay-525' : 'opacity-0'}`}>
          <FeaturedExamplesGrid
            title="Top 5 Featured Examples"
            description="Five featured performance creative examples — press play to watch with full audio and controls."
            compact
            cta={
              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-navy-dark"
              >
                Explore Projects
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
