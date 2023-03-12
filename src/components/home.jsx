import { useOutletContext } from 'react-router-dom';
import blue from '../images/profile-blue.jpg';
import black from '../images/profile-black.jpg';

const Home = () => {
  const [mode] = useOutletContext();

  return (
    <div className={`home ${mode}`}>
      <div className="hello">
        <p>Hello,</p>
        <h1>Amanuel here.</h1>
        <p>I'm a Full Stack Web Developer</p>
      </div>
      <img alt="" src={mode === 'dark' ? black : blue} className="profile" />

      <div className="marquee">
        <h4>JavaScript</h4>
        <h4>React</h4>
        <h4>Redux</h4>
        <h4>Ruby</h4>
        <h4>Rails</h4>
      </div>

      <div className="cv-chat">
        <span>Résumé</span>
        <span>Questions</span>
      </div>
    </div>
  );
};

export default Home;
