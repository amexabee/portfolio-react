import { Link } from 'react-router-dom';
import Night from './night';

const NavBar = ({ night, handleClick }) => {
  let mode = 'light';
  if (night) mode = 'dark';

  const icons = [
    { to: 'home', name: 'Home', classes: 'home' },
    { to: 'portfolio', name: 'Portfolio', classes: 'briefcase' },
    { to: 'about', name: 'About', classes: 'user' },
    { to: 'contact', name: 'Contact', classes: 'address-book' },
  ];
  return (
    <>
      <nav className={mode}>
        <ul>
          {icons.map((icon) => (
            <li key={icon.to}>
              <Link className="link" to={icon.to}>
                <i className={`nav-icon fa fa-${icon.classes}`}>
                  <span className="icon-text">
                    <p>{icon.name}</p>
                  </span>
                </i>
              </Link>
            </li>
          ))}
          <li>
            <Night night={night} onClick={handleClick} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
