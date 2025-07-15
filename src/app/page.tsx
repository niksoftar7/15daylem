import Image from 'next/image';
import image from "../../public/img/image0.png";
import image1 from "../../public/img/image.png";
import icono1 from "../../public/img/icono1.png";
import image2 from "../../public/img/image2.png";
import icono2 from "../../public/img/icono2.png";
import { Poppins } from "next/font/google";
import { Rubik } from "next/font/google";
export default function Invitacion15() {

  return (
    
    <div style={{ backgroundColor: '#B3DBE6' }} className="min-h-screen flex items-center justify-center bg-#B3DBE6 p-4">
<div
  className="rounded-3xl shadow-2xl p-6 max-w-md w-full text-center space-y-4"
  style={{
    backgroundImage: "url('/img/fondo.png')",
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
      
        <div className='pt-50 pb-25'>
        <Image
          src={image1} // <-- Reemplaza esta ruta
          alt="Quinceañera"
          width={300}
          height={300}
          className="mx-auto rounded-xl shadow-md "
        />
        <div className=" text-center rounded-3xl shadow-lg p-6 max-w-md w-full font-sans space-y-4">
        <p className="text-gray-700 text-base leading-relaxed font-[rubik]">
          Ya casi cumplo quince, <br />
          Dios ha sido bueno conmigo. <br />
          ¡Te invito a celebrar conmigo esta <br />
          fecha inolvidable!
        </p>
        
        <p className="text-[22px] font-semibold">
          <span className="text-[#024873] font-[Dancing_Script] text-[40px]">Te espero el día:</span>
        </p>

        <div className="text-[#1f1f1f]">
          <p className="text-lg uppercase tracking-wide">Sábado <span className="text-2xl text-[#024873] font-weight: 700;">9</span> Agosto</p>
          <p className="text-sm">2025</p>
        </div>

        <div className="flex justify-center">
          <Image
            src={icono1} // <-- Reemplaza esta ruta
            alt="Icono Iglesia"
            className="w-16 h-16 object-contain"
          />
        </div>

        <p className="text-[#1f1f1f] font-semibold">RESTAURANTE TRIBUTO</p>
        <p className="text-gray-700 text-sm">Hora 7:00 pm</p>

        <a 
          href="https://maps.app.goo.gl/c8EkWo5uvDLrQ4Tw5\"
          target="_blank\"
          rel="noopener noreferrer\"
          className="mt-4 bg-[#024959] text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-[#025373] transition">
          CLICK A UBICACIÓN
        </a>
        <div className="text-center mt-6">
          <p className="text-[#024873] text-base leading-relaxed">
            Tu presencia es mi mejor regalo <br />
            pero si deseas obsequiarme algo <br />
            puedes hacerlo mediante la <br />
            siguiente forma:
          </p>
          <div className="flex justify-center">
            <Image
              src={icono2} // <-- Reemplaza esta ruta
              alt="Icono Iglesia"
              className="w-16 h-16 object-contain"
            />
            
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
            LLUVIA DE SOBRES
          </p>
        </div>
        <div className="text-center rounded-3xl  p-6 max-w-md w-full font-sans space-y-3">
            <p className="text-[22px] font-cursive text-[#024959]">Hemos</p>
            <p className="uppercase text-sm tracking-wider text-gray-700">Reservado</p>

            <p className="text-4xl font-bold text-[#024873]">1</p>
            <p className="text-gray-700 text-sm">Lugar en tu honor</p>

            <p className="text-[22px] font-cursive text-[#024873]">
              Confirma <span className="text-[#024873]">tu</span>
            </p>
            <p className="uppercase text-sm tracking-wider text-gray-700">Asistencia</p>

            

            <a
              href="https://wa.me/3175562436?text=Hola...vengo%20a%20confirmar%20mi%20asistencia%20a%20esta%20preciosa%20fiesta%20%E2%9C%A8" 
              target="_blank\"
              rel="noopener noreferrer\"
              className="inline-block mt-2 border-2 border-[#024873] text-[#000] px-6 py-2 rounded-full font-semibold hover:bg-[#024959] hover:text-white transition duration-300"
            >
              CONFIRMA AQUÍ
            </a>
            
          </div>
        </div>
          </div>
       
        
        </div>
      

    </div>
  );
}
