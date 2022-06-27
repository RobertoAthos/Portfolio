import React from 'react'
import Fade from 'react-reveal/Fade'

function Forms() {

  return (
    <div>

          <form>
              <Fade bottom cascade>
              <div className='flex flex-col text-center '>
                    <input type={"text"} placeholder='Seu Nome' className='p-4 w-96 outline-none border-[#141C3A] border-2  mb-6'/>
                    <input type={"email"} placeholder='Seu Email' className='p-4 w-96 outline-none border-[#141C3A] border-2 mb-6'/>
                    <input type={"tel"} placeholder='Seu Número' className='p-4 w-96 outline-none border-[#141C3A] border-2 mb-6'/>
                    <textarea rows={5} cols={50} placeholder='escreva seu texto aqui' className='p-4 w-96 outline-none border-[#141C3A] border-2 mb-6'/>
              </div>
              </Fade>
          </form>
           <Fade bottom cascade>
           <div className='flex justify-center items-center'> <button className='bg-blue-700 p-4 rounded-xl font-bold text-xl w-96 text-white hover:bg-blue-500 transition duration-300'>Enviar</button></div>
           </Fade>

    </div>
  )
}

export default Forms