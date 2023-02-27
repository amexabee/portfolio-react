import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Night from './night';

const NavBar = () => {
  const [night, setNight] = useState(false);

  let mode = 'light';
  if (night) mode = 'dark';

  const handleClick = () => {
    let value = night ? false : true;
    setNight(value);
  };

  return (
    <>
      <nav className={mode}>
        <ul>
          <li>
            <Link className="link" to="/">
              <i className="fa fa-home">
                <span className="home-text">
                  <p>Home</p>
                </span>
              </i>
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              <i className="fa fa-user">
                <span className="home-text">
                  <p>About</p>
                </span>
              </i>
            </Link>
          </li>
          <li>
            <Night night={night} onClick={handleClick} />
          </li>
        </ul>
      </nav>

      <Outlet context={[night]} />
    </>
  );
};

export default NavBar;
