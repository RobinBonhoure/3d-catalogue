import React from 'react';
import { Plane } from '@react-three/drei';

const Ground = () => {
  return (
    <Plane
      receiveShadow={true}
      // rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      args={[1000, 1000]}
    >
      <meshStandardMaterial attach="material" color="red" />
      <shadowMaterial attach="material" opacity={1} />
    </Plane>
  )
};

export default Ground;