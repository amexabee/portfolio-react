import { useOutletContext, Link } from 'react-router-dom';
import blue from '../images/profile-blue.jpg';
import black from '../images/profile-black.jpg';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Home = () => {
  const [mode, handleClick] = useOutletContext();
  const pic = mode === 'dark' ? black : blue;
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(pic);

  return (
    <div className={`home ${mode}`}>
      <div className="welcome">
        <div className="hello">
          <h5>Hello,</h5>
          <h1>Amanuel here.</h1>
          <h4>Full-Stack Web Developer</h4>
        </div>
        <img
          alt=""
          src={mode === 'dark' ? black : blue}
          className="profile"
          style={{ opacity: 0 }}
        />
      </div>
      <div style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
        <Canvas>
          <OrbitControls />
          <mesh
            position={[1.5, 0.9, 0]}
            scale={[2, 2, 2]}
            onClick={handleClick}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Stars />
        </Canvas>
      </div>

      <div className="resume-chat">
        <span className={`hover${mode}`}>
          <Link to="../main">Explore</Link>
        </span>
      </div>
    </div>
  );
};

export default Home;

/*
    <div className="marquee">
        <h4>JavaScript</h4>
        <h4>React</h4>
        <h4>Redux</h4>
        <h4>Ruby</h4>
        <h4>Rails</h4>
        <h4>
          <img src={rails} className="rails" alt="rails" />
        </h4>
      </div>

    const onButtonClick = () => {
    fetch('Resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      });
    });
  };


    <span onClick={onButtonClick} className={`download hover${mode}`}>
      Resume
    </span>
    */
