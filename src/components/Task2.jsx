// // import React, { useState } from "react";
// // import "./Task2.css";
// // import person1 from "../assets/hoverimage_1.png"; // Replace with actual image
// // import person2 from "../assets/hoverimage_2.png"; // Replace with actual image

// // import wow from "../assets/wow-bubble.png"; // Replace with actual wow bubble image

// // const Task2 = () => {
// //   const [hoveredBox, setHoveredBox] = useState(null);

// //   const HoverContent = ({ title, subtitle }) => (
// //     <div className="hover-visual">
// //       <img src={person1} alt="Person1" className="hover-img" />
// //       <div className="hover-text">
// //         <h2>{title}</h2>
// //       </div>
// //       <img src={wow} alt="Wow" className="wow-bubble top-left" />
// //       <img src={wow} alt="Wow" className="wow-bubble bottom-right" />
// //     </div>
// //   );

// //   return (
// //     <>
// //       <div className="task2-container">
// //         <p className="text-font">Your SkillShikshya Journey</p>
// //         <h1 className="text-font2">
// //           <span>Step</span> In. <span>Skill</span> Up. <span>Stand</span> Out.
// //           🚀
// //         </h1>
// //       </div>

// //       <div className="task2-container2">
// //         <div
// //           className={`task2-box1 hover-wrapper ${
// //             hoveredBox === "box1" ? "show-hover" : ""
// //           }`}
// //           onMouseEnter={() => setHoveredBox("box1")}
// //           onMouseLeave={() => setHoveredBox(null)}
// //         >
// //           {hoveredBox === "box1" ? (
// //             <HoverContent title="Clarity unlocked—stickers, sips, and skills all in one go!" />
// //           ) : (
// //             <>
// //               <h1>Start with Clarity</h1>
// //               <h3>Step into a better learning path.</h3>
// //               <p>
// //                 Overwhelmed by too many learning options? SkillShikshya provides
// //                 a clear, curated roadmap from the start. Whether you're a
// //                 beginner or upskilling, we have a path tailored to your growth.
// //               </p>
// //             </>
// //           )}
// //         </div>

// //         <div
// //           className={`task2-box2 hover-wrapper ${
// //             hoveredBox === "box2" ? "show-hover" : ""
// //           }`}
// //           onMouseEnter={() => setHoveredBox("box2")}
// //           onMouseLeave={() => setHoveredBox(null)}
// //         >
// //           {hoveredBox === "box2" ? (
// //             <HoverContent title="Focused faces—learning mode: ON!" />
// //           ) : (
// //             <>
// //               <h1>Learn by Doing</h1>
// //               <h3>Practical skills, real projects.</h3>
// //               <p>
// //                 Theory is great, but action is better. At SkillShikshya, you
// //                 learn by doing. Hands-on projects and real-world scenarios help
// //                 you build, break, and create—leading to true mastery.
// //               </p>
// //             </>
// //           )}
// //         </div>

// //         <div className="task2-box3">
// //           <h1>Get Mentored & Supported</h1>
// //           <h3>You're not learning alone.</h3>
// //           <p>
// //             Stuck or need feedback? SkillShikshya's community of mentors and
// //             learners has your back with live support, interactive discussions,
// //             and expert insights. You're never on your own.
// //           </p>
// //         </div>

// //         <div className="task2-box4">
// //           <h1>Achieve & Showcase</h1>
// //           <h3>Build your portfolio, get job-ready.</h3>
// //           <p>
// //             Your journey ends with achievement. Each completed project builds a
// //             portfolio showcasing your skills and job readiness, bringing you
// //             closer to that dream job, promotion, or your own venture.
// //           </p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Task2;

// import React, { useState } from "react";
// import "./Task2.css";
// import person1 from "../assets/hoverimage_1.png"; // Image for Box 1
// import person2 from "../assets/hoverimage_2.png"; // Image for Box 2
// import wow from "../assets/wow-bubble.png"; // Wow bubble image

// const Task2 = () => {
//   const [hoveredBox, setHoveredBox] = useState(null);

//   const HoverContent = ({ title, image }) => (
//     <div className="hover-visual">
//       <img src={image} alt="Person" className="hover-img" />
//       <div className="hover-text">
//         <h2>{title}</h2>
//       </div>
//       <img src={wow} alt="Wow" className="wow-bubble top-left" />
//       <img src={wow} alt="Wow" className="wow-bubble bottom-right" />
//     </div>
//   );

//   return (
//     <>
//       <div className="task2-container">
//         <p className="text-font">Your SkillShikshya Journey</p>
//         <h1 className="text-font2">
//           <span>Step</span> In. <span>Skill</span> Up. <span>Stand</span> Out.
//           🚀
//         </h1>
//       </div>

