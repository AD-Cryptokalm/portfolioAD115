import "./Contact.scss";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  // Utilisation de emailJs pour envoi de messsage
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vypntos",
        "template_eqq9ftt",
        form.current,
        "nR5LF8xlXCnFftOey"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          <span className="letter01">C</span>
          <span className="letter02">o</span>
          <span className="letter03">n</span>
          <span className="letter04">t</span>
          <span className="letter05">a</span>
          <span className="letter06">c</span>
          <span className="letter07">t</span>
        </h2>
        <div className="contact-card">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" className="contact-btn" value="Envoyer" />
          </form>
          <div className="contact-reseaux">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
