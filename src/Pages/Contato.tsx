import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineRollback} from 'react-icons/ai'

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
        <img src="Assets/piccoding.svg" width={"100px"} alt="logo"/>
      </div>
    </div>
  );
}

export default Contato;
