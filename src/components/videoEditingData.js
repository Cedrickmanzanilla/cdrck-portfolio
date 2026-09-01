import example1 from '../assets/Example Video/EXAMPLE1.mp4';
import example2 from '../assets/Example Video/EXAMPLE 2.mp4';
import example3 from '../assets/Example Video/EXAMPLE 3.mp4';
import example4 from '../assets/Example Video/EXAMPLE 4.mp4';
import example5 from '../assets/Example Video/EXAMPLE 5.mp4';

const buildPublicAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const ALL_EXAMPLES_URL = 'https://drive.google.com/drive/folders/1WTgknvjsLoo65CI_K-Dh1PypW5ciPUwV?usp=drive_link';
export const TOP_CREATIVE_EXAMPLES_URL = 'https://drive.google.com/drive/folders/1tuPr10S_gzH5kjmj2LcjNoXBxHj0OqcK?usp=drive_link';

export const featuredExampleVideos = [
  {
    id: 'example-1',
    title: 'Example 1',
    type: 'VSL / Direct Response',
    src: example1,
    heroMobileSrc: buildPublicAssetPath('videos/hero-mobile/example1-mobile.mp4'),
    heroPoster: buildPublicAssetPath('images/hero-posters/example1.jpg'),
    aspectClass: 'aspect-[9/16]',
  },
  {
    id: 'example-2',
    title: 'Example 2',
    type: 'Meta Ad Creative',
    src: example2,
    heroMobileSrc: buildPublicAssetPath('videos/hero-mobile/example2-mobile.mp4'),
    heroPoster: buildPublicAssetPath('images/hero-posters/example2.jpg'),
    aspectClass: 'aspect-[9/16]',
  },
  {
    id: 'example-3',
    title: 'Example 3',
    type: 'VSL / Direct Response',
    src: example3,
    heroMobileSrc: buildPublicAssetPath('videos/hero-mobile/example3-mobile.mp4'),
    heroPoster: buildPublicAssetPath('images/hero-posters/example3.jpg'),
    aspectClass: 'aspect-[9/16]',
  },
  {
    id: 'example-4',
    title: 'Example 4',
    type: 'VSL / Direct Response',
    src: example4,
    heroMobileSrc: buildPublicAssetPath('videos/hero-mobile/example4-mobile.mp4'),
    heroPoster: buildPublicAssetPath('images/hero-posters/example4.jpg'),
    aspectClass: 'aspect-[9/16]',
  },
  {
    id: 'example-5',
    title: 'Example 5',
    type: 'UGC / Paid Social',
    src: example5,
    heroMobileSrc: buildPublicAssetPath('videos/hero-mobile/example5-mobile.mp4'),
    heroPoster: buildPublicAssetPath('images/hero-posters/example5.jpg'),
    aspectClass: 'aspect-[9/16]',
  },
];
