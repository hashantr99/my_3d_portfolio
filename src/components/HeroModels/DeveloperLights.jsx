import * as THREE from "three";

const DeveloperLights = () => {
  return (
    <>
      {/* Soft overall fill */}
      {/* <ambientLight intensity={0.3} color="#1a1a40" /> */}
      <ambientLight intensity={0.6} color="#F0FFFF" />

      {/* Main key light from front-right */}
      <directionalLight
        position={[4, 6, 6]}
        intensity={1.5}
        color="white"
        castShadow
      />

      {/* Cool rim light from back-left */}
      <spotLight
        position={[-5, 7, -2]}
        angle={0.5}
        intensity={1.2}
        penumbra={0.5}
        color="#4cc9f0"
        castShadow
      />

      {/* Warm accent from the side, like a desk lamp feel */}
      {/* <spotLight
        position={[2, 4, 2]}
        angle={0.4}
        intensity={1}
        penumbra={0.5}
        color="#ffb703"
      /> */}
      <spotLight
        position={[2, 4, 2]}
        angle={0.4}
        intensity={10}
        penumbra={0.5}
        color="#ffb703"
      />

      {/* RectAreaLight to simulate a glowing monitor / side light */}
      <primitive
        object={new THREE.RectAreaLight("#A259FF", 3, 1.5)}
        position={[0.5, 3.5, 4]}
        intensity={8}
        rotation={[-Math.PI / 3, Math.PI / 6, 0]}
      />

      {/* Small point light near the laptop area */}
      <pointLight
        position={[0, 3.5, 3]}
        intensity={1.8}
        color="#a5d8ff"
      />
    </>
  );
};

export default DeveloperLights;
