import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { STLLoader } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Floorplan = () => {
  const [geometry, setGeometry] = useState(null);

  useEffect(() => {
    const loader = new STLLoader();
    loader.load('/floorplan(resurface).stl', (loadedGeometry) => {
      setGeometry(loadedGeometry);
    });
  }, []);

  return (
    <Canvas className="myCanvas">
      <color attach="background" args={['white']} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {geometry && (
        <mesh geometry={geometry}>
          <meshStandardMaterial color="darkgrey" roughness={0.5} metalness={0.1}/>
        </mesh>
      )}
      <OrbitControls />
    </Canvas>
  );
};

export default Floorplan;
