"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Hero = () => {
  return (
    <div className="relative  h-dvh w-screen overflow-hidden">
      <div className="w-full h-full  overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/* <OrbitControls /> */}

          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>
      </div>
      <div className="absolute top-5  left-10 md:left-20">
        <h1 className="text-3xl md:text-5xl">Hello And Welocome</h1>
      </div>
    </div>
  );
};

export default Hero;
