"use client";

<<<<<<< C:\Users\Asus\Desktop\Portfolio\src\components\Particle.js
import React from "react";
import Particles from "react-tsparticles";

function Particle() {
=======
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: false,
});

function Particle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(!mq.matches);
    };

    update();

    if (mq.addEventListener) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  if (!enabled) return null;

>>>>>>> c:\Users\Asus\.windsurf\worktrees\Portfolio\Portfolio-1103aada\src\components\Particle.js
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
<<<<<<< C:\Users\Asus\Desktop\Portfolio\src\components\Particle.js
            value: 160,
=======
            value: 110,
>>>>>>> c:\Users\Asus\.windsurf\worktrees\Portfolio\Portfolio-1103aada\src\components\Particle.js
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
