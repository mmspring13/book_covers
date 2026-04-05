import './style.css'
import './app.css'
import { gsap } from "gsap";
    
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(DrawSVGPlugin,MotionPathPlugin,MorphSVGPlugin,TextPlugin,Observer);

const animateStart = () => {
  gsap.fromTo('#app-cover', {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 1,
    fill: 'forwards',
    ease: "linear"
  })
};

const animateBorderCover = () => {
  gsap.to('#cover', {
    "--border-scale": 1,
    duration: 1,
    fill: 'forwards',
    ease: "linear"
  });
};

const textEffectAndSwipeImageByScroll = () => {
  const masterTl = gsap.timeline({ paused: true });
  const textTl = gsap.timeline({ paused: true });

  textTl.to(".text-effect", {
    "--blur-val": "0",
    "--opacity-val": 1,
    duration: 1,
    ease: "linear"
  });

  masterTl.to("#cover", {
    "--blur-val": "0",
    "--opacity-val": 1,
    duration: 1
  });

  Observer.create({
    type: "wheel,touch",
    onDown: () => {
      let ttlp = textTl.progress();
      if (ttlp < 1) {
        gsap.to(textTl, { 
          progress: "+=0.1", 
          duration: 0.46, 
          overwrite: "auto" 
        });
      }
      if(ttlp > 0.72) {
        gsap.to(masterTl, { 
          progress: "+=0.1", 
          duration: 0.4, 
          overwrite: "auto" 
        });
      }
    },
    onUp: () => {
      let ttlp = textTl.progress();
      if (textTl.progress() < 1) {
        gsap.to(textTl, { 
          progress: "-=0.1", 
          duration: 0.4, 
          overwrite: "auto"
        });
      }
      if(ttlp > 0.72) {
        gsap.to(masterTl, { 
          progress: "-=0.1", 
          duration: 0.46, 
          overwrite: "auto" 
        });
      }
    },
    tolerance: 10,
    preventDefault: true,
    dragClickables: false,  // Ensures buttons still work
  });
};

const animateNoise = () => {
  gsap.to("#roughpaper feTurbulence", {
    attr: { seed: 100 },
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "steps(12)"
  });
};

const animateDecor = () => {
  let duration = 7.1;
  let ease = 'linear';
  gsap.fromTo("#decor-item", {
    attr: {
      transform: 'rotate(-16)',
    },
  }, {
    attr: {
      transform: 'rotate(56)',
    },
    duration,
    yoyo: true,
    ease,
    repeat: -1,
  });
  gsap.to("#decor-item-wrapper", {
    x: 332,
    y: 80,
    duration,
    ease,
    repeat: -1,
    yoyo: true,
  });
  gsap.fromTo("#toothpick",
    {
      attr: {
        transform: 'rotate(0)',
      },
    },
    {
      attr: {
        transform: 'rotate(54.6)',
      },
      duration,
      ease,
      repeat: -1,
      yoyo: true,
    }
  );
  gsap.to("#toothpick-path",
    {
      x: 380,
      y: 20,
      duration,
      ease,
      repeat: -1,
      yoyo: true,
    }
  );
};

const animateHand = () => {
  gsap.fromTo("#full-finger-1",
    { rotate: -2.4, svgOrigin: "283px 200px" },
    { rotate: 3.8, duration: 1.6, ease: "power1.out", repeat: -1, yoyo: true }
  );
  gsap.fromTo("#full-finger-5",
    { rotate: -2.4, svgOrigin: "467px 247px" },
    { rotate: 3.8, duration: 1.6, ease: "power1.out", repeat: -1, yoyo: true }
  );

  gsap.fromTo("#full-finger-2",
    { rotate: -2.4, svgOrigin: '228px 228px' },
    { 
      rotate: 3.8, 
      duration: 1.4, 
      stagger: 0.2,
      ease: "power1.inOut", 
      repeat: -1, 
      yoyo: true 
    }
  );
  gsap.fromTo("#full-finger-3",
    { rotate: -1.6, svgOrigin: '179px 253px' },
    { 
      rotate: 2.8, 
      duration: 2, 
      stagger: 0.2,
      ease: "power1.inOut", 
      repeat: -1, 
      yoyo: true 
    }
  );

  gsap.fromTo("#full-finger-4",
    {
      svgOrigin: '153px 287px',
      rotate: -16,
    },
    {
      rotate: 20,
      duration: 3.4,
      ease: "power1.linear",
      repeat: -1,
      yoyo: true,
      startAt: { rotate: -12 }
    }
  );
};

const animateGlass = () => {
  gsap.fromTo("#glass", 
    { rotate: -2.6, transformOrigin: 'center bottom' },
    { rotate: 2, duration: 1.6, ease: "linear", repeat: -1, yoyo: true }
  );
};

const animateLiquid = () => {
  gsap.fromTo("#liquid-path",
    { x: -12, rotate: -5.2, transformOrigin: '50% 50%' },
    { x: 12, rotate: 6, duration: 1.6, ease: "linear", repeat: -1, yoyo: true }
  );
};

const animateCharacter = () => {
  gsap.fromTo('#character-paths', {
    y: 26,
    x: -4,
    opacity: .3,
  }, {
    y: -86,
    x: 7,
    opacity: 1,
    duration: 1.8,
    ease: 'linear',
    yoyo: true,
    repeat: -1,
  })
};


let start = () => {
  animateCharacter();
  textEffectAndSwipeImageByScroll();
  animateHand();
  animateLiquid();
  animateGlass();
  animateDecor();
  animateNoise();
  animateBorderCover();
  animateStart();
};
start();


