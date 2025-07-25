'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import image1 from "../../public/img/image.png";
import icono1 from "../../public/img/icono1.png";
import icono2 from "../../public/img/icono2.png";
import icono3 from "../../public/img/icono3.png";

export default function Invitacion15() {
  const [showCard, setShowCard] = useState(false);

  const handleStart = () => {
    const audio = new Audio('/audio/mi-cancion.mp3');
    audio.loop = true;
    audio.play();
    setShowCard(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#B3DBE6] overflow-hidden relative">
      <AnimatePresence>
        {!showCard && (
          <motion.div
            key="welcome"
            className="absolute text-center text-[#024873] flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-[Dancing_Script] mb-6">¡Bienvenid@!</h1>
            <button
              onClick={handleStart}
              className="bg-[#024959] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#025373] transition"
            >
              Entrar a la invitación
            </button>
          </motion.div>
        )}

        {showCard && (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[430px] p-6 sm:p-8 rounded-3xl shadow-2xl text-center space-y-4"
            style={{
              backgroundImage: "url('/img/fondo.png')",
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
           

            <div className='pt-175 pb-25'>
              <div className=" text-center rounded-3xl shadow-lg p-6 max-w-md w-full space-y-4">
                <p className="text-[#024873] text-[20px] font-bold font-[Poppins]">
                  ¡Con el corazón lleno de gratitud, <br />
                  te invito a mis 15 años! <br />
                </p>
                <p className="text-gray-700 text-base leading-relaxed font-[rubik]">
                  Dios ha sido fiel en cada paso de mi vida, <br />
                  y este día tan especial no sería igual sin ti. <br />
                  Acompáñame a celebrar un sueño hecho realidad
                </p>
                <p className="text-[22px] font-semibold">
                  <span className="text-[#024873] font-[Dancing_Script] text-[40px]">Te espero el día:</span>
                </p>
                <div className="text-[#1f1f1f]">
                  <p className="text-lg uppercase tracking-wide">
                    Sábado <span className="text-2xl text-[#024873] font-weight: 700;">9</span> Agosto
                  </p>
                  <p className="text-sm">2025</p>
                </div>
                <div className="flex justify-center">
                  <Image src={icono1} alt="Icono restaurante" className="w-16 h-16 object-contain" />
                </div>
                <p className="text-[#1f1f1f] font-semibold">RESTAURANTE TRIBUTO</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Image src={icono3} alt="Icono de reloj" className="w-7 h-7 object-contain" />
                  <p className="text-gray-700 text-[20px]">Hora 6:30 pm</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/c8EkWo5uvDLrQ4Tw5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-[#024959] text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-[#025373] transition"
                >
                  CLICK A UBICACIÓN
                </a>
                <div className="text-center rounded-3xl pt-80 p-6 max-w-md w-full font-sans space-y-3">
                  <p className="text-[40px] mb-0.5 font-[Dancing_Script] font-semibold text-[#024959]">Hemos</p>
                  <p className="uppercase pt-0 text-gray-700">Reservado</p>
                  <p className="text-4xl font-bold text-[#024873]">1</p>
                  <p className="text-gray-700 text-1xl">Lugar en tu honor</p>
                  <p className="text-[40px] font-[Dancing_Script] text-[#024873] pt-10">
                    Confirma <span className="text-[#024873]">tu</span>
                  </p>
                  <p className="uppercase text-sm tracking-wider text-gray-700">Asistencia</p>
                  <a
                    href="https://wa.me/3175562436?text=Hola%E2%80%A6%20vengo%20a%20confirmar%20mi%20asistencia%20a%20los%20XV%20de%C2%A0Daylem%20%E2%9C%A8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 border-2 border-[#024873] text-[#000] px-6 py-2 rounded-full font-semibold hover:bg-[#024959] hover:text-white transition duration-300"
                  >
                    CONFIRMA AQUÍ
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
