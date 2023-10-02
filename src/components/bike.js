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

let dragRotation = { x: 0, y: 0 }

let modelScale = 2;

export default function Bike() {
    const ref = useRef();
    const plateau = useRef();
    const groupe = useRef();
    const pieds = useRef();
    const cales = useRef();
    const objectToanimate = [plateau, groupe, pieds, cales];
    const [hovered, set] = useState(null);
    const dispatch = useDispatch();
    const isPositionUp = useSelector((state) => state.position);

    const { nodes, materials } = useGLTF('bike.glb');

    const allMaterials = dataMaterials();
    useCursor(hovered);

    modelScale = Math.min(2.5 * window.innerWidth / window.innerHeight, 2);

    const handleResize = () => {
        modelScale = Math.min(2.5 * window.innerWidth / window.innerHeight, 2);
    }
    window.addEventListener('resize', handleResize);

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
        // objectToanimate.forEach(object => {
        //     if (isPositionUp) {
        //         if (object === pieds || object === cales) {
        //             object.current.position.z = lerp(object.current.position.z, -0.15, 0.02);
        //         } else {
        //             object.current.position.y = lerp(object.current.position.y, 0.15, 0.02);
        //         }
        //     } else {
        //         if (object === pieds || object === cales) {
        //             object.current.position.z = lerp(object.current.position.z, 0, 0.02);
        //         } else {
        //             object.current.position.y = lerp(object.current.position.y, 0, 0.02);
        //         }
        //     }
        // });
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

    console.log(useSelector((state) => state.modelCustomization.current))

    return (
        <Resize
            ref={ref} scale={modelScale}>
            <Center>
                <group
                    dispose={null}
                    onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
                    onPointerOut={(e) => e.intersections.length === 0 && set(null)}
                    onPointerMissed={() => dispatch(setCurrent(null))}
                    // onPointerDown={handlePointerDown}
                    onClick={handleClick}
                    {...dragBind()}
                >
                    <group position={[0, 0.243, -0.12]} rotation={[-2.923, 0, Math.PI / 2]} scale={0.005}>
                        <mesh geometry={nodes.Plane.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Plane_1.geometry} material={materials.glossycolor}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.glossycolor.color)}
                        />
                    </group>
                    <group position={[0, 0.243, -0.12]} rotation={[-2.923, 0, Math.PI / 2]} scale={0.005}>
                        <mesh geometry={nodes.Plane002.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Plane002_1.geometry} material={materials.glossycolor}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.glossycolor.color)}
                        />
                    </group>
                    <group position={[0, -0.299, 0.082]} rotation={[-2.923, 0, Math.PI / 2]} scale={0.005}>
                        <mesh geometry={nodes.Plane003.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Plane003_1.geometry} material={materials.glossycolor}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.glossycolor.color)}
                        />
                    </group>
                    <group position={[0, 0, -0.019]} rotation={[Math.PI, 0, Math.PI]}>
                        <mesh geometry={nodes.Cube002.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                        <mesh geometry={nodes.Cube002_1.geometry} material={materials.glossycolor}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.glossycolor.color)}
                        />
                    </group>
                    <mesh geometry={nodes.Cassette.geometry} material={materials.Rims} position={[0.038, -0.224, 0.487]} rotation={[0, 0, -Math.PI / 2]} scale={[0.073, 0.09, 0.073]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.Rims.color)}
                    />
                    <group position={[0, -0.224, -0.506]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.176, 0.023, 1.176]}>
                        <mesh geometry={nodes.Cylinder004.geometry} material={materials.Rims}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Rims.color)}
                        />
                        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.Rims2}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Rims2.color)}
                        />
                    </group>
                    <mesh geometry={nodes.Front_tire001.geometry} material={materials.Tires} position={[0, -0.224, -0.506]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.176, 0.023, 1.176]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.Tires.color)}
                    />
                    <group position={[0, -0.224, 0.487]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.176, 0.023, 1.176]}>
                        <mesh geometry={nodes.Cylinder006.geometry} material={materials.Rims}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Rims.color)}
                        />
                        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials.Rims2}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Rims2.color)}
                        />
                    </group>
                    <mesh geometry={nodes.Rear_tire.geometry} material={materials.Tires} position={[0, -0.224, 0.487]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.176, 0.023, 1.176]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Tires.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.Tires.color)}
                    />
                    <group position={[0, -0.224, -0.506]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.024, 0.047, 0.024]}>
                        <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.005']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Material.005'].color)}
                        />
                        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                    </group>
                    <group position={[-0.008, -0.224, 0.487]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.024, 0.03, 0.024]}>
                        <mesh geometry={nodes.Cylinder016.geometry} material={materials['Material.005']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Material.005'].color)}
                        />
                        <mesh geometry={nodes.Cylinder016_1.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Cylinder016_2.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                    </group>
                    <group position={[0, -0.224, -0.506]} rotation={[0.06, 0, 0]} scale={[0.001, 0.247, 0.001]}>
                        <mesh geometry={nodes.Cylinder014.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Cylinder014_1.geometry} material={materials['Material.005']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Material.005'].color)}
                        />
                    </group>
                    <group position={[-0.008, -0.224, 0.487]} rotation={[-2.469, 0, -Math.PI]} scale={[0.001, 0.247, 0.001]}>
                        <mesh geometry={nodes.Cylinder019.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Cylinder019_1.geometry} material={materials['Material.005']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Material.005'].color)}
                        />
                    </group>
                    <group position={[0, -0.224, -0.506]} rotation={[0.06, 0, 0]} scale={[0.001, 0.248, 0.001]}>
                        <mesh geometry={nodes.Cylinder002.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.levers}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.levers.color)}
                        />
                    </group>
                    <mesh geometry={nodes.Stem_bolts.geometry} material={materials.bolts} position={[0.015, 0.385, -0.378]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.001}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                    />
                    <mesh geometry={nodes.Stem_bolts2.geometry} material={materials.bolts} position={[0.004, 0.35, -0.255]} rotation={[1.912, 0, -Math.PI / 2]} scale={0}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                    />
                    <mesh geometry={nodes.Crank_bolts.geometry} material={materials.bolts} position={[0.052, -0.245, 0.087]} rotation={[Math.PI, 0, Math.PI]} scale={2.227}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                    />
                    <mesh geometry={nodes.Seatclamp_bolts.geometry} material={materials.bolts} position={[0, 0.405, 0.285]} rotation={[Math.PI, 0, Math.PI / 2]} scale={0.055}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                    />
                    <mesh geometry={nodes.Brake_bolts.geometry} material={materials.bolts} position={[0, 0.089, -0.4]} rotation={[1.989, 0, 0]} scale={[0.067, 0.07, 0.07]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                    />
                    <group position={[0, 0.366, -0.376]} rotation={[Math.PI, 0, Math.PI]} scale={[0.016, 0.059, 0.016]}>
                        <mesh geometry={nodes.Cylinder027.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Cylinder027_1.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                        <mesh geometry={nodes.Cylinder027_2.geometry} material={materials.levers}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.levers.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.levers.color)}
                        />
                        <mesh geometry={nodes.Cylinder027_3.geometry} material={materials.Rims2}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Rims2.color)}
                        />
                    </group>
                    <mesh geometry={nodes.Cap.geometry} material={materials['Flat_black.glossy']} position={[0, 0.363, -0.272]} rotation={[-2.823, 0, -Math.PI]} scale={0.003}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                    />
                    <mesh geometry={nodes.Chain.geometry} material={materials.bolts} position={[0.057, -0.28, 0.259]} rotation={[Math.PI, 0, Math.PI]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                    />
                    <mesh geometry={nodes.Crank_axle.geometry} material={materials['Flat_black.glossy']} position={[0.006, -0.291, 0.075]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.011, 0.077, 0.011]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                    />
                    <mesh geometry={nodes.Crank_spacers.geometry} material={materials['Flat_black.glossy']} position={[0, 0, -0.019]} rotation={[Math.PI, 0, Math.PI]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                    />
                    <group position={[0.006, -0.291, 0.075]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.011, 0.053, 0.011]}>
                        <mesh geometry={nodes.Cylinder024.geometry} material={materials.Rims2}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Rims2.color)}
                        />
                        <mesh geometry={nodes.Cylinder024_1.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                    </group>
                    <group position={[0.088, -0.313, 0.505]}>
                        <mesh geometry={nodes.Plane020.geometry} material={materials.Sticky_tape}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Sticky_tape.color)}
                        />
                        <mesh geometry={nodes.Plane020_1.geometry} material={materials.bolts}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                        />
                        <mesh geometry={nodes.Plane020_2.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                    </group>
                    <group position={[0, 0.111, -0.353]} rotation={[-2.819, 0, -Math.PI]} scale={0.025}>
                        <mesh geometry={nodes.Circle.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                        <mesh geometry={nodes.Circle_1.geometry} material={materials.glossycolor}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.glossycolor.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.glossycolor.color)}
                        />
                    </group>
                    <mesh geometry={nodes.Front_chainring.geometry} material={materials.Rims} position={[0.048, -0.291, 0.075]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.011, 0.043, 0.011]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.Rims.color)}
                    />
                    <mesh geometry={nodes.Front_derailleur.geometry} material={materials.Rims2} position={[0, -0.201, 0.096]} rotation={[-2.832, 0, -Math.PI]} scale={0.015}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.Rims2.color)}
                    />
                    <group position={[0, 0.366, -0.376]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.016, 0.059, 0.016]}>
                        <mesh geometry={nodes.Cylinder018.geometry} material={materials.tape}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.tape.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.tape.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.tape.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.tape.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.tape.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.tape.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.tape.color)}
                        />
                        <mesh geometry={nodes.Cylinder018_1.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                        <mesh geometry={nodes.Cylinder018_2.geometry} material={materials.Sticky_tape}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Sticky_tape.color)}
                        />
                    </group>
                    <group position={[0, 0.243, -0.12]} rotation={[-2.923, 0, Math.PI / 2]} scale={0.005}>
                        <mesh geometry={nodes.Plane005.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Plane005_1.geometry} material={materials['Material.005']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Material.005'].color)}
                        />
                    </group>
                    <mesh geometry={nodes.Lines001.geometry} material={materials.Sticky_tape} position={[0.057, 0.364, -0.394]} rotation={[0, 0, -Math.PI]} scale={-1}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Sticky_tape.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.Sticky_tape.color)}
                    />
                    <group position={[0, -0.291, 0.075]}>
                        <mesh geometry={nodes.Plane008.geometry} material={materials['Material.022']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.022'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.022'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.022'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Material.022'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.022'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Material.022'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Material.022'].color)}
                        />
                        <mesh geometry={nodes.Plane008_1.geometry} material={materials['Material.005']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Material.005'].color)}
                        />
                    </group>
                    <group position={[0, 0.417, 0.285]} rotation={[Math.PI, 0, Math.PI]} scale={[0.722, 1, 0.8]}>
                        <mesh geometry={nodes.Plane001.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                        <mesh geometry={nodes.Plane001_2.geometry} material={materials.Rims2}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Rims2.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Rims2.color)}
                        />
                    </group>
                    <mesh geometry={nodes.Seatclamp.geometry} material={materials['Material.005']} position={[0, 0.243, -0.12]} rotation={[-2.923, 0, Math.PI / 2]} scale={0.005}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Material.005'].material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items['Material.005'].color)}
                    />
                    <group position={[0, 0.266, 0.24]} rotation={[Math.PI, 0, Math.PI]} scale={0.012}>
                        <mesh geometry={nodes.Cylinder001.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                    </group>
                    <mesh geometry={nodes.Steam.geometry} material={materials.Flat_black} position={[0, 0, -0.019]} rotation={[Math.PI, 0, Math.PI]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                    />
                    <mesh geometry={nodes.Support.geometry} material={materials.bb} position={[0, -0.291, 0.075]} rotation={[Math.PI, 0, Math.PI]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bb.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bb.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bb.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bb.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bb.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bb.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bb.color)}
                    />
                    <mesh geometry={nodes.Line.geometry} material={materials.bolts} position={[0, 0.058, 0.262]} rotation={[0, 0, -Math.PI / 2]} scale={[0.001, 0.025, 0.001]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                    />
                    <mesh geometry={nodes.Line2.geometry} material={materials.bolts} position={[0, 0.12, -0.386]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.001, 0.025, 0.001]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                    />
                    <group position={[0, 0.089, -0.4]} rotation={[1.989, 0, 0]} scale={[0.067, 0.07, 0.07]}>
                        <mesh geometry={nodes.Plane028.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                        <mesh geometry={nodes.Plane028_1.geometry} material={materials.bolts}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                        />
                        <mesh geometry={nodes.Plane028_2.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                    </group>
                    <group position={[0, 0.035, 0.285]} rotation={[0.801, 0, Math.PI]} scale={[0.065, 0.068, 0.068]}>
                        <mesh geometry={nodes.Plane025.geometry} material={materials.Flat_black}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.Flat_black.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.Flat_black.color)}
                        />
                        <mesh geometry={nodes.Plane025_1.geometry} material={materials.bolts}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.bolts.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.bolts.color)}
                        />
                        <mesh geometry={nodes.Plane025_2.geometry} material={materials['Flat_black.glossy']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                        />
                    </group>
                    <mesh geometry={nodes['???'].geometry} material={materials.Flat_black} position={[-0.015, 0.058, 0.262]} rotation={[2.34, 0, 0]} scale={[0.065, 0.068, 0.068]} />
                    <mesh geometry={nodes['???2'].geometry} material={materials.Flat_black} position={[0.014, 0.12, -0.386]} rotation={[0.801, 0, Math.PI]} scale={[0.065, 0.068, 0.068]} />
                    <mesh geometry={nodes.Line_mounts.geometry} material={materials['Flat_black.glossy']} position={[0, 0.243, -0.12]} rotation={[Math.PI, 0, Math.PI]} scale={0.06}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items['Flat_black.glossy'].color)}
                    />
                    <mesh geometry={nodes.blackdecal.geometry} material={materials.blackdecal} position={[0, 0, -0.019]} rotation={[Math.PI, 0, Math.PI]} scale={[0.717, 1, 1]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.blackdecal.color)}
                    />
                    <mesh geometry={nodes.blackdecal001.geometry} material={materials.blackdecal} position={[0, 0.005, 0.303]} rotation={[Math.PI, 0, Math.PI]} scale={[0.717, 1, 1]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.blackdecal.color)}
                    />
                    <mesh geometry={nodes.blackdecal2.geometry} material={materials.blackdecal2} position={[0, 0.243, -0.12]} rotation={[Math.PI / 2, 0, Math.PI / 2]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal2.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal2.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal2.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal2.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal2.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.blackdecal2.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.blackdecal2.color)}
                    />
                    <mesh geometry={nodes.gigantDecal2001.geometry} material={materials.gigantDecal2} position={[0, 0, -0.019]} rotation={[Math.PI, 0, Math.PI]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.gigantDecal2.color)}
                    />
                    <mesh geometry={nodes.GigantLOGOdecal.geometry} material={materials.GigantLOGOdecal} position={[0, 0.251, -0.465]} rotation={[Math.PI / 2, 0, 0]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.color)}
                    />
                    <mesh geometry={nodes.GigantLOGOdecal001.geometry} material={materials.GigantLOGOdecal} position={[0, 0.179, -0.465]} rotation={[-Math.PI / 2, 0, -Math.PI]}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.GigantLOGOdecal.color)}
                    />
                    <group position={[0.003, -0.224, 0.487]} rotation={[1.416, Math.PI / 2, 0]}>
                        <mesh geometry={nodes.gigantDecal2006.geometry} material={materials.gigantDecal2}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.gigantDecal2.color)}
                        />
                        <mesh geometry={nodes.gigantDecal2006_1.geometry} material={materials['GIGANTLOGO.001']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].color)}
                        />
                    </group>
                    <group position={[0, -0.224, -0.506]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                        <mesh geometry={nodes.gigantDecal2004.geometry} material={materials.gigantDecal2}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items.gigantDecal2.color)}
                        />
                        <mesh geometry={nodes.gigantDecal2004_1.geometry} material={materials['GIGANTLOGO.001']}
                            material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].aoMap}
                            material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].roughnessMap}
                            material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].normalMap}
                            material-map={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].baseColorMap}
                            material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].metalnessMap}
                            material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].material)].metalness}
                            material-color={useSelector((state) => state.modelCustomization.items['GIGANTLOGO.001'].color)}
                        />
                    </group>
                    <mesh geometry={nodes.GIGANTLOGO001.geometry} material={materials.gigantDecal2} position={[0.006, -0.291, 0.075]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.084}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.gigantDecal2.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.gigantDecal2.color)}
                    />
                    <mesh geometry={nodes.GIGANTLOGO002.geometry} material={materials.GIGANTLOGO} position={[0.006, -0.291, 0.075]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.084}
                        material-aoMap={allMaterials[useSelector((state) => state.modelCustomization.items.GIGANTLOGO.material)].aoMap}
                        material-roughnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.GIGANTLOGO.material)].roughnessMap}
                        material-normalMap={allMaterials[useSelector((state) => state.modelCustomization.items.GIGANTLOGO.material)].normalMap}
                        material-map={allMaterials[useSelector((state) => state.modelCustomization.items.GIGANTLOGO.material)].baseColorMap}
                        material-metalnessMap={allMaterials[useSelector((state) => state.modelCustomization.items.GIGANTLOGO.material)].metalnessMap}
                        material-metalness={allMaterials[useSelector((state) => state.modelCustomization.items.GIGANTLOGO.material)].metalness}
                        material-color={useSelector((state) => state.modelCustomization.items.GIGANTLOGO.color)}
                    />
                </group>
            </Center>
        </Resize>
    );
}