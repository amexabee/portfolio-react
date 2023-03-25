import { useOutletContext, Link } from 'react-router-dom';
import blue from '../images/profile-blue.jpg';
import black from '../images/profile-black.jpg';
import rails from '../images/langs/rails.png';

const Home = () => {
  const [mode] = useOutletContext();

  const onButtonClick = () => {
    fetch('Resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <div className={`home ${mode}`}>
      <div className="welcome">
        <div className="hello">
          <h5>Hello,</h5>
          <h1>Amanuel here.</h1>
          <h4>Full-Stack Web Developer</h4>
        </div>
        <img alt="" src={mode === 'dark' ? black : blue} className="profile" />
      </div>

      <div className="marquee">
        <h4>JavaScript</h4>
        <h4>React</h4>
        <h4>Redux</h4>
        <h4>Ruby</h4>
        <h4>Rails</h4>
        <h4>
          <img src={rails} className="rails" alt="rails" />
        </h4>
      </div>

      <div className="resume-chat">
        <span onClick={onButtonClick} className={`download hover${mode}`}>
          Resume
        </span>
        <span className={`hover${mode}`}>
          <Link to="../contact">Questions</Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
