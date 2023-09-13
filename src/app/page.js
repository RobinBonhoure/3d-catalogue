"use client"

import React, { useRef, useEffect, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import { setCurrent, setItemColor } from '../redux/appSlice';
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { useDrag } from 'react-use-gesture';
import { HexColorPicker } from "react-colorful"
import { useSelector, useDispatch } from 'react-redux';

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t
}



function Shoe() {
  const ref = useRef()
  const [hovered, set] = useState(null)
  let dragRotation = { x: 0, y: 0 }
  const dispatch = useDispatch();


  // Access the colors using useSelector if you're using Redux
  // const lacesColor = useSelector((state) => state.app.items.laces);


  const { nodes, materials } = useGLTF("shoe-draco.glb")


  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = lerp(ref.current.rotation.x, Math.cos(t / 4) / 8 + dragRotation.x, 0.1)
    ref.current.rotation.y = lerp(ref.current.rotation.y, Math.sin(t / 4) / 8 + dragRotation.y, 0.1)
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    // console.log(lacesColor)
  })

  // Enable drag interaction using react-use-gesture
  const dragBind = useDrag(({ offset: [x, y] }) => {
    // Rotate the object based on drag movement
    dragRotation.x = y / 100;
    dragRotation.y = x / 100;
  });

  // const lacesColor = useSelector((state) => state.app.items.laces);

  // useEffect(() => {
  //   // Update the color of the laces material when lacesColor changes
  //   materials.laces.color.set(lacesColor);
  // }, [lacesColor, materials.laces]);

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group
      ref={ref}
      dispose={null}
      {...dragBind()}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (dispatch(setCurrent(null)))}
      onPointerDown={(e) => (e.stopPropagation(), dispatch(setCurrent(e.object.material.name)))}
    >
      {/* material-color={useSelector((state) => state.app.items.laces)} */}
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={useSelector((state) => state.app.items.laces)}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

function Picker() {
  const dispatch = useDispatch();
  const target = useSelector((state) => state.app.current);
  // console.log(useSelector((state) => state.app.items[target]))
  return (
    <div style={{ display: target ? "block" : "none" }}>
      <HexColorPicker className="picker" color={useSelector((state) => state.app.items[target])} onChange={(color) => dispatch(setItemColor({ item: target, color: color })), console.log(useSelector((state) => state.app.items[target]))} />
      <h1>{target}</h1>
    </div>
  )
}

export default function App() {
  return (
    <>
      <div className="canvas-container">
        <Picker />
        <Canvas pixelratio={[1, 1.5]} camera={{ position: [0, 0, 2.75] }}>
          <ambientLight intensity={0.3} />
          <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
          <Suspense fallback={null}>
            <Shoe />
            {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} /> */}
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}