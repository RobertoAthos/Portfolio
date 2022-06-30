import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function Forms() {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio-gmail",
        "portfolio",
        form.current,
        "kc7ft4MqMDkvUdoFF"
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
    <Fade bottom cascade>
          
      <form ref={form} onSubmit={sendEmail} className='flex flex-col '>
          <label className='text-blue-700 text-2xl mb-4'>Name</label>
          <input type="text" name="user_name" className=' p-4 shadow-xl w-56' />
          <label className='text-blue-700 text-2xl mb-4'>Email</label>
          <input type="email" name="user_email" className=' p-4 shadow-xl w-56' />
          <label className='text-blue-700 text-2xl mb-4'>Message</label>
          <textarea name="message" className='p-4 shadow-xl w-56' />
          <input type="submit" value="Send"  className=' p-4 shadow-xl cursor-pointer w-56 bg-blue-700'/>
     </form>
    </Fade>
  );
}

export default Forms;
