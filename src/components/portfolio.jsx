import { useOutletContext, Link } from 'react-router-dom';
import getPosts, { getProjects } from './projects';

const Portfolio = () => {
  const [mode] = useOutletContext();

  const posts = getPosts();
  const projects = getProjects();

  return (
    <>
      <div className={`portfolio ${mode}`}>
        <div>
          <h3 className="recent">My Recent Works</h3>
          <div className="projects">
            {projects.map((project) => (
              <Link key={project.label} to={project.to}>
                <div className={`project ${mode} hover${mode}`}>
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
        {/* <p className="visit">
          Please visit my <Link to="https://github.com/amexabee">GitHub</Link>{' '}
          to get the source code for these 10 projects and more others!
        </p> */}
      </div>
    </>
  );
};

export default Portfolio;
