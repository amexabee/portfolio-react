import { Link } from 'react-router-dom';
import black from '../images/profile-black.jpg';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Home = () => {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(black);
  return (
    <div className="home dark">
      <div className="intro">
        Welcome to <br />
        my Universe
      </div>
      <div style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
        <Canvas>
          <OrbitControls />
          <mesh position={[1.5, 0.9, 0]} scale={[2, 2, 2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Stars />
        </Canvas>
      </div>

      <div className="explore">
        <span className="hoverdark">
          <Link to="../main">Explore</Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
