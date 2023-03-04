const Footer = ({ night }) => {
  let mode = 'connect light';
  if (night) mode = 'connect dark';
  return (
    <div className={mode}>
      <ul>
        <li>
          <a className="logo" href="https://github.com/amexabee">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a className="logo" href="https://www.linkedin.com/in/amanuel-galema">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a className="logo" href="https://angel.co/u/amauel-galema">
            <i className="fa fa-angellist"></i>
          </a>
        </li>
        <li>
          <a className="logo" href="https://twitter.com/i_amanuel">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a className="logo" href="https://medium.com/@amexabee">
            <i className="fa fa-medium"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
