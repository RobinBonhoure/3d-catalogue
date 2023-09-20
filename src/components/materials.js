'use client'

import { useState, Suspense } from 'react';
import { Sphere, useCursor } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useSelector, useDispatch } from 'react-redux'
import { setItemMaterial } from '../redux/modelCustomizationSlice'

import dataMaterials from '../data/dataMaterials';
import partsMaterials from '../data/partsMaterials';

export default function Materials({ part }) {

    const dispatch = useDispatch();
    const target = useSelector((state) => state.modelCustomization.current);

    const handleMaterialChange = (material) => {
        dispatch(setItemMaterial({ item: target, material }));
    };

    const actualMaterial = useSelector((state) => state.modelCustomization.items[target]?.material);
    console.log(actualMaterial)

    const allMaterials = dataMaterials();

    const [hovered, setHovered] = useState(false);
    useCursor(hovered)

    // if (part === null) return null;
    const partMaterials = partsMaterials[part].all;

    return (
        <>
            {partMaterials.map((material, index) => {
                return (
                    <div key={index} className={material === actualMaterial ? 'material active' : 'material'}>
                        <Canvas>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <Suspense fallback={null}>
                                <Sphere
                                    args={[3, 32, 32]}
                                    onPointerOver={() => setHovered(true)}
                                    onPointerOut={() => setHovered(false)}
                                    onClick={() => handleMaterialChange(material)}
                                    position={[0, 0, 0]} // Adjust the position as needed
                                >
                                    <meshStandardMaterial
                                        attach="material"
                                        aoMap={allMaterials[material].aoMap}
                                        roughnessMap={allMaterials[material].roughnessMap}
                                        normalMap={allMaterials[material].normalMap}
                                        map={allMaterials[material].baseColorMap}
                                        metalnessMap={allMaterials[material].metalnessMap}
                                        displacementMap={allMaterials[material].displacementMap}
                                    />
                                </Sphere>
                            </Suspense>
                        </Canvas>
                    </div>
                );
            })}
        </>
    );
}