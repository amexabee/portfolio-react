import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import NavBar from './navBar';

const Main = () => {
  return (
    <div>
      <NavBar />
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
