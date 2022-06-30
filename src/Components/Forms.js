import React,{useRef} from 'react'
import Fade from 'react-reveal/Fade'
import emailjs from '@emailjs/browser'

function Forms() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dxwy6le','template_ljvwago', form.current, 'kc7ft4MqMDkvUdoFF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div>

          <form ref={form} onSubmit={sendEmail}>
              <Fade bottom cascade>
              <div className='flex flex-col text-center '>
                    <input type={"text"} placeholder='Seu Nome' className='p-4 w-96 outline-none border-[#141C3A] border-2  mb-6' name='name'/>
                    <input type={"email"} placeholder='Seu Email' className='p-4 w-96 outline-none border-[#141C3A] border-2 mb-6' name='email'/>
                    <input type={"tel"} placeholder='Seu Número' className='p-4 w-96 outline-none border-[#141C3A] border-2 mb-6' name='number'/>
                    <textarea rows={5} cols={50} placeholder='escreva seu texto aqui' className='p-4 w-96 outline-none border-[#141C3A] border-2 mb-6' name='message'/>
              </div>
              </Fade>
              <Fade bottom cascade>
              <input className='bg-blue-700 p-4 rounded-xl font-bold text-xl w-96 text-center text-white hover:bg-blue-500 transition duration-300 outline-none cursor-pointer' value='send message'/>
              </Fade>
          </form>
           

    </div>
  )
}

export default Forms