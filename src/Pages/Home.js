import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { FaBars } from "react-icons/fa";
import Cards from "../Components/Cards";
import designerImg from "../Assets/web-design.png";
import frontImg from "../Assets/web-programming.png";
import backImg from "../Assets/binary-code.png";
import githubImg from "../Assets/github.png";
import linkedinrImg from "../Assets/linkedin.png";
import developer from "../Assets/piccoding.svg";
import { useTranslation } from "react-i18next";
import LngSwitcher from "../Components/LngSwitcher";

function Home() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { t } = useTranslation();

  return (
    <div>
      <header className="flex justify-around items-center h-28 bg-[#141C3A] text-white sticky top-0 z-10">
        <Slide bottom cascade>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Roberto Developer
            </h1>
          </div>
          <div className="hidden md:flex items-center">
            <LngSwitcher />
            <a
              href="#projetos"
              className="p-2 mr-6 text-xl hover:text-fuchsia-500  transition duration-300"
            >
              {t("project")}
            </a>
            <Link to="/Contato">
              <button className="w-56 p-2 rounded-2xl border-solid border-2 border-fuchsia-500  hover:bg-fuchsia-500 hover:text-white transition duration-300 ">
                <a href="Contato" className="p-2 text-xl ">
                  {t("SayHello")}
                </a>
              </button>
            </Link>
          </div>
        </Slide>

        <div
          onClick={handleClick}
          className="md:hidden z-10 cursor-pointer text-4xl"
        >
          <FaBars />
        </div>

        <nav
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#141C3A] flex flex-col justify-center items-center"
          }
        >
          <ul className="text-center w-full">
            <li className="p-4 w-full border-b-white text-4xl">
              <a href="#projetos">{t("project")}</a>
            </li>
            <li className="p-4 w-full border-b-white text-4xl">
              <Link to="/Contato">
                <a href="Contato">{t("SayHello")}</a>
              </Link>
            </li>
            <li className="p-4 w-full border-b-white text-4xl">
              <a href="#">Whatsapp</a>
            </li>
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
              {t("MainDesc")}
            </p>

            <div className="w-full flex justify-center items-center mt-9">
              <img src={developer} width={"300px"} />
            </div>
          </Fade>
        </div>
      </section>

      <section className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 p-6 mt-40">
        <div className="text-center pt-20 w-full max-w-screen-lg m-auto leading-relaxed ">
          <Fade bottom cascade>
            <h3 className="text-3xl md:text-4xl text-white font-bold mb-6">
              {t("AboutTxt")}
            </h3>
            <p className="text-xl md:text-2xl max-w-screen-md m-auto text-white font-extralight mb-48">
              {t("AboutTxt2")}
            </p>
          </Fade>
        </div>
      </section>

      <div className="w-full max-w-screen-xl flex justify-around items-center m-auto flex-wrap -mt-36">
        <Slide bottom cascade>
          <Cards
            img={designerImg}
            title="Designer"
            desc={t("CardDesc1")}
            title2={t("CardTitle1")}
            desc2="UX, UI, Web, Mobile, Apps"
            title3={t("CardTitle2")}
            desc3="Figma"
            desc3_2="Photoshop"
            desc3_3="Adobe xd"
          />
        </Slide>
        <Slide bottom cascade>
          <Cards
            img={frontImg}
            title="Frond-End Developer"
            desc={t("CardDesc2")}
            title2={t("CardTitle3")}
            desc2="Html, Css, Javascript, React"
            title3={t("CardTitle2")}
            desc3="Tailwind"
            desc3_2="Bootstrap"
            desc3_3="Styled Components"
            desc3_4="Github"
          />
        </Slide>
        <Slide bottom cascade>
          <Cards
            img={backImg}
            title="Back-End Developer"
            desc={t("CardDesc3")}
            title2={t("CardTitle3")}
            desc2="Node e Firebase"
            title3={t("CardTitle2")}
            desc3="Express"
            desc3_2="Template EJS"
            desc3_3="JWT"
          />
        </Slide>
      </div>
      <Link to="/Certificados" className="w-full text-center flex justify-center items-center mt-6">
              <a href="Certificados" className="text-blue-700 underline text-3xl hover:text-blue-800">{t('Certificates')}</a>
      </Link>
      <section
        className="w-full h-full mt-40 border-b-2 border-gray-300"
        id="projetos"
      >
        <div className="w-full max-w-screen-xl m-auto">
          <Fade bottom cascade>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl text-[#141C3A] font-bold mb-6">
                {t("MyRecentWork")}
              </h2>
              <p className="text-xl md:text-2xl font-extralight">
                {t("MyRecentWorkTxt")}
                <span className="text-blue-700 hover:underline font-bold">
                  <a href="#">{t("ClickHere")}</a>
                </span>
              </p>
            </div>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-6" md:grid-cols-3 gap-4 mt-10 content-center justify-items-center  '>
            <Slide bottom cascade>
              <div className="w-72 md:w-96 bg-blue-700  rounded-3xl h-60 flex justify-center items-center  shadow-2xl">
                <p className="text-2xl text-white">Em Breve...</p>
              </div>
              <div className="w-72 md:w-96 bg-blue-700  rounded-3xl h-60 flex justify-center items-center shadow-2xl">
                <p className="text-2xl text-white">Em Breve...</p>
              </div>
              <div className="w-72 md:w-96 bg-blue-700 rounded-3xl h-60 flex justify-center items-center shadow-2xl">
                <p className="text-2xl text-white">Em Breve...</p>
              </div>
              <div className="w-72 md:w-96 bg-blue-700  rounded-3xl h-60 flex justify-center items-center shadow-2xl">
                <p className="text-2xl text-white">Em Breve...</p>
              </div>
              <div className="w-72 md:w-96 bg-blue-700  rounded-3xl h-60 flex justify-center items-center shadow-2xl">
                <p className="text-2xl text-white">Em Breve...</p>
              </div>
              <div className="w-72 md:w-96 bg-blue-700  rounded-3xl h-60 flex justify-center items-center shadow-2xl">
                <p className="text-2xl text-white">Em Breve...</p>
              </div>
            </Slide>
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <button className="border-solid border-2 border-[#161b22] text-[#161b22] p-4 rounded-md w-72 hover:bg-[#161b22] hover:text-white mb-20">
              <a href="#">{t("ViewMore")}</a>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-full mt-40 ">
        <Fade bottom cascade>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#141C3A]">
              {t("Interested")}
            </h2>
            <p className="text-2xl font-extralight">{t("InterestedTxt")}</p>
            <div className="w-full flex justify-center items-center mt-8">
              <button className="border-solid border-2 border-blue-700 text-blue-700 font-bold p-4 rounded-xl hover:bg-blue-700 hover:text-white w-72 mb-20">
                <Link to="/Contato">
                  <a href="Contato">{t('StartConversation')}</a>
                </Link>
              </button>
            </div>
          </div>
        </Fade>
      </section>

      <footer className="h-screnn md:h-[80vh] w-full bg-gradient-to-r from-blue-500 to-blue-700 mt-20 ">
        <div className="h-72 md:h-36  w-full flex flex-wrap justify-around items-center bg-[#141C3A] p-6 text-white shadow-2xl ">
          <div>
            <h3 className="text-4xl font-bold">{t("StartNewProject")}</h3>
          </div>
          <div>
            <p className="text-xl max-w-md m-auto text-center">
              {t("StartNewProjectTxt")}
            </p>
          </div>
          <div>
            <button className="border-solid border-2 border-fuchsia-500 p-4 rounded-md w-72 ">
              <Link to="/Contato">
                <a
                  href="Contato"
                  className="text-2xl font-bold hover:underline"
                >
                  {t('Letsgo')}
                </a>
              </Link>
            </button>
          </div>
        </div>
        <h2 className="mt-20 text-center text-white text-2xl">
          {t("Living&Learning")}
        </h2>
        <div className="flex w-full justify-center mt-6">
          <a href="#">
            <img src={linkedinrImg} alt="linkedin logo" className="pr-4" />
          </a>
          <a href="#">
            <img
              src={githubImg}
              alt="github logo"
              className="bg-white rounded-full"
            />
          </a>
        </div>

        <p className="text-center text-white mt-10">Roberto Athos 2022</p>
        <p className="text-center text-white ">
          Email: robertoathosmatosreis@gmail.com
        </p>
        <p className="text-center text-white">Whatsapp: (73) 9 9933-5493</p>
      </footer>
    </div>
  );
}

export default Home;
