'use client'

import { useState } from 'react';
import { Sphere, useCursor } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import dataMaterials from '../data/dataMaterials';


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

    const allMaterials = dataMaterials();

    const [hovered, setHovered] = useState(false);
    useCursor(hovered)

    // if (part === null) return null;
    const partMaterial = Object.keys(partsMaterials[part]).filter(key => partsMaterials[part][key]);

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
                                aoMap={allMaterials[material].aoMap}
                                roughnessMap={allMaterials[material].roughnessMap}
                                normalMap={allMaterials[material].normalMap}
                                map={allMaterials[material].baseColorMap}
                            />
                        </Sphere>
                    </Canvas>
                );
            })}
        </>
    );
}