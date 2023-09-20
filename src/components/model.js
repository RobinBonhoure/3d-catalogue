import React, { useRef, useState, useEffect } from 'react'
import { setCurrent } from '../redux/modelCustomizationSlice'
import { setAOMapMaterial } from '../redux/materialsSlice';
import { useDrag } from 'react-use-gesture'
import { useSelector, useDispatch } from 'react-redux'
import { Center, Resize, useGLTF, useCursor } from "@react-three/drei"
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
    const { nodes, materials } = useGLTF('desk.glb');
    const allMaterials = dataMaterials();
    useCursor(hovered);

    console.log(allMaterials);

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

    console.log(materials.comp_desk_top.map, allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.baseColorMap)])

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
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.aoMap)]}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.roughnessMap)]}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.normalMap)]}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_c.baseColorMap)]}
                        />


                        <mesh geometry={nodes.Object_5.geometry} material={materials.comp_desk}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.aoMap)]}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.roughnessMap)]}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.normalMap)]}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk.baseColorMap)]}
                        />


                        <mesh geometry={nodes.Object_6.geometry} material={materials.comp_desk_b}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.aoMap)]}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.roughnessMap)]}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.normalMap)]}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_b.baseColorMap)]}
                        />


                        <mesh geometry={nodes.Object_7.geometry} material={materials.comp_desk_a}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.aoMap)]}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.roughnessMap)]}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.normalMap)]}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_a.baseColorMap)]}
                        />

                    </group>
                    <group rotation={[Math.PI / 2, 0, 0]}>

                        <mesh geometry={nodes.Object_10.geometry} material={materials.comp_desk_2remote}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.aoMap)]}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.roughnessMap)]}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.normalMap)]}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_2remote.baseColorMap)]}
                        />


                        <mesh geometry={nodes.Object_11.geometry} material={materials.comp_desk_1remote}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.aoMap)]}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.roughnessMap)]}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.normalMap)]}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_1remote.baseColorMap)]}
                        />


                        <mesh geometry={nodes.Object_12.geometry} material={materials.comp_desk_button}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.aoMap)]}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.roughnessMap)]}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.normalMap)]}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_button.baseColorMap)]}
                        />


                        <mesh geometry={nodes.Object_9.geometry} material={materials.comp_desk_remote}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.aoMap)]}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.roughnessMap)]}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.normalMap)]}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_remote.baseColorMap)]}
                        />

                    </group>

                    <mesh geometry={nodes.Object_14.geometry} material={materials.comp_desk_top}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.aoMap)]}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.roughnessMap)]}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.normalMap)]}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.comp_desk_top.baseColorMap)]}
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
