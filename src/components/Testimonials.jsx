// import { useState, useEffect, useRef } from 'react';
// import { useTheme } from '../contexts/ThemeContext';

// const Testimonials = () => {
//   const { isDark } = useTheme();
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

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

//   return (
//     <section
//       ref={sectionRef}
//       id="testimonials"
//       className={`py-16 sm:py-20 md:py-24 px-2 sm:px-4 transition-colors duration-300 ${
//         isDark ? 'bg-gray-900' : 'bg-white'
//       } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
//     >
//       <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto">
//         <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 transition-colors duration-300 ${
//           isDark ? 'text-white' : 'text-gray-900'
//         }`}>
//           Client Testimonials
//         </h2>

//         <div className={`rounded-lg shadow-lg p-6 sm:p-8 md:p-12 transition-colors duration-300 ${
//           isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
//         }`}>
//           <div className="text-center">
//             <p className={`text-lg sm:text-xl md:text-2xl mb-6 transition-colors duration-300 ${
//               isDark ? 'text-gray-300' : 'text-gray-700'
//             }`}>
//               See what my clients have to say about working with me
//             </p>
//             <a
//               href="https://drive.google.com/file/d/1yO1Imu9abKAdVSTe6_4VX13OF-EIcizB/view?usp=drive_link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-navy text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy-dark transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               View Client Testimonials
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

