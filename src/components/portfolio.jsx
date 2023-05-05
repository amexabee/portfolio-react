import { Link } from 'react-router-dom';
import projects from './../constants/projects';

const Portfolio = () => {
  return (
    <div className="portfolio dark" id="recent">
      <h1 className="title">
        My Recent works <i className="fa fa-briefcase fa-2x" />
      </h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.name} className="card">
            <img src={project.name} alt={project} />
            <h1>{project.label}</h1>
            <p>{project.description}</p>
            <p>Built with: {project.tools}</p>
            <Link to={project.github}>
              <span>Github</span>
            </Link>
            <Link to={project.link}>
              <span>Live </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
