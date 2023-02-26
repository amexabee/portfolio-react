import { useState } from 'react';
import { Outlet } from 'react-router-dom';
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
            <a>My Logo</a>
          </li>
          <li>
            <a>Home</a>
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
