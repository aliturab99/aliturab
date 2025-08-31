import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { Frontend_skill, Backend_skill, Full_stack } from "@/constants";

const allSkills = [
  ...Frontend_skill,
  ...Backend_skill,
  ...Full_stack,
];

function SkillBall() {
  // Arrange skill icons in a sphere
  const radius = 2.5;
  const count = allSkills.length;
  const positions: [number, number, number][] = Array.from({ length: count }, (_, i) => {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ];
  });

  return (
    <group>
      {/* Render lines between every pair of skills */}
      {positions.map((posA, i) =>
        positions.map((posB, j) =>
          i < j ? (
            <line key={`line-${i}-${j}`}> 
              <bufferGeometry attach="geometry">
                <bufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([...posA, ...posB])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial attach="material" color="#bdbdbd" linewidth={1} />
            </line>
          ) : null
        )
      )}
      {/* Render skill names */}
      {allSkills.map((skill, idx) => (
        <Html
          key={idx}
          position={positions[idx]}
          center
          style={{ pointerEvents: "auto", fontWeight: "bold", fontSize: "1rem", width: 'max-content' }}
        >
          {skill.skill_name}
        </Html>
      ))}
    </group>
  );
}

const SkillsBall3D = () => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={
          <Html center>
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-2"></div>
              <span className="text-blue-500 font-semibold">Loading Skills...</span>
            </div>
          </Html>
        }>
          <SkillBall />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default SkillsBall3D;
