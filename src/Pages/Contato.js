import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineRollback} from 'react-icons/ai'
import Forms from "../Components/Forms.js";
import Fade from 'react-reveal/Fade'
import developer from '../Assets/piccoding.svg'
import manWorking from '../Assets/cara trabalhando.png'

function Contato() {
  return (
    <div>
      <header className="flex justify-around w-full items-center h-28 border-2 border-b-gray-200">
        <div>
          <h1 className="text-4xl  transition duration-300  font-semibold">
            <Link to="/">
              <a href="Home" className="text-[#141C3A] font-semibold">
                RD
              </a>
            </Link>
          </h1>
        </div>
        <div>
          <Link to="/">
            <a
              href="Home"
              className="text-2xl text-[#141C3A] hover:text-fuchsia-500 font-bold flex justify-center items-center"
            >
              Voltar <AiOutlineRollback className="text-5xl pl-4"/>
            </a>
          </Link>
        </div>
      </header>
      <div className="w-full flex justify-center items-center -mt-10">
        <img src={developer} width={"100px"} alt="logo"/>
      </div>
        <section className="w-full h-screen flex justify-center mt-10 justify-around flex-wrap">
         <Fade bottom cascade>
              <div className="text-center w-96">
                <h2 className="text-2xl mb-6">Complete os campos ao lado para entrar em contato !</h2>
                <p className="text-xl text-gray-400 font-extralight">Responderei o mais breve possível.</p>
                <img src={manWorking} alt='Cara trabalhando' className="mt-4"/>
              </div>
              <Forms/>
         </Fade>
        </section>
    </div>
  );
}

export default Contato;
