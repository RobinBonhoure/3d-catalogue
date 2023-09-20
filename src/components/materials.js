'use client'

import { useState, Suspense } from 'react';
import { Sphere, useCursor } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useSelector, useDispatch } from 'react-redux'
import { setItemMaterial } from '../redux/modelCustomizationSlice'

import dataMaterials from '../data/dataMaterials';


const partsMaterials = {
    comp_desk_c: {
        metal: true,
        fabric: true,
        wood: true,
        gravel: true
    },
    comp_desk: {
        metal: true,
        fabric: true,
        wood: true
    },
    comp_desk_b: {
        metal: true,
        fabric: true,
        wood: true
    },
    comp_desk_a: {
        metal: true,
        fabric: true,
        wood: true
    },
    comp_desk_2remote: {
        metal: true,
        fabric: true,
        wood: true
    },
    comp_desk_1remote: {
        metal: true,
        fabric: true,
        wood: true
    },
    comp_desk_button: {
        metal: true,
        fabric: true,
        wood: true
    },
    comp_desk_remote: {
        metal: true,
        fabric: true,
        wood: true
    },
    comp_desk_top: {
        metal: true,
        fabric: true,
        wood: true,
        gravel: true
    },
}




export default function Materials({ part }) {



    const dispatch = useDispatch();
    const target = useSelector((state) => state.modelCustomization.current);

    const handleMaterialChange = (material) => {
        dispatch(setItemMaterial({ item: target, material }));
    };

    const allMaterials = dataMaterials();
    console.log(allMaterials.wood.baseColorMap)

    const [hovered, setHovered] = useState(false);
    useCursor(hovered)

    // if (part === null) return null;
    const partMaterial = Object.keys(partsMaterials[part]).filter(key => partsMaterials[part][key]);

    return (
        <>
            {partMaterial.map((material, index) => {
                console.log(material)
                return (
                    <div key={index} className="material">
                        <Canvas>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <Suspense fallback={null}>
                                <Sphere
                                    args={[2, 32, 32]}
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