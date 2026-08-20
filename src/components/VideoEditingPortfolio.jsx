import { useRef, useState } from 'react';
import example1 from '../assets/Example Video/EXAMPLE1.mp4';
import example2 from '../assets/Example Video/EXAMPLE 2.mp4';
import example3 from '../assets/Example Video/EXAMPLE 3.mp4';
import example4 from '../assets/Example Video/EXAMPLE 4.mp4';
import example5 from '../assets/Example Video/EXAMPLE 5.mp4';

export const ALL_EXAMPLES_URL = 'https://drive.google.com/drive/folders/1WTgknvjsLoo65CI_K-Dh1PypW5ciPUwV?usp=drive_link';
export const TOP_CREATIVE_EXAMPLES_URL = 'https://drive.google.com/drive/folders/1tuPr10S_gzH5kjmj2LcjNoXBxHj0OqcK?usp=drive_link';

export const featuredExampleVideos = [
  {
    id: 'example-1',
    title: 'Example 1',
    type: 'VSL / Direct Response',
    src: example1,
    aspectClass: 'aspect-[9/16]',
  },
  {
    id: 'example-2',
    title: 'Example 2',
    type: 'Meta Ad Creative',
    src: example2,
    aspectClass: 'aspect-[9/16]',
  },
  {
    id: 'example-3',
    title: 'Example 3',
    type: 'VSL / Direct Response',
    src: example3,
    aspectClass: 'aspect-[9/16]',
  },
  {
    id: 'example-4',
    title: 'Example 4',
    type: 'VSL / Direct Response',
    src: example4,
    aspectClass: 'aspect-[9/16]',
  },
  {
    id: 'example-5',
    title: 'Example 5',
    type: 'UGC / Paid Social',
    src: example5,
    aspectClass: 'aspect-[9/16]',
  },
];

const sectionCopy = {
  title: 'Top 5 Examples',
  description:
    'Five featured performance creative examples with full manual playback controls.',
};

export const ManualPreviewCard = ({ video, className = '' }) => {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      <div className={`relative ${video.aspectClass} overflow-hidden bg-slate-950`}>
        <video
          className="vertical-video-player h-full w-full object-contain"
          controls
          playsInline
          preload="metadata"
          aria-label={`${video.title} preview`}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <span className="inline-flex rounded-full border border-navy/15 bg-navy/8 px-3 py-1 text-xs font-semibold tracking-wide text-navy">
          {video.type}
        </span>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900">{video.title}</h4>
        </div>
      </div>
    </article>
  );
};

export const InteractivePreviewCard = ({ video, className = '' }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const element = videoRef.current;
    if (!element) return;

    element.muted = false;
    element.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      <div className={`relative ${video.aspectClass} overflow-hidden bg-slate-950`}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls={isPlaying}
          playsInline
          preload="metadata"
          onPause={handlePause}
          onEnded={handlePause}
          aria-label={`${video.title} interactive preview`}
        >
          <source src={video.src} type="video/mp4" />
        </video>
        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-slate-950/35 transition-colors hover:bg-slate-950/45"
            aria-label={`Play ${video.title}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-xl">
              <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="space-y-3 p-4 sm:p-5">
        <span className="inline-flex rounded-full border border-navy/15 bg-navy/8 px-3 py-1 text-xs font-semibold tracking-wide text-navy">
          {video.type}
        </span>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900">{video.title}</h4>
          <p className="mt-1 text-sm text-slate-500">Press play for full audio and controls</p>
        </div>
      </div>
    </article>
  );
};

export const FeaturedExamplesGrid = ({
  title = sectionCopy.title,
  description = sectionCopy.description,
  showHeader = true,
  compact = false,
  cta,
}) => {
  return (
    <div className="space-y-8">
      {showHeader && (
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          </div>
          {cta ? <div className="flex shrink-0">{cta}</div> : null}
        </div>
      )}

      <div className={`grid gap-5 ${compact ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-5' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'}`}>
        {featuredExampleVideos.map((video) => (
          <ManualPreviewCard
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCollectionButton = ({ title, description, href, buttonLabel }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl sm:p-8 md:p-10">
      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h3>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-navy px-6 py-3.5 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-navy-dark sm:w-auto sm:px-8"
      >
        {buttonLabel}
      </a>
    </div>
  );
};

const VideoEditingPortfolio = ({ embedded = false }) => {
  if (embedded) {
    return (
      <div className="mx-auto grid w-full max-w-4xl gap-6 sm:max-w-5xl sm:gap-8">
        <ProjectCollectionButton
          title="Top Creative Examples"
          description="Browse my curated collection of standout performance creative work."
          href={TOP_CREATIVE_EXAMPLES_URL}
          buttonLabel="View Top Creative Examples"
        />
        <ProjectCollectionButton
          title="View All Examples"
          description="Open the full portfolio collection containing all of my video editing examples."
          href={ALL_EXAMPLES_URL}
          buttonLabel="View All Examples"
        />
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-20 sm:py-24 px-2 sm:px-4">
      <div className="mx-auto w-full max-w-[95%] lg:max-w-7xl">
        <div className="space-y-14 sm:space-y-16">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex items-center rounded-full bg-navy px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                Projects
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                Video Editing Portfolio
              </h2>
              <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-600">
                Explore the featured examples first, then jump into the larger creative and full portfolio collections.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-lg ring-1 ring-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/70">Focus Areas</p>
              <p className="mt-3 text-base sm:text-lg font-semibold leading-relaxed text-slate-900">
                UGC, VSL, Meta ad creatives, performance creative, and direct-response video editing.
              </p>
            </div>
          </div>

          <FeaturedExamplesGrid
            title="Top 5 Examples"
            description="The exact same five featured examples shown on the Home section, presented here as the primary project showcase."
          />

          <div className="mx-auto grid w-full max-w-4xl gap-6 sm:max-w-5xl sm:gap-8">
            <ProjectCollectionButton
              title="Top Creative Examples"
              description="Browse my curated collection of standout performance creative work."
              href={TOP_CREATIVE_EXAMPLES_URL}
              buttonLabel="View Top Creative Examples"
            />
            <ProjectCollectionButton
              title="View All Examples"
              description="Open the full portfolio collection containing all of my video editing examples."
              href={ALL_EXAMPLES_URL}
              buttonLabel="View All Examples"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoEditingPortfolio;
