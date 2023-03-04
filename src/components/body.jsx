import { useState } from 'react';
import Footer from './footer';
import NavBar from './navBar';
import { Outlet } from 'react-router-dom';
const Body = () => {
  const [night, setNight] = useState(false);

  const handleClick = () => {
    let value = night ? false : true;
    setNight(value);
  };

  return (
    <>
      <NavBar night={night} handleClick={handleClick} />
      <Outlet context={[night]} />
      <Footer night={night} />
    </>
  );
};

export default Body;
