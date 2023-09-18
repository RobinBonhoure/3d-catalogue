'use client'

import { useState } from 'react';
import { Sphere, useCursor } from '@react-three/drei';
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Canvas } from '@react-three/fiber';


const partsMaterials = {
    mesh: {
        default: true,
        wood: false
    },
    laces: {
        default: true,
        wood: true
    },
    caps: {
        default: true,
        wood: true
    },
    inner: {
        default: true,
        wood: true
    },
    sole: {
        default: true,
        wood: true
    },
    stripes: {
        default: true,
        wood: true
    },
    band: {
        default: true,
        wood: true
    },
    patch: {
        default: true,
        wood: true
    },
}




export default function Materials({ part }) {


    const materials = {
        default: {
            aoMap: useLoader(TextureLoader, 'materials/wood/ambientOcclusion.jpg'),
            roughnessMap: useLoader(TextureLoader, 'materials/wood/roughness.jpg'),
            normalMap: useLoader(TextureLoader, 'materials/wood/normal.jpg'),
            baseColorMap: useLoader(TextureLoader, 'materials/wood/baseColor.jpg'),
        },
        wood: {
            aoMap: useLoader(TextureLoader, 'materials/wood/ambientOcclusion.jpg'),
            roughnessMap: useLoader(TextureLoader, 'materials/wood/roughness.jpg'),
            normalMap: useLoader(TextureLoader, 'materials/wood/normal.jpg'),
            baseColorMap: useLoader(TextureLoader, 'materials/wood/baseColor.jpg'),
        },
    }

    const [hovered, setHovered] = useState(false);
    useCursor(hovered)

    // if (part === null) return null;
    const partMaterial = Object.keys(partsMaterials[part]).filter(key => partsMaterials[part][key]);
    console.log(partMaterial);

    return (
        <>
            {partMaterial.map((material, index) => {
                return (
                    <Canvas key={index}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Sphere
                            args={[2, 32, 32]}
                            onPointerOver={() => setHovered(true)}
                            onPointerOut={() => setHovered(false)}
                            position={[0, 0, 0]} // Adjust the position as needed
                        >
                            <meshPhongMaterial
                                attach="material"
                                aoMap={materials[material].aoMap}
                                roughnessMap={materials[material].roughnessMap}
                                normalMap={materials[material].normalMap}
                                map={materials[material].baseColorMap}
                            />
                        </Sphere>
                    </Canvas>
                );
            })}
        </>
    );
}