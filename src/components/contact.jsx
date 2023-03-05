import { useOutletContext } from 'react-router-dom';
import Joi from 'joi-browser';

const Contact = () => {
  const [mode] = useOutletContext();

  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
  };

  return (
    <div className={`contact ${mode}`}>
      <div>
        {/* <label for="name">Name</label> */}
        <input className={mode} type="text" id="name" placeholder="Full Name" />
      </div>
      <div>
        {/* <label for="email">Email address</label> */}
        <input
          className={mode}
          type="email"
          id="email"
          placeholder="Email Address"
        />
      </div>
      <div>
        {/* <label for="text">Example textarea</label> */}
        <textarea
          className={mode}
          id="text"
          rows="3"
          placeholder="Your Message"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
