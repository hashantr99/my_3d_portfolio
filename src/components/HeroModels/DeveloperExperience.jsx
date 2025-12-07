import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Developer } from "./Developer";
//import HeroLights from "./HeroLights";
import Particles from "./Particles";
import DeveloperLights from "./DeveloperLights";

const DeveloperExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 4.3, 26], fov: 36 }}> 
    {/* first camera position -> position: [0, 2, 14], fov: 40  */}
      {/* <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      /> */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={32}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* <HeroLights /> */}
      <DeveloperLights />

      <Particles count={100} />

      <group
        // Slightly smaller on mobile
        scale={isMobile ? 0.7 : 0.9}
        //scale={isMobile ? 0.75 : 1}
        // Lift the model a bit so his desk sits nicely in frame
        position={[1.2, -3.4, 0]}
        //position={[0, -2.5, 0]}
        // Gentle angle so you see some depth
        //rotation={[0, -Math.PI / 8, 0]}
        rotation={[0, -Math.PI / 8, 0]}
      >
        <Developer />
      </group>
    </Canvas>
  );
};

export default DeveloperExperience;
