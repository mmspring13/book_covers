import './style.css'
import './app.css'

import { gsap } from "gsap";

// import { CustomEase } from "gsap/CustomEase";
    
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(DrawSVGPlugin,MotionPathPlugin,MorphSVGPlugin,TextPlugin);

const liquidStates = [
  // "M0,0l278,0c0.669,0.275 -84.784,129.45 -115,154c-12.935,10.51 -37.885,11.446 -50,0c-27.167,-25.667 -113,-154 -113,-154",
  "M-4.767,-15.89L278,0C278.669,0.275 193.216,129.45 163,154C150.065,164.51 125.115,165.446 113,154C85.833,128.333 -4.767,-15.89 -4.767,-15.89Z",
  "M0,0L286.899,-13.983C287.568,-13.708 193.216,129.45 163,154C150.065,164.51 125.115,165.446 113,154C85.833,128.333 0,0 0,0Z"
];

// gsap.to("#liquid-path", {
//   keyframes: liquidStates.map(path => ({
//     morphSVG: path,
//     duration: 0.72,
//     ease: "linear"
//   })),
//   repeat: -1,
//   yoyo: true
// });

gsap.to(".cover", {
  "--border-scale": 1, // Animates from 0 to 1
  duration: .5,
  ease: "power2.out"
});

// gsap.from(".text-effect", {
//   duration: 1.5,
//   opacity: 0,
//   filter: "blur(10px)",
//   y: 20,             // Optional: subtle slide up
//   ease: "power3.out"
// });

// gsap.set('.text-seffect', {
//   transformOrigin: "50% 50%", 
//   transformBox: "fill-box",     // Crucial: Tells SVG to use the element's box, not the whole SVG canvas
//   // alignmentBaseline: "middle", // Helps align the internal coordinate system
//   // dominantBaseline: "central"  // Vertically centers the text anchor
// });
gsap.fromTo(".text-effect", 
  {
    opacity: 0,
    // transform: "matrix(1,0,0,1,0,0)",
    // scale: 0.5,            // Starts small (in the distance)
    immediateRender: true,
    filter: "blur(20px)",  // Heavy blur for depth of field
    // zIndex: -1              // At the back
  }, 
  {
    duration: 7.5,
    // transform: "matrix(1,0,0,1,0,0)",
    opacity: 1,
    // scale: 1,            // Scales up to normal size
    filter: "blur(0px)",   // Clears up as it "hits" the focus plane
    // zIndex: 20,            // Moves to the front
    ease: "power2.out",
    // force3D: true             // Uses GPU to keep the center point stable
  }
);

// Animation for fingers 1 and 5
gsap.set('#full-finger-1', {
  // svgOrigin: "467px 247px",
  rotate: '10deg',
  // transformOrigin: "50% 100%" // Adjust percentages to align with the knuckle
});
// gsap.to("#full-finger-1, #full-finger-5", {
//   rotate: 3.8,
//   duration: 0.62,
//   ease: "power1.inOut", // Equivalent to ease-in-out
//   repeat: -1,           // Infinite loop
//   yoyo: true,             // Alternate direction
//   startAt: { rotate: -2.4 } // Sets the initial starting point
// });

// Animation for finger 4
gsap.to("#full-finger-4", {
  rotate: 20,
  duration: 1.2,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  startAt: { rotate: -12 }
});

gsap.to(".poster-svg", { 
  opacity: 0, 
  duration: 4, 
  ease: "power1.out" 
});

setTimeout(() => {
  let ch = document.querySelector(".cover-character");
  ch.classList.add("twitch");
  // let f5 = document.getElementById("full-finger-5");
  // f5.classList.add("flap");
}, 0.76 * 1000);



// hand






