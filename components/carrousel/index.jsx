"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Depoiments = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    

  };
  return (
    <Slider {...settings} className="w-full h-full overflow-x-hidden">
      <div className="w-full   bg-cover bg-center bg-no-repeat h-full  mx-auto py-10 flex flex-col gap-5 ">
        <div className="w-full min-h-[500px] md:max-w-[70%] h-full mx-auto flex gap-4 items-center bg-white bg-opacity-55 px-4 py-4">
          <div className="hidden md:w-[20%] h-80 md:flex items-center justify-center">
            <img
              src="/bio.png"
              alt="Perfil"
              className="w-60 h-60 object-fill rounded-full"
            />
          </div>
          <div className="w-full md:w-[80%] flex flex-col gap-2 ">
            <p className="text-black">
              “Como profissional de harmonização, sempre me preocupei com
              possíveis problemas legais. Os documentos elaborados por
              especialistas foi a solução que eu precisava. Resolveu todas as
              minhas preocupações e me permitiu focar totalmente no meu
              trabalho.
            </p>
            <span className="text-black font-bold">
              Dra. Patrícia Brandt Schefer
            </span>
            <span className="font-bold text-black">
              BIOMÉDICA ESPECIALISTA EM HARMONIZAÇÃO FACIAL
            </span>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              className="w-6 h-6 text-[#b98e0b]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#b98e0b]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#b98e0b]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#b98e0b]" 
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#b98e0b]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full   bg-cover bg-center bg-no-repeat h-full  mx-auto py-10 flex flex-col gap-5 ">
      <div className="w-full min-h-[500px]  md:max-w-[70%] h-full mx-auto flex gap-4 items-center bg-white bg-opacity-55 px-4 py-4">
          <div className="hidden md:w-[20%] h-80 md:flex items-center justify-center">
            <img
              src="/den.png"
              alt="Perfil"
              className="w-60 h-60 object-fill rounded-full"
            />
          </div>
          <div className="w-full md:w-[80%]   bg-cover bg-center bg-no-repeat h-full  mx-auto py-10 flex flex-col gap-5 ">
            <div className="w-full flex flex-col gap-2 ">
              <p className="text-black">
                “Como profissional de harmonização, sempre me preocupei com
                possíveis problemas legais. Os documentos elaborados por
                especialistas foi a solução que eu precisava. Resolveu todas as
                minhas preocupações e me permitiu focar totalmente no meu
                trabalho.
              </p>
              <span className="text-black font-bold">Dra. Marina Madruga</span>
              <span className="font-bold text-black">
                DOUTORA E MESTRE EM ODONTOLOGIA
              </span>
              <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              className="w-6 h-6 text-[#b98e0b]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#b98e0b]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#b98e0b]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#b98e0b]" 
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#b98e0b]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Depoiments;

/*
 <div className="w-full   bg-cover bg-center bg-no-repeat h-full  mx-auto py-10 flex flex-col gap-5 ">
          <div className="max-w-[70%] h-96  mx-auto flex gap-4 items-center bg-blue-700 bg-opacity-30 px-4 py-4">
            <div className="w-[33%] h-full">
              <img
                src="/bio.png"
                alt="Perfil"
                className="w-full h-full object-fill rounded-full"
              />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p className="text-white">
                “Como profissional de harmonização, sempre me preocupei com
                possíveis problemas legais. Os documentos elaborados por
                especialistas foi a solução que eu precisava. Resolveu todas as
                minhas preocupações e me permitiu focar totalmente no meu
                trabalho.
              </p>
              <span className="text-white font-bold">
                Dra. Patrícia Brandt Schefer
              </span>
              <span className="font-bold text-white">
                BIOMÉDICA ESPECIALISTA EM HARMONIZAÇÃO FACIAL
              </span>
            </div>
          </div>
          <div className="max-w-[70%]  h-96 mx-auto flex flex-row-reverse gap-4 items-center bg-white bg-opacity-30 px-4 py-4">
            <div className="w-[33%] h-full">
              <img
                src="/den.png"
                alt="Perfil"
                className="w-full h-full object-fill rounded-full"
              />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p className="text-white">
                “Como profissional de harmonização, sempre me preocupei com
                possíveis problemas legais. Os documentos elaborados por
                especialistas foi a solução que eu precisava. Resolveu todas as
                minhas preocupações e me permitiu focar totalmente no meu
                trabalho.
              </p>
              <span className="text-white font-bold">Dra. Marina Madruga</span>
              <span className="font-bold text-white">
                DOUTORA E MESTRE EM ODONTOLOGIA
              </span>
            </div>
          </div>
        </div>
        */
