import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Ball from './ball';
import technologies from '../constants/technologies';

const Tech = () => {
  return (
    <div className="balls">
      <h1>Languages and Frameworks</h1>
      {technologies.map((technology) => (
        <div key={technology.name}>
          <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense>
              <OrbitControls enableZoom={false} />
              <Ball imgUrl={technology.icon} />
            </Suspense>

            <Preload all />
          </Canvas>
        </div>
      ))}
    </div>
  );
};

export default Tech;
