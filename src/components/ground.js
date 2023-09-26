import React from 'react';
import { MeshStandardMaterial } from 'three';

const Ground = () => {
  const groundMaterial = new MeshStandardMaterial({
    color: 'white', // You can change the color to your preference
    transparent: false, // Make the material transparent
    opacity: 1, // Adjust the opacity level as needed
    roughness: 0.7, // Adjust roughness as needed
    metalness: 0.2, // Adjust metalness as needed
  });
  return (
    <mesh
      material={groundMaterial}
      position={[0, -1, 0]}
      receiveShadow
      rotation={[-0.5 * Math.PI, 0, 0]}
    >
      <planeGeometry args={[5000, 5000, 1, 1]} />
    </mesh>
  )
};

export default Ground;