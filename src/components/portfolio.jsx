import { useOutletContext, Link } from 'react-router-dom';
import getPosts, { getProjects } from './projects';

const Portfolio = () => {
  const [mode] = useOutletContext();

  const posts = getPosts();
  const projects = getProjects();

  return (
    <div className={`portfolio ${mode}`}>
      <div>
        <h3 className="recent">My Recent Works</h3>
        <div className="projects">
          {projects.map((project) => (
            <Link to={project.to}>
              <div
                key={project.label}
                className={`project ${mode} hover${mode}`}
              >
                <h3>{project.label}</h3>
                <p>Built with: {project.built}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="row">
        {posts.map((post) => (
          <div key={post.name} className="card">
            <img src={post.name} alt={post} />
            <span>
              <Link to={post.github}>
                <i className="fa fa-code" />
              </Link>
            </span>
            <span>
              <Link to={post.link}>
                <i className="fa fa-external-link" />
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
