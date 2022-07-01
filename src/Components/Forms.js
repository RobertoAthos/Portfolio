import React, { useRef} from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function Forms() {





  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("portfolio-gmail","portfolio",form.current,"kc7ft4MqMDkvUdoFF")
    .then(
        (result) => {
          alert("Mensagem enviada com sucesso !");
        },
        (error) => {
          alert(error.text);
        }
      );
  };


  return (    
        <>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col '>
          <label className='text-blue-700 mb-4 text-xl'>{t('Name')}</label>
          <input type="text" name="user_name" className= 'w-80 lg:w-90  p-4 shadow-xl border-2 border-blue-300 outline-none rounded-2xl' />
          <label className='text-blue-700 mb-4 mt-4 text-xl'>{t('Email')}</label>
          <input type="email" name="user_email" className= 'w-80 lg:w-90  p-4 shadow-xl border-2 border-blue-300 outline-none rounded-2xl' />
          <label className='text-blue-700 mb-4 mt-4 text-xl'>{t('Message')}</label>
          <textarea name="message" rols={10} cols="30" className='w-80 lg:w-90 p-4 shadow-xl border-2 mb-6 h-32 border-blue-300 outline-none rounded-2xl' />
          <input type="submit" value={t('SendMsg')}  className=' w-80 lg:w-90 p-4 shadow-xl text-white cursor-pointer bg-blue-700 outline-none hover:bg-blue-800 trasition duration-300 rounded-2xl text-2xl'/>
     </form>
     </>  
  );
}

export default Forms;
