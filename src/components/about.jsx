import { useOutletContext } from 'react-router-dom';
import js from '../images/langs/js.png';
import react from '../images/langs/react.svg';
import redux from '../images/langs/redux.svg';
import ruby from '../images/langs/ruby.svg';
import rails from '../images/langs/rails.png';
import postgres from '../images/langs/postgres.svg';

const About = () => {
  const [mode] = useOutletContext();

  return (
    <div className={`about ${mode}`}>
      <div className="lang-container">
        <h3>About Me</h3>
        <div className="front">
          <h4>Front End</h4>
          <div className="front-item">
            <img src={js} className="js" alt="js" />
            <p>JavaScript</p>
          </div>
          <div className="front-item">
            <img src={react} className="react" alt="react" />
            <p>React</p>
          </div>
          <div className="front-item">
            <img src={redux} className="redux" alt="redux" />
            <p>Redux</p>
          </div>
        </div>
        <div className="back">
          <h4>Back End</h4>
          <div className="back-item">
            <img src={ruby} className="ruby" alt="ruby" />
            <p>Ruby</p>
          </div>
          <div className="back-item">
            <img src={rails} className="ruby" alt="rails" />
            <p>Rails</p>
          </div>
          <div className="back-item">
            <img src={postgres} className="postgres" alt="postgres" />
            <p>Postgres</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <h5>Pair-programming</h5>
          <h6>Worldwide</h6>
          <p>
            Worked on ample projects with people from Americas, Europe, Asia and
            Africa.
          </p>
        </div>
        <div className="card">
          <h5>Remote working</h5>
          <h6>Git and GitHub</h6>
          <p>
            Experienced in version control and have held hundreds of zoom
            mettings.
          </p>
        </div>
        <div className="card">
          <h5>Experience</h5>
          <h6>1+ year working</h6>
          <p>
            Completed several projects working in React, Javascript, Ruby and
            Rails.
          </p>
        </div>
        <div className="card">
          <h5>Projects</h5>
          <h6>20+ and couting</h6>
          <p>
            Bookstore app, Blog App, Space Travellers Hub, Movie Hub and Todo
            List.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
