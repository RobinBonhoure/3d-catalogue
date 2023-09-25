import React, { useRef, useState, useEffect } from 'react'
import { setCurrent } from '../redux/modelCustomizationSlice'
import { useDrag } from 'react-use-gesture'
import { useSelector, useDispatch } from 'react-redux'
import { Center, Resize, useGLTF, useCursor, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import dataMaterials from '../data/dataMaterials';

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}

let dragRotation = { x: 0.1, y: 0 }

let modelScale = 2;

export default function Model() {
    const ref = useRef();
    const plateau = useRef();
    const groupe = useRef();
    const pieds = useRef();
    const cales = useRef();
    const objectToanimate = [plateau, groupe, pieds, cales];
    const [hovered, set] = useState(null);
    const dispatch = useDispatch();
    const isPositionUp = useSelector((state) => state.position);

    const { nodes, materials } = useGLTF('desk.glb');

    const allMaterials = dataMaterials();
    useCursor(hovered);

    useEffect(() => {
        const handleResize = () => {
            modelScale = Math.min(2 * window.innerWidth / window.innerHeight, 2);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useFrame((state) => {
        ref.current.rotation.x = lerp(
            ref.current.rotation.x,
            dragRotation.x,
            0.1
        );
        ref.current.rotation.y = lerp(
            ref.current.rotation.y,
            dragRotation.y,
            0.1
        );
        objectToanimate.forEach(object => {
            if (isPositionUp) {
                if (object === pieds || object === cales) {
                    object.current.position.z = lerp(object.current.position.z, -0.15, 0.02);
                } else {
                    object.current.position.y = lerp(object.current.position.y, 0.15, 0.02);
                }
            } else {
                if (object === pieds || object === cales) {
                    object.current.position.z = lerp(object.current.position.z, 0, 0.02);
                } else {
                    object.current.position.y = lerp(object.current.position.y, 0, 0.02);
                }
            }
        });
    });

    const [isDragging, setIsDragging] = useState(false);
    const dragBind = useDrag(
        ({ offset: [x, y], down }) => {
            if (down) {
                dragRotation.x = y / 100;
                dragRotation.y = x / 100;
                setIsDragging(true);
            } else {
                setIsDragging(false);
            }
        },
        { filterTaps: true }
    );

    const handlePointerDown = (e) => {
        e.stopPropagation();
    };

    const handleClick = (e) => {
        e.stopPropagation();
        if (!isDragging) {
            const itemName = e.object.material.name;
            dispatch(setCurrent(itemName));
        }
    };

    return (
        <Resize
            ref={ref} scale={modelScale}>
            <Center>
                <group
                    dispose={null}
                    onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
                    onPointerOut={(e) => e.intersections.length === 0 && set(null)}
                    onPointerMissed={() => dispatch(setCurrent(null))}
                    onPointerDown={handlePointerDown}
                    onClick={handleClick}
                    {...dragBind()}
                >
                    <group rotation={[Math.PI / 2, 0, 0]}>

                        <mesh geometry={nodes.Object_4.geometry} material={materials.comp_desk_c}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.material)].baseColorMap}
                        />


                        <mesh geometry={nodes.Object_5.geometry} material={materials.comp_desk}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.material)].baseColorMap}
                        />


                        <mesh ref={pieds} geometry={nodes.Object_6.geometry} material={materials.comp_desk_b}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].baseColorMap}
                        />


                        <mesh ref={cales} geometry={nodes.Object_7.geometry} material={materials.comp_desk_a}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].baseColorMap}
                        />

                    </group>
                    <group ref={groupe} rotation={[Math.PI / 2, 0, 0]}>

                        <mesh geometry={nodes.Object_10.geometry} material={materials.comp_desk_2remote}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.material)].baseColorMap}
                        />


                        <mesh geometry={nodes.Object_11.geometry} material={materials.comp_desk_1remote}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.material)].baseColorMap}
                        />


                        <mesh geometry={nodes.Object_12.geometry} material={materials.comp_desk_button}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.material)].baseColorMap}
                        />


                        <mesh geometry={nodes.Object_9.geometry} material={materials.comp_desk_remote}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.material)].baseColorMap}
                        />

                    </group>

                    <mesh ref={plateau} geometry={nodes.Object_14.geometry} material={materials.comp_desk_top}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].baseColorMap}
                        material-color={useSelector((state) => state.modelCustomization.items.comp_desk_top.color)}
                    />
                </group>
            </Center>
        </Resize>
    );
}