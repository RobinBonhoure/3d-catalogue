import React from 'react';
import { MeshStandardMaterial } from 'three';

const Ground = ({ receiveShadow, ...props }) => {
  const groundMaterial = new MeshStandardMaterial({
    color: 'white', // You can change the color to your preference
    transparent: false, // Make the material transparent
    opacity: 1, // Adjust the opacity level as needed
    roughness: 0.7, // Adjust roughness as needed
    metalness: 0.2, // Adjust metalness as needed
  });

  return (
    <mesh
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, -0.5, 0]}
      receiveShadow={receiveShadow} // Ensure the ground receives shadows
      material={groundMaterial}
      {...props}
    >
      <planeBufferGeometry args={[100, 100]} /> {/* Adjust the size of the ground */}
    </mesh>
  );
};

export default Ground;