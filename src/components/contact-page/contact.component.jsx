import React from "react";
import "./contact.styles.scss";

const Mailingpage = () => (
  <div className="contact">
    <div className="contact-menu">
      <div className="contact-item">
        <div>
          <h1>Contact Us</h1>
          <form>
            <label htmlFor="">Name</label>
            <input type="text" name="name" />

            <label htmlFor="">Email</label>
            <input type="email" name="user_email" />

            <label htmlFor="">Message</label>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Mailingpage;
