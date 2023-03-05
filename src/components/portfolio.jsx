import { useOutletContext, Link } from 'react-router-dom';
import blog from '../images/thumbnails/blog.JPG';
import space from '../images/thumbnails/space.JPG';
import movies from '../images/thumbnails/movies.JPG';
import bookstore from '../images/thumbnails/bookstore.JPG';
const Portfolio = () => {
  const [night] = useOutletContext();
  let mode = 'portfolio light';
  if (night) mode = 'portfolio dark';
  const items = [
    {
      name: blog,
      github: 'https://github.com/amexabee/Capstone_js',
      link: 'https://amanuel-blog-post.netlify.app/',
    },
    {
      name: space,
      github: 'https://github.com/amexabee/spacex-react-redux',
      link: 'https://amanuel-space-travleres-hub.netlify.app/',
    },
    {
      name: movies,
      github: 'https://github.com/amexabee/metrics-webapp',
      link: 'https://amexabee.github.io/To-Do-List/dist/',
    },
    {
      name: bookstore,
      github: 'https://github.com/amexabee/bookstore',
      link: 'https://amexabee.github.io/bookstore/',
    },
  ];
  return (
    <div className={mode}>
      <h3>My Recent Works</h3>
      <div className="row">
        {items.map((item) => (
          <div className="card">
            <img src={item.name} alt={item} />
            <span>
              <Link to={item.github}>
                <i className="fa fa-code" />
              </Link>
            </span>
            <span>
              <Link to={item.link}>
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
