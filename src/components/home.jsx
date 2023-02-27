import { useOutletContext } from 'react-router-dom';
import blue from '../images/profile-blue.jpg';
import black from '../images/profile-black.jpg';

const Home = () => {
  const [night] = useOutletContext();
  let mode = 'home light';
  if (night) mode = 'home dark';
  return (
    <div className={mode}>
      <div className="hello">
        <p>Hello,</p>
        <h1>Amanuel here.</h1>
        <p>I'm a Full Stack Web Developer</p>
      </div>
      <img alt="" src={night ? black : blue} className="profile" />

      <div className="marquee">
        <h4>JavaScript</h4>
        <h4>React</h4>
        <h4>Redux</h4>
        <h4>Ruby</h4>
        <h4>Rails</h4>
      </div>

      <div className="cv-chat">
        <span>My CV</span>
        <span>Questions</span>
      </div>
      <div className="connect">
        <ul>
          <li>
            <a className="logo" href="https://github.com/amexabee">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="logo"
              href="https://www.linkedin.com/in/amanuel-galema"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a className="logo" href="https://angel.co/u/amauel-galema">
              <i className="fa fa-angellist"></i>
            </a>
          </li>
          <li>
            <a className="logo" href="https://twitter.com/i_amanuel">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a className="logo" href="https://medium.com/@amexabee">
              <i className="fa fa-medium"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
