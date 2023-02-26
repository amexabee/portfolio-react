import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Night from './night';

const NavBar = () => {
  const [night, setNight] = useState(false);

  const handleClick = () => {
    let value = night ? false : true;
    setNight(value);
  };

  return (
    <>
      <h1>My Logo Home</h1>
      <span className={night ? 'switch night' : 'switch'} onClick={handleClick}>
        {/* <input type="checkbox" /> */}
        <Night night={night} />
      </span>

      <Outlet />
    </>
  );
};

export default NavBar;
