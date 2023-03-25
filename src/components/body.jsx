import { useState } from 'react';
import Footer from './footer';
import NavBar from './navBar';
import { Outlet } from 'react-router-dom';
const Body = () => {
  const [night, setNight] = useState(true);

  const handleClick = () => {
    let value = night ? false : true;
    setNight(value);
  };

  const mode = night ? 'dark' : 'light';

  return (
    <div className="container">
      <NavBar night={night} handleClick={handleClick} />
      <Outlet context={[mode]} />
      <Footer night={night} />
    </div>
  );
};

export default Body;
