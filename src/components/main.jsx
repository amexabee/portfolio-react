import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

const Main = () => {
  return (
    <div>
      <About />
      <Portfolio />
      <Contact />
      <p className="made">
        Made with <i className="fa fa-heart" /> by Amanuel Galema
      </p>
    </div>
  );
};

export default Main;
