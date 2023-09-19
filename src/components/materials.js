'use client'

import { useState } from 'react';
import { Sphere, useCursor } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useSelector, useDispatch } from 'react-redux'
import { setItemMaterial } from '../redux/modelCustomizationSlice'

import dataMaterials from '../data/dataMaterials';


const partsMaterials = {
    mesh: {
        metal: true,
        fabric: true,
        wood: true
    },
    laces: {
        metal: true,
        fabric: true,
        wood: true
    },
    caps: {
        metal: true,
        fabric: true,
        wood: true
    },
    inner: {
        metal: true,
        fabric: true,
        wood: true
    },
    sole: {
        metal: true,
        fabric: true,
        wood: true
    },
    stripes: {
        metal: true,
        fabric: true,
        wood: true
    },
    band: {
        metal: true,
        fabric: true,
        wood: true
    },
    patch: {
        metal: true,
        fabric: true,
        wood: true
    },
}




export default function Materials({ part }) {

    
    const dispatch = useDispatch();
    const target = useSelector((state) => state.modelCustomization.current);

    // Get the item object based on the target
    const selectedItem = target || null;
    const itemMaterial = useSelector((state) => state.modelCustomization.items[target]?.material);

    const handleMaterialChange = (material) => {
        dispatch(setItemMaterial({ item: target, material }));
    };

    const allMaterials = dataMaterials();

    const [hovered, setHovered] = useState(false);
    useCursor(hovered)

    // if (part === null) return null;
    const partMaterial = Object.keys(partsMaterials[part]).filter(key => partsMaterials[part][key]);

    return (
        <>
            {partMaterial.map((material, index) => {
                console.log(material)
                return (
                    <Canvas key={index}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
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
                            />
                        </Sphere>
                    </Canvas>
                );
            })}
        </>
    );
}