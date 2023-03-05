import { Link } from 'react-router-dom';
import Night from './night';

const NavBar = ({ night, handleClick }) => {
  let mode = 'light';
  if (night) mode = 'dark';

  return (
    <>
      <nav className={mode}>
        <ul>
          <li>
            <Link className="link" to="home">
              <i className="fa fa-home nav-icon">
                <span className="icon-text">
                  <p>Home</p>
                </span>
              </i>
            </Link>
          </li>
          <li>
            <Link className="link" to="portfolio">
              <i className="fa fa-briefcase nav-icon">
                <span className="icon-text">
                  <p>Portfolio</p>
                </span>
              </i>
            </Link>
          </li>
          <li>
            <Link className="link" to="about">
              <i className="fa fa-user nav-icon">
                <span className="icon-text">
                  <p>About</p>
                </span>
              </i>
            </Link>
          </li>
          <li>
            <Link className="link" to="contact">
              <i className="fa fa-address-book nav-icon">
                <span className="icon-text">
                  <p>Contact</p>
                </span>
              </i>
            </Link>
          </li>
          <li>
            <Night night={night} onClick={handleClick} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
