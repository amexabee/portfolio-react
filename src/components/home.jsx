import { useOutletContext } from 'react-router-dom';
import blue from '../images/profile-blue.jpg';
import black from '../images/profile-black.jpg';
import react from '../images/react.svg';
import ruby from '../images/ruby.svg';
import js from '../images/js.png';
import rails from '../images/rails.png';

const Home = () => {
  const [mode] = useOutletContext();

  return (
    <div className={`home ${mode}`}>
      <div className="lang">
        <img src={react} className="react" alt="react" />
        <img src={ruby} className="ruby" alt="ruby" />
        <img src={js} className="js" alt="js" />
      </div>
      <div className="welcome">
        <div className="hello">
          <h5>Hello,</h5>
          <h1>Amanuel here.</h1>
          <p>
            I'm a software developer; I can help you build a product, feature,
            or website. <br />
            Check out my work and experience, and feel free to contact me if
            you're interested in working together.
          </p>
        </div>
        <img alt="" src={mode === 'dark' ? black : blue} className="profile" />
      </div>

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

      <div className="cv-chat">
        <span>Resume</span>
        <span>Questions</span>
      </div>
    </div>
  );
};

export default Home;
