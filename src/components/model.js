import React, { useRef, useState, useEffect } from 'react'
import { setCurrent } from '../redux/modelCustomizationSlice'
import { setAOMapMaterial } from '../redux/materialsSlice';
import { useDrag } from 'react-use-gesture'
import { useSelector, useDispatch } from 'react-redux'
import { Center, Resize, useGLTF, useCursor, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import dataMaterials from '../data/dataMaterials';

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}

let dragRotation = { x: 0, y: 0 }

export default function Model() {
    const ref = useRef();
    const [hovered, set] = useState(null);
    const dispatch = useDispatch();
    // const { nodes, materials } = useGLTF('shoe-draco.glb');

    const { nodes, materials, animations } = useGLTF('desk.glb');
    const { actions, names } = useAnimations(animations);
    console.log(actions,names)

    const allMaterials = dataMaterials();
    useCursor(hovered);

    useEffect(() => {
        actions[names[0]].play(); // Replace 'YourAnimationName' with your animation name
    }, []);

    useFrame((state) => {
        // ref.current.rotation.x = lerp(
        //     ref.current.rotation.x,
        //     dragRotation.x,
        //     0.1
        // );
        ref.current.rotation.y = lerp(
            ref.current.rotation.y,
            dragRotation.y,
            0.1
        );
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
            ref={ref} scale={2}>
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


                        <mesh geometry={nodes.Object_6.geometry} material={materials.comp_desk_b}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.material)].baseColorMap}
                        />


                        <mesh geometry={nodes.Object_7.geometry} material={materials.comp_desk_a}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.material)].baseColorMap}
                        />

                    </group>
                    <group rotation={[Math.PI / 2, 0, 0]}>

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

                    <mesh geometry={nodes.Object_14.geometry} material={materials.comp_desk_top}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.material)].baseColorMap}
                    />

                </group>
            </Center>
        </Resize>
        // <group
        //     ref={ref}
        //     dispose={null}
        //     onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
        //     onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        //     onPointerMissed={() => dispatch(setCurrent(null))}
        //     onPointerDown={handlePointerDown}
        //     onClick={handleClick}
        //     {...dragBind()}
        // >
        //     <mesh
        //         geometry={nodes.shoe.geometry}
        //         material={materials.laces}
        //         material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.laces.material)].aoMap}
        //         material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.laces.material)].roughnessMap}
        //         material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.laces.material)].normalMap}
        //         material-map={allMaterials[useSelector((state) => state.modelCustomization.items.laces.material)].baseColorMap}
        //         // material-color={useSelector((state) => state.modelCustomization.items.laces.color)}
        //     />
        //     <mesh
        //         geometry={nodes.shoe_1.geometry}
        //         material={materials.mesh}
        //         material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.mesh.material)].aoMap}
        //         material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.mesh.material)].roughnessMap}
        //         material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.mesh.material)].normalMap}
        //         material-map={allMaterials[useSelector((state) => state.modelCustomization.items.mesh.material)].baseColorMap}
        //         // material-color={useSelector((state) => state.modelCustomization.items.mesh.color)}
        //     />
        //     <mesh
        //         geometry={nodes.shoe_2.geometry}
        //         material={materials.caps}
        //         material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.caps.material)].aoMap}
        //         material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.caps.material)].roughnessMap}
        //         material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.caps.material)].normalMap}
        //         material-map={allMaterials[useSelector((state) => state.modelCustomization.items.caps.material)].baseColorMap}
        //         // material-color={useSelector((state) => state.modelCustomization.items.caps.color)}
        //     />
        //     <mesh
        //         geometry={nodes.shoe_3.geometry}
        //         material={materials.inner}
        //         material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.inner.material)].aoMap}
        //         material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.inner.material)].roughnessMap}
        //         material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.inner.material)].normalMap}
        //         material-map={allMaterials[useSelector((state) => state.modelCustomization.items.inner.material)].baseColorMap}
        //         // material-color={useSelector((state) => state.modelCustomization.items.inner.color)}
        //     />
        //     <mesh
        //         geometry={nodes.shoe_4.geometry}
        //         material={materials.sole}
        //         material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.sole.material)].aoMap}
        //         material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.sole.material)].roughnessMap}
        //         material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.sole.material)].normalMap}
        //         material-map={allMaterials[useSelector((state) => state.modelCustomization.items.sole.material)].baseColorMap}
        //         // material-color={useSelector((state) => state.modelCustomization.items.sole.color)}
        //     />
        //     <mesh
        //         geometry={nodes.shoe_5.geometry}
        //         material={materials.stripes}
        //         material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.stripes.material)].aoMap}
        //         material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.stripes.material)].roughnessMap}
        //         material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.stripes.material)].normalMap}
        //         material-map={allMaterials[useSelector((state) => state.modelCustomization.items.stripes.material)].baseColorMap}
        //         // material-color={useSelector((state) => state.modelCustomization.items.stripes.color)}
        //     />
        //     <mesh
        //         geometry={nodes.shoe_6.geometry}
        //         material={materials.band}
        //         material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.band.material)].aoMap}
        //         material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.band.material)].roughnessMap}
        //         material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.band.material)].normalMap}
        //         material-map={allMaterials[useSelector((state) => state.modelCustomization.items.band.material)].baseColorMap}
        //         // material-color={useSelector((state) => state.modelCustomization.items.band.color)}
        //     />
        //     <mesh
        //         geometry={nodes.shoe_7.geometry}
        //         material={materials.patch}
        //         material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.patch.material)].aoMap}
        //         material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.patch.material)].roughnessMap}
        //         material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.patch.material)].normalMap}
        //         material-map={allMaterials[useSelector((state) => state.modelCustomization.items.patch.material)].baseColorMap}
        //         // material-color={useSelector((state) => state.modelCustomization.items.patch.color)}
        //     />
        // </group>
    );
}
