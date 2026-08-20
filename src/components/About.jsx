import { useState, useEffect, useRef } from 'react';

const About = () => {
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

  const tools = [
    'CapCut Pro',
    'DaVinci Resolve',
    'Canva & Photoshop',
    'ElevenLabs',
    'Minimax',
    'HeyGen',
    'ArcAds',
    'Envato',
    'Pexels',
    'Freepik',
    'Vecteezy',
    'Pixabay',
    'TikTok',
    'VMAKE',
    'VEO',
    'Frame.io',
    'Google Drive',
    'Dropbox',
    'WeTransfer',
    'Leonardo.ai',
  ];

  const sources = [
    'Pexels',
    'Pixabay',
    'Envato',
    'Freepik',
    'Vecteezy',
    'TikTok',
  ];

  const communicationTools = [
    'WhatsApp',
    'Discord',
    'LinkedIn',
    'Telegram',
    'Slack',
    'Asana',
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`bg-gray-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-6xl px-2 sm:px-4 lg:max-w-7xl">
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            About Me
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 md:p-12 lg:p-14 shadow-lg">
          {/* Main Introduction */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl leading-[1.8] text-slate-800">
              I'm <strong className="font-semibold text-navy">Cedrick Manzanilla</strong>, a DTC Performance Creative Editor with 4 years of experience creating UGC, VSLs, Meta ad creatives, and short-form content for brands and creators worldwide.
            </p>
            <p className="text-lg sm:text-xl leading-[1.8] text-slate-800">
              I specialize in direct-response editing focused on attention, retention, and conversion. From strong hooks and scroll-stopping visuals to clean pacing, storytelling, and strategic use of text, sound design, and motion, I build creatives with performance in mind, not just aesthetics.
            </p>
            <p className="text-lg sm:text-xl leading-[1.8] text-slate-800">
              I've worked with clients across different markets, producing UGC-style ads, VSLs, talking-head content, faceless videos, and other performance-driven creatives. I combine creative editing with an understanding of audience behavior and platform-native content to help brands turn ideas into content that gets watched and takes action.
            </p>
            <p className="text-lg sm:text-xl leading-[1.8] text-slate-800">
              The goal is simple: make better creatives that capture attention, communicate the message clearly, and help brands sell.
            </p>
          </div>

          {/* What I Do Best */}
          <div className="border-t border-slate-200 pt-10 sm:pt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy">
              What I Do Best
            </h3>

            <div className="mt-8 space-y-6">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-navy px-4 py-1.5 text-sm font-semibold text-white">
                    Primary
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Video Editing
                  </h4>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {[
                    'UGC-style video editing (organic & ad-ready)',
                    'VSL & direct-response ad editing',
                    'Faceless videos (voiceover-driven, stock-based, AI-assisted)',
                    'Short-form content for TikTok, Reels, Shorts, and Facebook',
                    'Paid ad creatives for Meta, TikTok, and YouTube',
                    'Script structuring & optimization',
                    'Captions, subtitles, sound design, pacing, and visual flow',
                    'Stock footage & B-roll sourcing',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-slate-800">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <h5 className="text-lg sm:text-xl font-bold text-slate-900">
                  AI Specialist
                </h5>
                <p className="mt-2 text-base sm:text-lg leading-relaxed text-slate-700">
                  Proficient with multiple AI tools for content creation, voiceovers, and automation
                </p>
              </div>
            </div>
          </div>

          {/* Tools I Use */}
          <div className="border-t border-slate-200 pt-10 sm:pt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy">
              Tools I Use
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-navy px-4 py-2 text-sm sm:text-base font-medium text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Sources I Use */}
          <div className="border-t border-slate-200 pt-10 sm:pt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy">
              Sources I Use
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
              Platforms I use to find stock footage, video clips, assets, and creative resources:
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
              {sources.map((source) => (
                <span
                  key={source}
                  className="rounded-full border border-navy/20 bg-navy/5 px-4 py-2 text-sm sm:text-base font-medium text-navy"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>

          {/* Communication Tools */}
          <div className="border-t border-slate-200 pt-10 sm:pt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy">
              Communication Tools
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
              Platforms I use for collaboration and communication:
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
              {communicationTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-navy/20 bg-navy/5 px-4 py-2 text-sm sm:text-base font-medium text-navy"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="border-t border-slate-200 pt-10 sm:pt-12">
            <p className="text-lg sm:text-xl leading-[1.8] text-slate-800">
              I have a strong understanding of what works in today's content landscape — from testing hooks to improving watch time and conversions. My goal isn't just editing videos, but helping brands scale content that drives real results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
