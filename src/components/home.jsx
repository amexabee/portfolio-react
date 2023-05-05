import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import black from '../images/profile-black.jpg';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Home = () => {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(black);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="home dark">
      <div className="intro">
        {showMessage && <h1>WELCOME TO MY UNIVERSE</h1>}
      </div>
      <div className="canvas">
        <Canvas>
          <OrbitControls />
          <mesh position={[0, -1, -5]} scale={[2, 2, 2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Stars />
        </Canvas>
      </div>

      <div className="explore">
        {showMessage && (
          <span className="hoverdark">
            <Link to="../main">Explore</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
