import Image from 'next/image';
import image1 from "../../public/img/image.png";
import icono1 from "../../public/img/icono1.png";
import image2 from "../../public/img/image2.png";
export default function Invitacion15() {
  return (
    <div style={{ backgroundColor: '#B3DBE6' }} className="min-h-screen flex items-center justify-center bg-#B3DBE6 p-4">
      <div  className="bg-white rounded-3xl shadow-2xl p-6 max-w-md w-full text-center space-y-4">
        <h1 className="text-pink-600 text-3xl md:text-4xl font-bold tracking-wide">Mis 15 Años</h1>

        <Image
          src={image1} // <-- Reemplaza esta ruta
          alt="Quinceañera"
          width={300}
          height={300}
          className="mx-auto rounded-xl shadow-md"
        />
        <div className="bg-[#fdfaf6] text-center rounded-3xl shadow-lg p-6 max-w-md w-full font-sans space-y-4">
        <p className="text-gray-700 text-base leading-relaxed">
          Quiero festejar mis XV’S bailando <br />
          y gozando con la gente que <br />
          más quiero ¿vienes?
        </p>

        <p className="text-[22px] font-semibold">
          <span className="text-[#c9905f] font-cursive">Los esperamos </span>
          <span className="text-[#f3c88d] font-cursive">el día:</span>
        </p>

        <div className="text-[#1f1f1f]">
          <p className="text-lg uppercase tracking-wide">Sábado <span className="font-bold text-2xl">13</span> Julio</p>
          <p className="text-sm">2024</p>
        </div>

        <div className="flex justify-center">
          <Image
            src={icono1} // <-- Reemplaza esta ruta
            alt="Icono Iglesia"
            className="w-16 h-16 object-contain"
          />
        </div>

        <p className="text-[#1f1f1f] font-semibold">DULCE NOMBRE DE MARÍA</p>
        <p className="text-gray-700 text-sm">Hora 4:00 pm</p>

        <button className="mt-4 bg-[#b27a4c] text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-[#a36837] transition">
          CLICK A UBICACIÓN
        </button>
      </div>
       <Image
          src={image2} // <-- Reemplaza esta ruta
          alt="Quinceañera"
          width={500}
          height={300}
          className="mx-auto rounded-xl shadow-md"
        />
        <div className="bg-[#fdfaf6] text-center rounded-3xl shadow-lg p-6 max-w-md w-full font-sans space-y-3">
            <p className="text-[22px] font-cursive text-[#c9905f]">Hemos</p>
            <p className="uppercase text-sm tracking-wider text-gray-700">Reservado</p>

            <p className="text-4xl font-bold text-black">1</p>
            <p className="text-gray-700 text-sm">Lugar en tu honor</p>

            <p className="text-[22px] font-cursive text-[#c9905f]">
              Confirma <span className="text-[#f3c88d]">tu</span>
            </p>
            <p className="uppercase text-sm tracking-wider text-gray-700">Asistencia</p>

            <p className="text-sm text-gray-700 leading-relaxed">
              Por favor ayúdame confirmando <br /> tu asistencia vía whatsapp
            </p>

            <a
              href="https://wa.me/57TU_NUMERO?text=Hola!%20Confirmo%20mi%20asistencia%20a%20tus%20XV.\"
              target="_blank\"
              rel="noopener noreferrer\"
              className="inline-block mt-2 border-2 border-[#c9a06b] text-[#444] px-6 py-2 rounded-full font-semibold hover:bg-[#f3c88d]/30 transition\"
            >
              CONFIRMA AQUÍ
            </a>
            <p className="text-[22px] font-cursive text-[#c9905f]">
              ¡Gracias <span className="text-[#f3c88d]">por</span>
            </p>
            <p className="text-[22px] font-cursive text-[#c9905f]">
              acompañarme <span className="text-[#f3c88d]">!</span>
            </p>
          </div>
      </div>
      

    </div>
  );
}
