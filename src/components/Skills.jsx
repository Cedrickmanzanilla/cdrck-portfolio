// import { useState, useEffect, useRef } from 'react';

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedHeights, setAnimatedHeights] = useState({
//     videoEditing: 0,
//     webDev: 0,
//     aiSpecialist: 0,
//     scriptwriting: 0,
//     graphicDesign: 0
//   });
//   const sectionRef = useRef(null);

//   const prioritySkills = [
//     {
//       title: 'Video Editing',
//       priority: 'primary',
//       description: 'UGC, VSL, Ads, Faceless Videos & more',
//       icon: '🎬',
//       proficiency: 95
//     },
//     {
//       title: 'Web & Mobile Development',
//       priority: 'secondary',
//       description: 'React, Node.js, Express, MySQL & more',
//       icon: '💻',
//       proficiency: 75
//     }
//   ];

//   const programmingLanguages = [
//     { name: 'C#' },
//     { name: 'Python' },
//     { name: 'Dart' },
//     { name: 'Java' },
//     { name: 'PHP' },
//     { name: 'SQL' }
//   ];

//   useEffect(() => {
//     // Set all heights immediately without animation
//     setAnimatedHeights({
//       videoEditing: 95,
//       webDev: 75,
//       aiSpecialist: 60,
//       scriptwriting: 60,
//       graphicDesign: 60
//     });
//     setIsVisible(true);
//   }, []);

//   return (
//     <section
//       id="skills"
//       ref={sectionRef}
//       className="py-16 sm:py-20 md:py-24 px-2 sm:px-4 bg-navy-dark"
//     >
//       <div className="w-full max-w-full lg:max-w-[98%] mx-auto">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-12 md:mb-16">
//           Skills
//         </h2>

//         {/* Skills Proficiency Graph */}
//         <div className="mb-12 sm:mb-16">
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
//             Skills Proficiency
//           </h3>
//           <div className="bg-navy/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 border-2 border-navy-light/30 overflow-x-auto">
//             <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] w-full relative pt-12 sm:pt-16 md:pt-20">
//               {/* Video Editing - Highest */}
//               <div className="flex flex-col items-center gap-3 sm:gap-4 flex-1 max-w-[70px] sm:max-w-[90px] md:max-w-[120px] lg:max-w-[150px]">
//                 <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px]">
//                   <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap z-30 bg-navy-dark/80 px-2 py-1 rounded shadow-lg">
//                     95%
//                   </div>
//                   <div 
//                     className="w-full bg-navy-light rounded-t-lg hover:opacity-90 hover:brightness-110 shadow-lg border-2 border-navy-light/50"
//                     style={{ 
//                       height: `${animatedHeights.videoEditing}%`, 
//                       minHeight: '200px'
//                     }}
//                   ></div>
//                 </div>
//                 <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight mt-3 sm:mt-4 whitespace-nowrap drop-shadow-lg">Video Editing</span>
//               </div>

//               {/* Web & Mobile Development - Second */}
//               <div className="flex flex-col items-center gap-3 sm:gap-4 flex-1 max-w-[70px] sm:max-w-[90px] md:max-w-[120px] lg:max-w-[150px]">
//                 <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px]">
//                   <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap z-30 bg-navy-dark/80 px-2 py-1 rounded shadow-lg">
//                     75%
//                   </div>
//                   <div 
//                     className="w-full bg-navy-light rounded-t-lg hover:opacity-90 hover:brightness-110 shadow-lg border-2 border-navy-light/50"
//                     style={{ 
//                       height: `${animatedHeights.webDev}%`, 
//                       minHeight: '150px'
//                     }}
//                   ></div>
//                 </div>
//                 <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight mt-3 sm:mt-4 drop-shadow-lg">Web & Mobile Dev</span>
//               </div>

//               {/* AI Specialist - Equal */}
//               <div className="flex flex-col items-center gap-3 sm:gap-4 flex-1 max-w-[70px] sm:max-w-[90px] md:max-w-[120px] lg:max-w-[150px]">
//                 <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px]">
//                   <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap z-30 bg-navy-dark/80 px-2 py-1 rounded shadow-lg">
//                     60%
//                   </div>
//                   <div 
//                     className="w-full bg-navy-light rounded-t-lg hover:opacity-90 hover:brightness-110 shadow-lg border-2 border-navy-light/50"
//                     style={{ 
//                       height: `${animatedHeights.aiSpecialist}%`, 
//                       minHeight: '120px'
//                     }}
//                   ></div>
//                 </div>
//                 <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight mt-3 sm:mt-4 drop-shadow-lg">AI Specialist</span>
//               </div>

//               {/* Scriptwriting - Equal */}
//               <div className="flex flex-col items-center gap-3 sm:gap-4 flex-1 max-w-[70px] sm:max-w-[90px] md:max-w-[120px] lg:max-w-[150px]">
//                 <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px]">
//                   <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap z-30 bg-navy-dark/80 px-2 py-1 rounded shadow-lg">
//                     60%
//                   </div>
//                   <div 
//                     className="w-full bg-navy-light rounded-t-lg hover:opacity-90 hover:brightness-110 shadow-lg border-2 border-navy-light/50"
//                     style={{ 
//                       height: `${animatedHeights.scriptwriting}%`, 
//                       minHeight: '120px'
//                     }}
//                   ></div>
//                 </div>
//                 <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight mt-3 sm:mt-4 drop-shadow-lg">Scriptwriting</span>
//               </div>

//               {/* Graphic Design - Equal */}
//               <div className="flex flex-col items-center gap-3 sm:gap-4 flex-1 max-w-[70px] sm:max-w-[90px] md:max-w-[120px] lg:max-w-[150px]">
//                 <div className="relative w-full flex flex-col items-center justify-end h-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px]">
//                   <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap z-30 bg-navy-dark/80 px-2 py-1 rounded shadow-lg">
//                     60%
//                   </div>
//                   <div 
//                     className="w-full bg-navy-light rounded-t-lg hover:opacity-90 hover:brightness-110 shadow-lg border-2 border-navy-light/50"
//                     style={{ 
//                       height: `${animatedHeights.graphicDesign}%`, 
//                       minHeight: '120px'
//                     }}
//                   ></div>
//                 </div>
//                 <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight mt-3 sm:mt-4 drop-shadow-lg">Graphic Design</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Priority Skills */}
//         <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12">
//           {prioritySkills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-navy/30 backdrop-blur-sm rounded-lg p-8 lg:p-10 text-center hover:bg-navy/40 hover:scale-110 hover:shadow-2xl transform transition-all duration-300 animate-fade-in border-2 border-navy-light/30 cursor-pointer"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
//                 skill.priority === 'primary' 
//                   ? 'bg-navy-light text-navy-dark' 
//                   : 'bg-navy-light/20 text-white'
//               }`}>
//                 {skill.priority === 'primary' ? 'Primary Focus' : 'Secondary Focus'}
//               </div>
//               <div className="text-5xl mb-4">{skill.icon}</div>
//               <h3 className={`font-bold text-white mb-3 ${
//                 skill.priority === 'primary' 
//                   ? 'text-3xl lg:text-4xl' 
//                   : 'text-2xl lg:text-3xl'
//               }`}>
//                 {skill.title}
//               </h3>
//               <p className="text-white/80 text-lg">
//                 {skill.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Programming Languages */}
//         <div>
//           <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Programming Languages</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
//             {programmingLanguages.map((lang, index) => (
//               <div
//                 key={index}
//                 className="bg-navy/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-navy/40 hover:scale-110 hover:shadow-xl transform transition-all duration-300 border-2 border-navy-light/30 cursor-pointer"
//               >
//                 <h4 className="text-xl sm:text-2xl font-bold text-white">{lang.name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
