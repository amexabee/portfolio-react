import { useState } from 'react';
import { Outlet } from 'react-router-dom';
const Body = () => {
  const [night, setNight] = useState(true);

  const handleClick = () => {
    let value = night ? false : true;
    setNight(value);
  };

  const mode = night ? 'dark' : 'light';

  return <Outlet context={[mode, handleClick]} />;
};

export default Body;
