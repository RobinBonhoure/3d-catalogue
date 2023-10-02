"use client"

import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber"
import { Perf } from 'r3f-perf'
import { Environment, useProgress, ContactShadows } from "@react-three/drei"

import Picker from '../components/picker'
import Loader from '../components/loader'
import Model from '../components/model'
import Bike from '../components/bike'
import Ground from '../components/ground'
import UpDown from '../components/updown'


export default function App() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <>
      <div className="canvas-container">
        <Loader progress={progress} />
        <Picker />
        <Canvas shadows camera={{ position: [0, 1, 2] }}>
          {/* <Perf position="top-left" /> */}
          <directionalLight castShadow position={[10, 20, 10]} intensity={1.5} shadow-normalBias={0.04} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={false}>
            {/* <Model /> */}
            <Bike />
          </Suspense>
          {/* <Ground /> */}
          {/* <ContactShadows position={[0, -0.4, 0]} opacity={1} scale={10} blur={5} far={2} resolution={256} color="#000000" /> */}
          <Environment files="royal_esplanade_1k.hdr" />
        </Canvas>
      </div>
    </>
  )
}