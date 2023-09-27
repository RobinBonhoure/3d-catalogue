"use client"

import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber"
import { Environment, useProgress } from "@react-three/drei"

import Picker from '../components/picker'
import Loader from '../components/loader'
import Model from '../components/model'
import Ground from '../components/ground'
import UpDown from '../components/updown'


export default function App() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <>
      <div className="canvas-container">
        <Loader progress={progress} />
        <Picker />
        <UpDown />
        <Canvas shadowMap shadows={true} pixelratio={[1, 1.5]} camera={{ position: [0, 1, 2] }}>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[0, 10, 0]}
            intensity={1.5}
            castShadow={true}
          />
          <Suspense fallback={false}>
            <Model castShadow={true} receiveShadow={true} />
          </Suspense>
          <Ground receiveShadow={true} />
          <Environment files="royal_esplanade_1k.hdr" />
        </Canvas>
      </div>
    </>
  )
}