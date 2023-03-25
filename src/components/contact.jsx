import { useOutletContext } from 'react-router-dom';
import Joi from 'joi-browser';
import { useState } from 'react';

const Contact = () => {
  const [state, setState] = useState({
    data: { name: '', email: '', message: '' },
    errors: '',
  });
  const [mode] = useOutletContext();

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
    <div className={`contact ${mode}`}>
      <div className="details">
        <div className="email">
          <h3>Email Me:</h3>
          <p>amexabee@gmail.com</p>
        </div>
        <div className="contact-details">
          <h1>Contact Details</h1>
          <div>
            <h3>Email Address</h3>
            <p>amexabee@gmail.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+90 548 836 4664</p>
          </div>
          <div>
            <h3>Whatsapp</h3>
            <p>+90 548 836 4664</p>
          </div>
        </div>
      </div>
      <div className="message">
        <h3>Get In Touch</h3>
        <div>
          <input
            className={mode}
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
            className={mode}
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
            className={mode}
            onChange={handleChange}
            id="message"
            placeholder="Your Message"
            maxLength="280"
          ></textarea>
          {state.errors && (
            <div className="validation">{state.errors.message}</div>
          )}
        </div>
        <button className={mode} onClick={handleClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
