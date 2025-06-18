import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import { Room1 } from "./Room1";
import { Room2 } from "./Room2";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
const HeroExperience = () => {

    const isTablet = useMediaQuery({ query: "(max-width:1024)" });
    const isMobile = useMediaQuery({ query: "(max-width:768)" });
    return (

        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
    
            <OrbitControls
                enablePan={false} //with this the user can only move it inone direction but cant change it direction in as 3d realm
                // 
                // enableZoom={!isTablet}
                // enable this to disable the zomming when in mobile 
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <Particles count = {100}/>
            <HeroLights/>
            <group
                scale={isMobile ? 0.8 : 1}
                position={[0, -3, -1]}
                rotation={[0, -Math.PI / 4, 0]}
            >
 
            <Room />
            </group>
        </Canvas >
    );
};

export default HeroExperience;

