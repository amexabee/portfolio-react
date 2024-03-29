import Joi from 'joi-browser';
import { useState } from 'react';
import socials from '../constants/socials';

const Contact = () => {
  const [state, setState] = useState({
    data: { name: '', email: '', message: '' },
    errors: '',
  });

  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
  };

  const validate = () => {
    const { error } = Joi.validate(state.data, schema, { abortEarly: false });

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const handleChange = ({ target: input }) => {
    const data = { ...state.data };
    data[input.id] = input.value;
    setState({ ...state, data });
  };

  const handleClick = () => {
    const errors = validate();
    setState({ ...state, errors: errors || {} });
    if (!errors) {
      alert(
        'Thank you for the message! \n\nThis is just a demo, please use the contact details to get in touch.'
      );
    } else console.log(errors);
  };

  return (
    <>
      <h1 className="title" id="contact">
        Contact Details <i className="fa fa-envelope fa-2x" />
      </h1>
      <div className="contact dark">
        <div className="details">
          <div>
            <h3>Email Address</h3>
            <p>amexabee@yahoo.com</p>
          </div>
          <ul className="socials">
            {socials.map((social) => (
              <li className="social" key={social.name}>
                <a href={social.link}>
                  <i className={'fa fa-3x ' + social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="message">
          <h3>Get In Touch</h3>
          <div>
            <input
              className="dark"
              onChange={handleChange}
              type="text"
              id="name"
              placeholder="Full Name"
            />
            {state.errors && (
              <div className="validation">{state.errors.name}</div>
            )}
          </div>
          <div>
            <input
              className="dark"
              onChange={handleChange}
              type="email"
              id="email"
              placeholder="Email Address"
            />
            {state.errors && (
              <div className="validation">{state.errors.email}</div>
            )}
          </div>
          <div>
            <textarea
              className="dark"
              onChange={handleChange}
              id="message"
              placeholder="Your Message"
              maxLength="280"
            ></textarea>
            {state.errors && (
              <div className="validation">{state.errors.message}</div>
            )}
          </div>
          <button className="dark" onClick={handleClick}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
