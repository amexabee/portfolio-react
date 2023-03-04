import { useOutletContext } from 'react-router-dom';
const Portfolio = () => {
  const [night] = useOutletContext();
  let mode = 'light';
  if (night) mode = 'dark';
  return <div className={mode}>My Recent Works</div>;
};

export default Portfolio;
