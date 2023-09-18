import React, { useRef, useState } from 'react'
import { setCurrent } from '../redux/appSlice'
import { useDrag } from 'react-use-gesture'
import { useSelector, useDispatch } from 'react-redux'
import { useGLTF, useCursor } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}

let dragRotation = { x: 0, y: 0 }

export default function Shoe() {
    const ref = useRef();
    const [hovered, set] = useState(null);
    const dispatch = useDispatch();
    const { nodes, materials } = useGLTF('shoe-draco.glb');
    useCursor(hovered);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
        ref.current.rotation.x = lerp(
            ref.current.rotation.x,
            Math.cos(t / 4) / 8 + dragRotation.x,
            0.1
        );
        ref.current.rotation.y = lerp(
            ref.current.rotation.y,
            Math.sin(t / 4) / 8 + dragRotation.y,
            0.1
        );
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
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
        console.log(dragRotation.x);
    };

    const handleClick = (e) => {
        e.stopPropagation();
        if (!isDragging) {
            const itemName = e.object.material.name;
            dispatch(setCurrent(itemName));
        }
    };

    return (
        <group
            ref={ref}
            dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => dispatch(setCurrent(null))}
            onPointerDown={handlePointerDown}
            onClick={handleClick}
            {...dragBind()}
        >
            <mesh
                geometry={nodes.shoe.geometry}
                material={materials.laces}
                material-color={useSelector((state) => state.app.items.laces.color)}
            />
            <mesh
                geometry={nodes.shoe_1.geometry}
                material={materials.mesh}
                material-color={useSelector((state) => state.app.items.mesh.color)}
            />
            <mesh
                geometry={nodes.shoe_2.geometry}
                material={materials.caps}
                material-color={useSelector((state) => state.app.items.caps.color)}
            />
            <mesh
                geometry={nodes.shoe_3.geometry}
                material={materials.inner}
                material-color={useSelector((state) => state.app.items.inner.color)}
            />
            <mesh
                geometry={nodes.shoe_4.geometry}
                material={materials.sole}
                material-color={useSelector((state) => state.app.items.sole.color)}
            />
            <mesh
                geometry={nodes.shoe_5.geometry}
                material={materials.stripes}
                material-color={useSelector((state) => state.app.items.stripes.color)}
            />
            <mesh
                geometry={nodes.shoe_6.geometry}
                material={materials.band}
                material-color={useSelector((state) => state.app.items.band.color)}
            />
            <mesh
                geometry={nodes.shoe_7.geometry}
                material={materials.patch}
                material-color={useSelector((state) => state.app.items.patch.color)}
            />
        </group>
    );
}
