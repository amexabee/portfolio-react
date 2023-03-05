import { useOutletContext } from 'react-router-dom';

const About = () => {
  const [night] = useOutletContext();
  let mode = 'about light';
  if (night) mode = 'about dark';
  return (
    <div className={mode}>
      <h3>About Me</h3>
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