//       <div className="task2-container2">
//         <div
//           className={`task2-box1 hover-wrapper ${
//             hoveredBox === "box1" ? "show-hover" : ""
//           }`}
//           onMouseEnter={() => setHoveredBox("box1")}
//           onMouseLeave={() => setHoveredBox(null)}
//         >
//           {hoveredBox === "box1" ? (
//             <HoverContent
//               title="Clarity unlocked—stickers, sips, and skills all in one go!"
//               image={person1}
//             />
//           ) : (
//             <>
//               <h1>Start with Clarity</h1>
//               <h3>Step into a better learning path.</h3>
//               <p>
//                 Overwhelmed by too many learning options? SkillShikshya provides
//                 a clear, curated roadmap from the start. Whether you're a
//                 beginner or upskilling, we have a path tailored to your growth.
//               </p>
//             </>
//           )}
//         </div>

//         <div
//           className={`task2-box2 hover-wrapper ${
//             hoveredBox === "box2" ? "show-hover" : ""
//           }`}
//           onMouseEnter={() => setHoveredBox("box2")}
//           onMouseLeave={() => setHoveredBox(null)}
//         >
//           {hoveredBox === "box2" ? (
//             <HoverContent
//               title="Focused faces—learning mode: ON!"
//               image={person2}
//             />
//           ) : (
//             <>
//               <h1>Learn by Doing</h1>
//               <h3>Practical skills, real projects.</h3>
//               <p>
//                 Theory is great, but action is better. At SkillShikshya, you
//                 learn by doing. Hands-on projects and real-world scenarios help
//                 you build, break, and create—leading to true mastery.
//               </p>
//             </>
//           )}
//         </div>

//         <div className="task2-box3">
//           <h1>Get Mentored & Supported</h1>
//           <h3>You're not learning alone.</h3>
//           <p>
//             Stuck or need feedback? SkillShikshya's community of mentors and
//             learners has your back with live support, interactive discussions,
//             and expert insights. You're never on your own.
//           </p>
//         </div>

//         <div className="task2-box4">
//           <h1>Achieve & Showcase</h1>
//           <h3>Build your portfolio, get job-ready.</h3>
//           <p>
//             Your journey ends with achievement. Each completed project builds a
//             portfolio showcasing your skills and job readiness, bringing you
//             closer to that dream job, promotion, or your own venture.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Task2;

// import React, { useState } from "react";
// import "./Task2.css";
// import person1 from "../assets/hoverimage_1.png";
// import person2 from "../assets/hoverimage_24.png";
// import wow from "../assets/wow-bubble.png";
// import static1 from "../assets/topleft_1.png";
// import static2 from "../assets/topright_2.png";
// import static3 from "../assets/bottom_left3.png";
// import static4 from "../assets/bottom_right4.png";

// const Task2 = () => {
//   const [hoveredBox, setHoveredBox] = useState(null);

//   const HoverContent = ({ title, image, showWow }) => (
//     <div className="hover-visual">
//       <img src={image} alt="Person" className="hover-img" />
//       <div className="hover-text">
//         <h2>{title}</h2>
//       </div>
//       {showWow && (
//         <>
//           <img src={wow} alt="Wow" className="wow-bubble top-left" />
//           <img src={wow} alt="Wow" className="wow-bubble bottom-right" />
//         </>
//       )}
//     </div>
//   );

//   return (
//     <>
//       <div className="task2-container">
//         <p className="text-font">Your SkillShikshya Journey</p>
//         <h1 className="text-font2">
//           <span>Step</span> In. <span>Skill</span> Up. <span>Stand</span> Out.
//           🚀
//         </h1>
//       </div>

//       <div className="task2-container2">
//         <div
//           className={`task2-box1 hover-wrapper ${
//             hoveredBox === "box1" ? "show-hover" : ""
//           }`}
//           onMouseEnter={() => setHoveredBox("box1")}
//           onMouseLeave={() => setHoveredBox(null)}
//         >
//           {hoveredBox === "box1" ? (
//             <HoverContent
//               title="Clarity unlocked—stickers, sips, and skills all in one go!"
//               image={person1}
//               showWow={true}
//             />
//           ) : (
//             <>
//               <img
//                 src={static1}
//                 alt="Start with clarity"
//                 className="static-img"
//               />
//               <h1>Start with Clarity</h1>
//               <h3>Step into a better learning path.</h3>
//               <p>
//                 Overwhelmed by too many learning options? SkillShikshya provides
//                 a clear, curated roadmap from the start. Whether you're a
//                 beginner or upskilling, we have a path tailored to your growth.
//               </p>
//             </>
//           )}
//         </div>

//         <div
//           className={`task2-box2 hover-wrapper ${
//             hoveredBox === "box2" ? "show-hover" : ""
//           }`}
//           onMouseEnter={() => setHoveredBox("box2")}
//           onMouseLeave={() => setHoveredBox(null)}
//         >
//           {hoveredBox === "box2" ? (
//             <HoverContent
//               title="Focused faces—learning mode: ON!"
//               image={person2}
//               showWow={false}
//             />
//           ) : (
//             <>
//               <img src={static2} alt="Learn by doing" className="static-img" />
//               <h1>Learn by Doing</h1>
//               <h3>Practical skills, real projects.</h3>
//               <p>
//                 Theory is great, but action is better. At SkillShikshya, you
//                 learn by doing. Hands-on projects and real-world scenarios help
//                 you build, break, and create—leading to true mastery.
//               </p>
//             </>
//           )}
//         </div>

