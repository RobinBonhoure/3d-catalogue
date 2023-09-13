"use client"

import React, { useRef, useEffect, Suspense, useState } from 'react';
import { setCurrent, setItemColor } from '../redux/appSlice';
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, useGLTF, Environment } from "@react-three/drei"
import { useDrag } from 'react-use-gesture';
import { HexColorPicker } from "react-colorful"
import { useSelector, useDispatch } from 'react-redux';

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t
}

let dragRotation = { x: 0, y: 0 }

function Shoe() {
  const ref = useRef()
  const [hovered, set] = useState(null)
  const dispatch = useDispatch();

  const { nodes, materials } = useGLTF("shoe-draco.glb")

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

function Picker() {
  const dispatch = useDispatch();
  const target = useSelector((state) => state.app.current);
  return (
    <div className='picker' style={{ display: target ? "block" : "none" }}>
      <HexColorPicker color={useSelector((state) => state.app.items[target])} onChange={(color) => dispatch(setItemColor({ item: target, color: color }))} />
      <h1>{target}</h1>
    </div>
  )
}

export default function App() {
  return (
    <>
      <div className="canvas-container">
        <Picker />
        <Canvas pixelratio={[1, 1.5]} camera={{ position: [0, 0.5, 2.75] }}>
          <ambientLight intensity={0.3} />
          <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
          <Suspense fallback={null}>
            <Shoe />
            <Environment files="royal_esplanade_1k.hdr" />
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.3} width={1} height={1} blur={2} far={1} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}