import React from 'react';
import emailjs from 'emailjs-com';
import data from '../constants/data'
export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(data.api_id.smtp, data.api_id.template_id, e.target, data.api_id.smpt_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" /> 
      <label>Name</label>
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <textarea name="message" />
      <br/>
      <input type="submit" value="Send" />
    </form>
  );
}