//         <div className="task2-box3">
//           <img src={static3} alt="get mentored" className="static-img" />
//           <h1>Get Mentored & Supported</h1>
//           <h3>You're not learning alone.</h3>
//           <p>
//             Stuck or need feedback? SkillShikshya's community of mentors and
//             learners has your back with live support, interactive discussions,
//             and expert insights. You're never on your own.
//           </p>
//         </div>

//         <div className="task2-box4">
//           <img
//             src={static4}
//             alt="achieve and showcase"
//             className="static-img"
//           />
//           <h1>Achieve & Showcase</h1>
//           <h3>Build your portfolio, get job-ready.</h3>
//           <p>
//             Your journey ends with achievement. Each completed project builds a
//             portfolio showcasing your skills and job readiness, bringing you
//             closer to that dream job, promotion, or your own venture.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Task2;

import React, { useState } from "react";
import "./Task2.css";
import person1 from "../assets/hoverimage_1.png";
import person2 from "../assets/hoverimage_24.png";
import wow from "../assets/wow-bubble.png";
import static1 from "../assets/topleft_1.png";
import static2 from "../assets/topright_2.png";
import static3 from "../assets/bottom_left3.png";
import static4 from "../assets/bottom_right4.png";

const Task2 = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const HoverContent = ({ title, image, showWow }) => (
    <div className="hover-visual">
      <img src={image} alt="Person" className="hover-img" />
      <div className="hover-text">
        <h2>{title}</h2>
      </div>
      {showWow && (
        <>
          <img src={wow} alt="Wow" className="wow-bubble top-left" />
          <img src={wow} alt="Wow" className="wow-bubble bottom-right" />
        </>
      )}
    </div>
  );

  return (
    <>
      <div className="task2-container">
        <p className="text-font">Your SkillShikshya Journey</p>
        <h1 className="text-font2">
          <span>Step</span> In. <span>Skill</span> Up. <span>Stand</span> Out.
          🚀
        </h1>
      </div>

      <div className="task2-container2">
        <div
          className={`task2-box1 hover-wrapper ${
            hoveredBox === "box1" ? "show-hover" : ""
          }`}
          onMouseEnter={() => setHoveredBox("box1")}
          onMouseLeave={() => setHoveredBox(null)}
        >
          {hoveredBox === "box1" ? (
            <HoverContent
              title="Clarity unlocked—stickers, sips, and skills all in one go!"
              image={person1}
              showWow={true}
            />
          ) : (
            <div className="box-content left">
              <img
                src={static1}
                alt="Start with Clarity"
                className="static-img"
              />
              <div className="text-wrapper">
                <h1>Start with Clarity</h1>
                <h3>Step into a better learning path.</h3>
                <p>
                  Overwhelmed by too many learning options? SkillShikshya
                  provides a clear, curated roadmap from the start. Whether
                  you're a beginner or upskilling, we have a path tailored to
                  your growth.
                </p>
              </div>
            </div>
          )}
        </div>

        <div
          className={`task2-box2 hover-wrapper ${
            hoveredBox === "box2" ? "show-hover" : ""
          }`}
          onMouseEnter={() => setHoveredBox("box2")}
          onMouseLeave={() => setHoveredBox(null)}
        >
          {hoveredBox === "box2" ? (
            <HoverContent
              title="Focused faces—learning mode: ON!"
              image={person2}
              showWow={false}
            />
          ) : (
            <div className="box-content right">
              <div className="text-wrapper">
                <h1>Learn by Doing</h1>
                <h3>Practical skills, real projects.</h3>
                <p>
                  Theory is great, but action is better. At SkillShikshya, you
                  learn by doing. Hands-on projects and real-world scenarios
                  help you build, break, and create—leading to true mastery.
                </p>
              </div>
              <img src={static2} alt="Learn by Doing" className="static-img" />
            </div>
          )}
        </div>

        <div className="task2-box3">
          <div className="box-content left">
            <img src={static3} alt="Get Mentored" className="static-img" />
            <div className="text-wrapper">
              <h1>Get Mentored & Supported</h1>
              <h3>You're not learning alone.</h3>
              <p>
                Stuck or need feedback? SkillShikshya's community of mentors and
                learners has your back with live support, interactive
                discussions, and expert insights. You're never on your own.
              </p>
            </div>
          </div>
        </div>

        <div className="task2-box4">
          <div className="box-content right">
            <div className="text-wrapper">
              <h1>Achieve & Showcase</h1>
              <h3>Build your portfolio, get job-ready.</h3>
              <p>
                Your journey ends with achievement. Each completed project
                builds a portfolio showcasing your skills and job readiness,
                bringing you closer to that dream job, promotion, or your own
                venture.
              </p>
            </div>
            <img
              src={static4}
              alt="Achieve and Showcase"
              className="static-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Task2;
