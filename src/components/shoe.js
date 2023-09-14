import React, { useRef, useState, useEffect } from 'react'
import { setCurrent, setItemColor } from '../redux/appSlice'
import { useDrag } from 'react-use-gesture'
import { useSelector, useDispatch } from 'react-redux'
import { useGLTF } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}

let dragRotation = { x: 0, y: 0 }

export default function Shoe() {
    const ref = useRef()
    const [hovered, set] = useState(null)
    const dispatch = useDispatch();
    const { nodes, materials } = useGLTF("shoe-draco.glb")

    // WOOD MATERIAL
    const aoMap = useLoader(TextureLoader, 'materials/wood/ambientOcclusion.jpg')
    const roughnessMap = useLoader(TextureLoader, 'materials/wood/roughness.jpg')
    const normalMap = useLoader(TextureLoader, 'materials/wood/normal.jpg')
    const baseColorMap = useLoader(TextureLoader, 'materials/wood/baseColor.jpg')

    // CLASSIC MATERIAL
    // const aoMap = materials.mesh.aoMap
    // const roughnessMap = useLoader(TextureLoader, 'materials/wood/roughness.jpg')
    // const normalMap = useLoader(TextureLoader, 'materials/wood/normal.jpg')
    // const baseColorMap = useLoader(TextureLoader, 'materials/wood/baseColor.jpg')


    // const actualMaterial = {

    // }

    // switch (choice) {
    //     case 'laces':
    //         materials.laces.color = useSelector((state) => state.app.items.laces)
    //         break;
    //     case 'mesh':
    //         materials.mesh.color = useSelector((state) => state.app.items.mesh)
    //         break;
    //     case 'caps':
    //         materials.caps.color = useSelector((state) => state.app.items.caps)
    //         break;
    //     default:
    //         break;
    // }




    //   // Load a displacement map
    //   const displacementMap = TextureLoader.load('path/to/displacementMap.jpg');

    //   // Load a roughness map
    //   const roughnessMap = TextureLoader.load('path/to/roughnessMap.jpg');


    useEffect(() => {
        // Object.values(materials).forEach(material => {
        //     material.map = baseColorMap
        //     material.aoMap = aoMap
        //     material.roughnessMap = roughnessMap
        //     material.normalMap = normalMap
        // });
    })



    // useEffect(() => {
    //   const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${useSelector((state) => state.app.items[hovered])}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    //   const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    //   document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
    // }, [hovered])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
        ref.current.rotation.x = lerp(ref.current.rotation.x, Math.cos(t / 4) / 8 + dragRotation.x, 0.1)
        ref.current.rotation.y = lerp(ref.current.rotation.y, Math.sin(t / 4) / 8 + dragRotation.y, 0.1)
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })

    const [isDragging, setIsDragging] = useState(false)
    const dragBind = useDrag(({ offset: [x, y], down }) => {
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

    return (
        <group
            ref={ref}
            dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (dispatch(setCurrent(null)))}
            onPointerDown={(e) => (e.stopPropagation(), console.log(dragRotation.x))}
            onClick={(e) => (e.stopPropagation(), !isDragging && dispatch(setCurrent(e.object.material.name)))}
            {...dragBind()}
        >
            <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={useSelector((state) => state.app.items.laces)} />
            <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={useSelector((state) => state.app.items.mesh)} />
            <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={useSelector((state) => state.app.items.caps)} />
            <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={useSelector((state) => state.app.items.inner)} />
            <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={useSelector((state) => state.app.items.sole)} />
            <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={useSelector((state) => state.app.items.stripes)} />
            <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={useSelector((state) => state.app.items.band)} />
            <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={useSelector((state) => state.app.items.patch)} />
        </group>
    )
}