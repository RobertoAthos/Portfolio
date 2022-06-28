import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import {FaBars} from 'react-icons/fa'

function Home() {

    const[nav,setNav] = useState(false)

    const handleClick = ()=>{
      setNav(!nav)
    }

  return (
    <div>
      <header className="flex justify-around items-center h-28 bg-[#141C3A] text-white sticky top-0 z-10">
       <Slide bottom cascade>
       <div>
          <h1 className="text-3xl md:text-4xl font-semibold">
              Roberto Developer
          </h1>
        </div>
        <div className="hidden md:flex">
          <a
            href="#projetos"
            className="p-2 mr-6 text-xl hover:text-fuchsia-500  transition duration-300"
          >
            Projetos
          </a>
         <Link to='/Contato'> 
         <button className='w-56 p-2 rounded-2xl border-solid border-2 border-fuchsia-500  hover:bg-fuchsia-500 hover:text-white transition duration-300 '>
         <a
            href="Contato"
            className="p-2 text-xl "
          >
            Diga Olá
          </a>
         </button>
          </Link>
        </div>
       </Slide>
       <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-4xl">
              <FaBars/>
            </div>

            <nav className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#141C3A] flex flex-col justify-center items-center' }>
                <ul className="text-center">
                    <li className="mb-20 text-4xl"><a href="#projetos">Projetos</a></li>
                    <li className="mb-20 text-4xl"><Link to='/Contato'><a href="Contato">Diga Olá</a></Link></li>
                    <li className="mb-20 text-4xl"><a href="#">Whatsapp</a></li>
                </ul>
            </nav>
       
      </header>

      <section className="w-full h-full">
        <div className="w-full h-full text-center mt-20">
          <Fade bottom cascade>
          <h2 className="text-3xl md:text-5xl text-[#141C3A] font-bold mb-4">
            Junior Front End Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light ">
            Transformo sonhos em realidade com códigos.
          </p>
          
          <div className="w-full flex justify-center items-center mt-9">
            <img src="Assets/piccoding.svg" width={"300px"} />
          </div>
          </Fade>
        </div>
      </section>

      <section className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 p-6 mt-40">
        <div className="text-center pt-20 w-full max-w-screen-lg m-auto leading-relaxed ">
          <Fade bottom cascade>
          <h3 className="text-3xl md:text-4xl text-white font-bold mb-6">
            Olá, eu sou o Roberto. Prazer em conhece-lo(a).
          </h3>
          <p className="text-xl md:text-2xl text-white font-extralight  mb-48">
            Since beginning my journey as a freelance designer nearly 10 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
          </Fade>
        </div>
      </section>
      
      <div className="w-full max-w-screen-xl flex justify-around items-center m-auto flex-wrap -mt-36">
      <Slide bottom cascade>
        <div className="mb-10 w-96 md:w-96 text-center rounded-3xl border-solid border-2 border-gray-200 p-4 bg-white shadow-md">
          <div className="w-full flex justify-center items-center mt-6">
            <img src="Assets/web-design.png" />
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-6">Designer</h3>
            <p className="text-xl font-extralight">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-blue-700 text-xl mb-6">O que eu faço</h3>
            <p className="text-xl font-extralight">UX, UI, Web, Mobile, Apps</p>
          </div>
          <div className="mb-6">
            <h3 className="text-blue-700 text-xl mb-6">Design Tools</h3>
            <ul>
              <li className="text-xl font-extralight">Figma</li>
              <li className="text-xl font-extralight">Photoshop</li>
              <li className="text-xl font-extralight">Adobe xd</li>
            </ul>
          </div>
        </div>
        </Slide>
        <div className="mb-10 w-96 md:w-96 text-center p-4 border-solid border-2 border-gray-200 rounded-3xl  bg-white shadow-md ">
          <Slide bottom cascade>
          <div className="w-full flex justify-center items-center mt-6">
            <img src="Assets/web-programming.png" />
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-6">Front-end Developer</h3>
            <p className="text-xl font-extralight">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-blue-700 text-xl mb-6">Linguas que eu falo</h3>
            <p className="text-xl font-extralight">
              HTML, CSS, Javascript, React
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-blue-700 text-xl mb-6">Ferramentas</h3>
            <ul>
              <li className="text-xl font-extralight">Tailwind</li>
              <li className="text-xl font-extralight">Bootstrap</li>
              <li className="text-xl font-extralight">Styled Components</li>
              <li className="text-xl font-extralight">Github</li>
            </ul>
          </div>
          </Slide>
        </div>
       
        <div className="mb-10 w-96 md:w-96 text-center rounded-3xl border-solid border-2 border-gray-200 p-4 bg-white shadow-md ">
        <Slide bottom cascade>
          <div className="w-full flex justify-center items-center mt-6">
            <img src="Assets/binary-code.png" />
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-6">Backend Developer</h3>
            <p className="text-xl font-extralight">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-blue-700 text-xl mb-6">Linguas que eu falo</h3>
            <p className="text-xl font-extralight">Nodejs e Firebase </p>
          </div>
          <div className="mb-6">
            <h3 className="text-blue-700 text-xl mb-6">Ferramentas</h3>
            <ul>
              <li className="text-xl font-extralight">Express</li>
              <li className="text-xl font-extralight">Template EJS</li>
              <li className="text-xl font-extralight">JWT</li>
            </ul>
          </div>
          </Slide>
        </div>
      </div>
  
      <section className="w-full h-full mt-40 border-b-2 border-gray-300" id="projetos">
        <div className="w-full max-w-screen-xl m-auto">
          <Fade bottom cascade>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl text-[#141C3A] font-bold mb-6">
              Meus Trabalhos Recentes
            </h2>
            <p className="text-xl md:text-2xl font-extralight">
              Aqui está um pouco dos meus projetos que trabalhei recentemente.
              Quer ver mais?
              <span className="text-blue-700 hover:underline font-bold">
                <a href="#">Clique aqui</a>
              </span>
            </p>
          </div>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-6" md:grid-cols-3 gap-4 mt-10 content-center justify-items-center  '>
            <Slide bottom cascade>
            <div className="w-72 md: w-96bg-blue-300  rounded-3xl h-60 flex justify-center items-center  shadow-2xl">
              <p className="text-2xl text-white">Em Breve...</p>
            </div>
            <div className="w-72 md: w-96bg-blue-300  rounded-3xl h-60 flex justify-center items-center shadow-2xl">
              <p className="text-2xl text-white">Em Breve...</p>
            </div>
            <div className="w-72 md: w-96bg-blue-300 rounded-3xl h-60 flex justify-center items-center shadow-2xl">
              <p className="text-2xl text-white">Em Breve...</p>
            </div>
            <div className="w-72 md: w-96bg-blue-300  rounded-3xl h-60 flex justify-center items-center shadow-2xl">
              <p className="text-2xl text-white">Em Breve...</p>
            </div>
            <div className="w-72 md: w-96bg-blue-300  rounded-3xl h-60 flex justify-center items-center shadow-2xl">
              <p className="text-2xl text-white">Em Breve...</p>
            </div>
            <div className="w-72 md: w-96bg-blue-300  rounded-3xl h-60 flex justify-center items-center shadow-2xl">
              <p className="text-2xl text-white">Em Breve...</p>
            </div>
            </Slide>
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <button className="border-solid border-2 border-[#161b22] text-[#161b22] p-4 rounded-md w-72 hover:bg-[#161b22] hover:text-white mb-20">
              <a href="#">Ver Mais</a>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-full mt-40 ">
        <Fade bottom cascade>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#141C3A]">
            Interessado(a) ?
          </h2>
          <p className="text-2xl font-extralight">
            Estou sempre aberto para novas oportunidades de trabalho e
            parcerias.
          </p>
          <div className="w-full flex justify-center items-center mt-8">
            <button className="border-solid border-2 border-blue-700 text-blue-700 font-bold p-4 rounded-xl hover:bg-blue-700 hover:text-white w-72 mb-20">
              <Link to='/Contato'>
              <a href="Contato">Comerçar conversa</a>
              </Link>
            </button>
          </div>
        </div>
        </Fade>
      </section>

      <footer className="h-screnn md:h-[80vh] w-full bg-gradient-to-r from-blue-500 to-blue-700 mt-20 ">
        <div className="h-72 md:h-36  w-full flex flex-wrap justify-around items-center bg-[#141C3A] p-6 text-white shadow-2xl ">
          <div>
            <h3 className="text-4xl font-bold">Começar um Projeto</h3>
          </div>
          <div>
            <p className="text-xl max-w-md m-auto text-center">
              Interessado(a) em trabalharmos juntos? Devemos começar a
              conversar, eu pago o café.
            </p>
          </div>
          <div>
            <button className="border-solid border-2 border-fuchsia-500 p-4 rounded-md w-72 ">
           <Link  to='/Contato'>
           <a href="Contato" className="text-2xl font-bold hover:underline">
                Vamos lá
              </a>
           </Link>
            </button>
          </div>
        </div>
        <h2 className="mt-20 text-center text-white text-2xl">
          Vivendo e aprendendo
        </h2>
        <div className="flex w-full justify-center mt-6">
          <a href="#">
            <img
              src="Assets/linkedin.png"
              alt="linkedin logo"
              className="pr-4"
            />
          </a>
          <a href="#">
            <img
              src="Assets/github.png"
              alt="github logo"
              className="bg-white rounded-full"
            />
          </a>
        </div>

        <p className="text-center text-white mt-10">Roberto Athos 2022</p>
        <p className="text-center text-white ">Email: robertoathosmatosreis@gmail.com</p>
        <p className="text-center text-white">Whatsapp: (73) 9 9933-5493</p>
      </footer>
    </div>
  );
}

export default Home;
