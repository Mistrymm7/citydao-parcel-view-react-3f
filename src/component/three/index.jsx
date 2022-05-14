import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import * as THREE from "three";


import ParcelModel from "./parcel";

export default function Three() {

    const cameraRef = useRef(null);
    
    
    // Animation
    
    return (
        <>
            {/* Camera */}
            <PerspectiveCamera ref={cameraRef} makeDefault position={[800, 800, 800]}  near={0.1} far={5000} />
            {console.log(cameraRef.current)}
            
            <OrbitControls minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} enableDamping enableZoom maxDistance = {2000} minDistance = {1500} />

            {/* Ball */}
            <mesh position={[-2, 1.5, 0]} castShadow >
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
            </mesh>

            <gridHelper args={[5000, 100, new THREE.Color('rgb(0, 255, 0)'), new THREE.Color('rgb(0, 255, 0)')]} />

            {/* Car */}
            {/* <CityDAO /> */}
            <ParcelModel />

            {/* Floor */}
            {/* <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#1ea3d8" />
            </mesh> */}

            {/* Ambient light */}
            <ambientLight args={["#ffffff", 0.5]} />

            {/* Spotlight light */}
            <spotLight args={["#ffffff", 1.5, 10, angleToRadians(45), 0.4]} position={[1000, 1000, 1000]}  />

            
        </>
    )
}