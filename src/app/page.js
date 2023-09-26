"use client"

import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment } from "@react-three/drei"

import Picker from '../components/picker'
import Model from '../components/model'
import Ground from '../components/ground'
import UpDown from '../components/updown'


export default function App() {
  return (
    <>
      <div className="canvas-container">
        <Picker />
        <UpDown />
        <Canvas shadows pixelratio={[1, 1.5]} camera={{ position: [0, 1, 2] }}>
          <ambientLight intensity={0.3} />
          <spotLight castShadow intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
          <Suspense fallback={null}>
            <Model castShadow receiveShadow />
            {/* <Ground /> */}
            <Environment files="royal_esplanade_1k.hdr" />
            {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.5, 0]} opacity={0.3} width={1} height={1} blur={2} far={1} /> */}
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}