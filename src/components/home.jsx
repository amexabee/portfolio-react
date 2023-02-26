import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const [night] = useOutletContext();
  let mode = 'home light';
  if (night) mode = 'home dark';
  return (
    <div className={mode}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
