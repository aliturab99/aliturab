import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";

const FloatingProfile = () => {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
        <Html center position={[0, 0, 0]} style={{ pointerEvents: "none" }}>
          <img
            src="https://i.pinimg.com/736x/49/c6/e1/49c6e1672b1f53fcd21d17ebebeabab1.jpg"
            alt="Developer Illustration"
            className="w-64 h-64 object-cover rounded-full shadow-xl"
            style={{ width: "256px", height: "256px" }}
            loading="eager"
          />
        </Html>
      </Float>
    </Canvas>
  );
};

export default FloatingProfile;
