import React from 'react';

const Ground = () => {
  return (
    <mesh receiveShadow position-y={ -0.4 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
        <planeGeometry />
        <meshStandardMaterial color="white" opacity={1} transparent/>
    </mesh>
  )
};

export default Ground;