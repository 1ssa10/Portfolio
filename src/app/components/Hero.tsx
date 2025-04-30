"use client";
import { useGSAP } from "@gsap/react";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import R3f from "./R3f";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    gsap.set("#hero", {
      clipPath: " polygon(30% 0, 100% 0%, 70% 100%, 0% 100%)",

      // borderRadius: "0 0 40% 10%",
    });
    gsap.from("#hero", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "top top",
        end: "center center",
        scrub: true,
      },
    });
  });
  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-[#2e2e2e]">
      <div
        id={"hero"}
        className=" relative w-full h-full  overflow-hidden z-10  bg-gray-dark "
      >
        <R3f />
        <div className="absolute top-5  left-10 md:left-20">
          <h1 className="text-3xl md:text-6xl font-zentry special-font text-white">
            M<b>a</b>hmoud 1ssa
          </h1>
        </div>
        <div className=" absolute bottom-5 right-10 text-3xl md:text-6xl text-white  font-bold font-zentry special-font ">
          <h1>
            W<b>E</b>B DEVELOPER
          </h1>
        </div>
      </div>
      <div className=" absolute bottom-5 right-10 text-3xl md:text-6xl text-detective-red  font-bold font-zentry special-font ">
        <h1>
          W<b>E</b>B DEVELOPER
        </h1>
      </div>
      <div className="absolute top-5  left-10 md:left-20">
        <h1 className="text-3xl md:text-6xl font-zentry special-font text-detective-red">
          M<b>a</b>hmoud 1ssa
        </h1>
      </div>
    </div>
  );
};

export default Hero;
