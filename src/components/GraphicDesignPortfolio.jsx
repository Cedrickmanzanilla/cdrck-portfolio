// import { useState, useEffect, useRef } from 'react';
// import { useTheme } from '../contexts/ThemeContext';

// const GraphicDesignPortfolio = ({ onBack }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const { isDark } = useTheme();

//   // Listen for portfolio navigation from header
//   useEffect(() => {
//     const handlePortfolioNav = () => {
//       onBack();
//       setTimeout(() => {
//         const element = document.getElementById('portfolio');
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     };

//     window.addEventListener('scrollToPortfolio', handlePortfolioNav);
//     return () => window.removeEventListener('scrollToPortfolio', handlePortfolioNav);
//   }, [onBack]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Helper function to get embed URL from view URL
//   const getEmbedUrl = (url) => {
//     const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
//     if (fileIdMatch) {
//       return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
//     }
//     return null;
//   };

//   // Graphic Design thumbnails from Google Drive
//   const thumbnails = [
//     {
//       name: 'Thumbnail 1',
//       url: 'https://drive.google.com/file/d/1Hr4cSec1G-Rlx5_R9ETTeCEw8nZPQhv0/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 2',
//       url: 'https://drive.google.com/file/d/1gbcySOW8dAhCz8NsWRW_zdBPG9GFcf4E/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 3',
//       url: 'https://drive.google.com/file/d/1Lr_8Kj18qYJP1f1f-wdFnEowdmSPdCgJ/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 4',
//       url: 'https://drive.google.com/file/d/1b8GqIO9qcjfWQkWjhHHFKxUaOlqgJmcm/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 5',
//       url: 'https://drive.google.com/file/d/1PNCOxqOTr0dMbYfX8sn5V7rgNkJnyS2j/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 6',
//       url: 'https://drive.google.com/file/d/15-M1PDblP8HBosqdINE9nXlb8nxO90CR/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 7',
//       url: 'https://drive.google.com/file/d/1NHdlIh3b1StD7yiUkhXHgdHEVE5acc4O/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 8',
//       url: 'https://drive.google.com/file/d/1LFxAfXbOytoj2CrIsKCBc8yNtYWB2bt0/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 9',
//       url: 'https://drive.google.com/file/d/1PvxEvNsuUy8rlxU0DbKJdVmnoVVJ43tl/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 10',
//       url: 'https://drive.google.com/file/d/1JKIXIcJgeaCkQlQXWxEZg4xDy95FfdT6/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 11',
//       url: 'https://drive.google.com/file/d/1Sm_nHqYEKYXKWNw_CmR7560A-UBn2aNR/view?usp=sharing'
//     },
//     {
//       name: 'Thumbnail 12',
//       url: 'https://drive.google.com/file/d/1x8Fv7kqT-4FPu6gqSX3-FGY9zwD5sKe3/view?usp=sharing'
//     }
//   ].map(thumb => ({
//     ...thumb,
//     embedUrl: getEmbedUrl(thumb.url)
//   }));

//   return (
//     <section
//       ref={sectionRef}
//       className={`min-h-screen py-24 px-2 sm:px-4 transition-colors duration-300 ${
//         isDark ? 'bg-gray-900' : 'bg-gray-50'
//       } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
//     >
//       <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-12">
//           <button
//             onClick={onBack}
//             className={`mb-6 font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer hover:scale-110 hover:gap-3 ${
//               isDark ? 'text-navy-light hover:text-blue-400' : 'text-navy hover:text-navy-dark'
//             }`}
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to Portfolio
//           </button>
//           <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
//             isDark ? 'text-white' : 'text-gray-900'
//           }`}>
//             Graphic Design Portfolio
//           </h2>
//           <p className={`text-xl mb-6 transition-colors duration-300 ${
//             isDark ? 'text-gray-400' : 'text-gray-600'
//           }`}>
//             Creative visual designs and thumbnails
//           </p>
//         </div>

//         {/* Grid Layout - 6 thumbnails per row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
//           {thumbnails.map((thumbnail, index) => (
//             <div
//               key={index}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 animate-fade-in border ${
//                 isDark 
//                   ? 'bg-gray-800 border-gray-700' 
//                   : 'bg-white border-gray-200'
//               }`}
//               style={{ 
//                 animationDelay: `${index * 0.05}s`
//               }}
//             >
//               {/* Embedded Thumbnail */}
//               <div className="relative aspect-video bg-gray-900 overflow-hidden">
//                 {thumbnail.embedUrl ? (
//                   <iframe
//                     src={thumbnail.embedUrl}
//                     className="w-full h-full"
//                     allow="autoplay; encrypted-media"
//                     allowFullScreen
//                     title={thumbnail.name}
//                   />
//                 ) : (
//                   <div className={`w-full h-full flex items-center justify-center ${
//                     isDark ? 'bg-gray-800' : 'bg-gray-100'
//                   }`}>
//                     <svg className={`w-16 h-16 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//               <div className="p-4 md:p-6">
//                 <h3 className={`text-base md:text-lg font-bold line-clamp-2 transition-colors duration-300 ${
//                   isDark ? 'text-white' : 'text-gray-900'
//                 }`}>
//                   {thumbnail.name}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GraphicDesignPortfolio;

