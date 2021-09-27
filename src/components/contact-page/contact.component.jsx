import React from "react";

import emailjs from "emailjs-com";

import "./contact.styles.scss";

const Mailingpage = () => {
  // const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u44j8wt",
        "template_2r5k9oh",
        e.target,
        "user_n89LI9gpraiCCFDf9ggaM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={sendEmail}>
          <div className="input-field">
            <input type="text" name="name" required="" />
            <label>Name</label>
          </div>
          <div className="input-field">
            <input type="email" name="email" required="" />
            <label>Email</label>
          </div>
          <div className="input-field">
            <input type="text" name="subject" required="" />
            <label>Subject</label>
          </div>
          <div className="input-field">
            <textarea rows="7" required=""></textarea>
            <label>Message</label>
          </div>
          <input className="btn" type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Mailingpage;
