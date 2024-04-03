import React, { useState, useEffect } from 'react'
import Modal from '../components/Modal';

export default function Education() {
  const [showModal, setShowModal] = useState(false);
  const [certificationSelected, setCertificationSelected] = useState([]);
  const [studyTitle, setStudyTitle] = useState('')

  function showCertification(study)
  {
    // 1) Abrir modal
    // 2) Ver cual es el estudio: software, data, front, back, english
    // 3) Dependiendo del estudio mostrar certificación
    // 3a) No tengo certificación de desarrollador de software aún por lo que se necesita un msj
    // 3b) Front   no tiene título aún, así que requiere mostrar diplomas de Platzi, Oracle One y Freecodecamp
    // 3c) Back    no tiene título aún, así que requiere mostrar diplomas de Platzi
    // 3d) English no tiene título aún, así que requiere mostrar diplomas de Platzi y placement test


    setShowModal(true);

    let dataAnalyst = "https://i.imgur.com/MpHC9dy.jpg";
    let eng2 = "https://i.imgur.com/YlaphAD.jpg";
    let eng1 = "https://i.imgur.com/uKzeYMQ.jpg";

    //certificaciones:

    let software = [eng1,eng2,dataAnalyst];
    let data = [eng1,eng2,dataAnalyst];
    let front = [eng1,eng2,dataAnalyst];
    let back = [eng1,eng2,dataAnalyst];
    let english = [eng1,eng2,dataAnalyst];


 
      switch(study)
    {
      case "software" : setCertificationSelected(software);
                        setStudyTitle("Software Development")
                        break;
      case "data"     : setCertificationSelected(data);
                        setStudyTitle("Data Analysis")
                        break;
      case "front"    : setCertificationSelected(front);
                        setStudyTitle("Front-end Development")
                        break;
      case "back"     : setCertificationSelected(back);
                        setStudyTitle("Back-end Development")
                        break;
      case "english"  : setCertificationSelected(english);
                        setStudyTitle("English")
                        break;
      default         : setCertificationSelected('perro');
                        setStudyTitle('')
                        break;
    }

  }
  

  return (
    <section id="education" className='bg-teal-950 relative'>
      <h3 className='text-3xl text-center pt-8 mb-8 font-black text-center mb-4'>Education 🎓</h3>
      <p className="text-center text-lg text-white-800 mb-6 w-3/4 mx-auto">
          I believe in the importance of lifelong learning and continuous self-improvement. 
          Here are some of the educational milestones I've achieved and the ongoing 
          endeavors I'm pursuing to enhance my skills and expertise:
      </p>
      <div className="estudios flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto gap-8">
        <div className="study mb-8 p-4 border h-100 flex flex-col justify-between max-w-80 h-96 transition-colors duration-300 ease-in-out bg-gray-700 hover:bg-gray-800 rounded-md">
          <h3 className='text-xl font-black text-center mb-4'>Software Developer</h3>
          <div>
            <p><strong>Instituto:</strong> I12</p>
            <p><strong>Fecha de Graduación:</strong> 12/2023</p>
            <p>Me gradué como desarrollador de software en el Instituto I12, donde adquirí habilidades fundamentales en programación y desarrollo de aplicaciones.</p>
          </div>
          <button onClick={() => showCertification("software")} className="w-full mt-auto bg-slate-900 hover:bg-slate-700 hover:text-white duration-300 transition ease-in-out">
            Ver certificación
          </button>
        </div>
          
        <div className="study mb-8 p-4 border h-100 flex flex-col justify-between max-w-80 h-96 transition-colors duration-300 ease-in-out bg-gray-700 hover:bg-gray-800 rounded-md">
          <h3 className='text-xl font-black text-center mb-4'>Data Analyst</h3>
          <div>
            <p><strong>Plataforma:</strong> Potsi</p>
            <p>Completé un curso de Data Analyst en la plataforma Potsi, lo que me permitió desarrollar habilidades en análisis de datos y visualización.</p>
          </div>
          <button onClick={() => showCertification("data")} className="w-full mt-auto bg-slate-900 hover:bg-slate-700 hover:text-white duration-300 transition ease-in-out">
            Ver certificación
          </button>
        </div>

        <div className="study mb-8 p-4 border h-100 flex flex-col justify-between max-w-80 h-96 transition-colors duration-300 ease-in-out bg-gray-700 hover:bg-gray-800 rounded-md">
          <h3 className='text-xl font-black text-center mb-4'>Front End Developer</h3>
          <div>
            <p><strong>Plataformas:</strong> Potsi, Udemy y FreeCodeCamp</p>
            <p>Me he especializado en desarrollo front-end a través de cursos en Potsi, Udemy y en bootcamps como FreeCodeCamp, lo que me ha proporcionado habilidades sólidas en diseño y desarrollo de interfaces de usuario.</p>
          </div>
          <button onClick={() => showCertification("front")} className="w-full mt-auto bg-slate-900 hover:bg-slate-700 hover:text-white duration-300 transition ease-in-out">
            Ver certificación
          </button>
        </div>

        <div className="study mb-8 p-4 border h-100 flex flex-col justify-between max-w-80 h-96 transition-colors duration-300 ease-in-out bg-gray-700 hover:bg-gray-800 rounded-md">
          <h3 className='text-xl font-black text-center mb-4'>Back End Developer</h3>
          <div>
            <p><strong>Experiencia:</strong> Creación de sistemas básicos</p>
            <p>Tengo experiencia en desarrollo backend utilizando Python y Django. He creado sistemas básicos utilizando este stack tecnológico, lo que me ha proporcionado una comprensión sólida de la lógica del backend y la construcción de aplicaciones web dinámicas.</p>
          </div>
          <button onClick={() => showCertification("back")} className="w-full mt-auto bg-slate-900 hover:bg-slate-700 hover:text-white duration-300 transition ease-in-out">
            Ver certificación
          </button>
        </div>

        <div className="study mb-8 p-4 border h-100 flex flex-col justify-between max-w-80 h-96 transition-colors duration-300 ease-in-out bg-gray-700 hover:bg-gray-800 rounded-md">
          <h3 className='text-xl font-black text-center mb-4'>Inglés</h3>
          <div>
            <p><strong>Plataforma:</strong> Potsi</p>
            <p><strong>Autoestudio:</strong> Por mi cuenta</p>
            <p>He dedicado tiempo al estudio del idioma inglés tanto en la plataforma Potsi como de forma autodidacta, lo que me ha permitido mejorar mis habilidades de comunicación.</p>
          </div>
          <button onClick={() => showCertification("english")} className="w-full mt-auto bg-slate-900 hover:bg-slate-700 hover:text-white duration-300 transition ease-in-out">
            Ver certificación
          </button> 
        </div>
      </div>

      {showModal && 
        <Modal 
              setShowModal={setShowModal} 
              certifications={certificationSelected} 
              studyTitle={studyTitle}
        />
      }
    </section>
  )
}
