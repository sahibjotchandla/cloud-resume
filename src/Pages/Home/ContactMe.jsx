import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ypps7ld', 'template_vreo39m', form.current, {
        publicKey: '_hF1u-43IJKBPME0x',
      })
      .then(
        () => {
          setMessageSent(true);
          setErrorMessage('');
          // Clear input fields
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhoneNumber('');
          setMessage('');
        },
        (error) => {
          setMessageSent(false);
          setErrorMessage('Failed to send message. Please try again later.');
        },
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">Get in touch with me for further inquires!</p>
      </div>
      {messageSent ? (
        <div className="success-message">
          <p>Message has been sent successfully!</p>
        </div>
      ) : null}
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_fname"
              id="user_fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_lname"
              id="user_lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="user_email"
              id="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number (optional)</span>
            <input
              type="number"
              className="contact--input text-md"
              name="user_phone"
              id="user_phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type Here..."
          />
        </label>
        <div>
          <button className="btn btn-primary-contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
