import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <ul>
        <li className="">
          <a className="" href="#about">
            About
          </a>
        </li>
        <li className="">
          <a className="" href="#recent">
            Recent Works
          </a>
        </li>
        <li className="">
          <a className="" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
