import Tech from './tech';

const About = () => {
  return (
    <div className="about dark" id="about">
      <div className="hello">
        <div className="lolipop">
          <div className="round" />
          <div className="violet" />
        </div>

        <div>
          <h1>
            Hi, I'm <span style={{ color: '#915EFF' }}>Amanuel</span>
          </h1>
          <p>
            Full-Stack Web Developer equipped with the skills and expertise to
            build visually stunning user interfaces and web applications that
            are sure to captivate and engage your users.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="card">
          <h3>Pair-programming</h3>
          <i className="fa fa-globe fa-3x" />
          <h4>Worldwide</h4>
          <p>
            Worked on ample projects with people from Americas, Europe, Asia and
            Africa.
          </p>
          <br />
          <h3>Remote working</h3>
          <h4>Git and GitHub</h4>
          <p>
            Experienced in version control and have held hundreds of zoom
            meetings.
          </p>
        </div>
        <div className="card">
          <h3>
            Experience <i className="fa fa-star fa-2x" />
          </h3>
          <h4>1+ year working</h4>
          <p>
            Completed several projects working in React, Javascript, Ruby and
            Rails.
          </p>
          <br />
          <h3>Projects</h3>
          <h4>20+ and couting</h4>
          <p>
            Bookstore app, Blog App, Space Travellers Hub, Movie Hub and Todo
            List.
          </p>
        </div>
      </div>
      <div className="services">
        <h1 className="title">Services</h1>
        <div className="items">
          <div className="item">
            <h3 className="title">Front End Development</h3>
            <p className="description">
              Proficiency in modern front-end technologies, web design
              principles and user experience (UX) best practices, and ability to
              collaborate effectively with designers.
            </p>
          </div>
          <div className="item">
            <h3 className="title">Back End Development</h3>
            <p className="description">
              Develop robust and scalable server-side architectures, build and
              maintain efficient databases and data models, secure APIs for
              seamless communication with front-end applications.
            </p>
          </div>
        </div>
      </div>

      <Tech />
    </div>
  );
};

export default About;

{
  /* <div className="lang-container">
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
</div> */
}
