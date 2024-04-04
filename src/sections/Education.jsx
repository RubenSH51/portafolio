import React, { useState, useEffect } from 'react'
import Modal from '../components/Modal';

// Front
import front1 from "/assets/front/Laboratorio de JavaScript - Fake Store.jpg"
import front2 from "/assets/front/Curso Práctico de HTML y CSS.jpg"
import front3 from "/assets/front/Curso Práctico de JavaScript.jpg"
import front4 from "/assets/front/Curso Práctico de React.js.jpg"
import front5 from "/assets/front/Curso Profesional de React.js y Redux.jpg"
import front6 from "/assets/front/Curso de React.js con Vite.js y TailwindCSS.jpg"
import front7 from "/assets/front/Curso de React.js - Patrones de Render y Composición.jpg"
import front8 from "/assets/front/Curso de React.js - Navegación con React Router.jpg"
import front9 from "/assets/front/Curso de React.js - Manejo Profesional del Estado.jpg"

// Software
import soft1 from "/assets/software/Curso Básico de Algoritmos y Pensamiento Lógico.jpg"
import soft2 from "/assets/software/Curso de Introducción a la Terminal y Línea de Comandos.jpg"
import soft3 from "/assets/software/Curso de Introducción a los Algoritmos de Ordenamiento.jpg"
import soft4 from "/assets/software/Curso de Programación Orientada a Objetos POO.jpg"
import soft5 from "/assets/software/Fundamentos de Ingeniería de Software.jpg"

// Back
import back1 from "/assets/back/Curso Básico de PHP - Instalación, Fundamentos y Operadores.jpg"
import back2 from "/assets/back/Curso Práctico de PHP.jpg"
import back3 from "/assets/back/Curso de Integración de PHP con HTML.jpg"
import back4 from "/assets/back/Curso de Introducción al Desarrollo Backend.jpg"
import back5 from "/assets/back/Curso de Introducción a FastAPI - Path Operations Validaciones y Autenticación.jpg"
import back6 from "/assets/back/Curso de FastAPI - Fundamentos Path Operations y Validaciones.jpg"


export default function Education() {
  const [showModal, setShowModal] = useState(false);
  const [certificationSelected, setCertificationSelected] = useState([]);
  const [studyTitle, setStudyTitle] = useState('')

  function showCertification(study)
  {


    setShowModal(true);

    let dataAnalyst = "https://i.imgur.com/MpHC9dy.jpg";
    let eng2 = "https://i.imgur.com/YlaphAD.jpg";
    let eng1 = "https://i.imgur.com/uKzeYMQ.jpg";


    //certificaciones:

    let software = [soft1,soft2,soft3,soft4,soft5];
    let data = [eng1,eng2,dataAnalyst];
    let front = [front1,front2,front3,front4,front5,front6,front7,front8,front9];
    let back = [back1,back2,back3,back4,back5,back6];
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

        <StudyItemCard 
          title={"Software Developer"}
          platform={"Institute"}
          platformResponse={"I12"}
          description={"I graduated as a software developer from Institute I12, where I acquired fundamental skills in programming and application development."}
          extraSubtitle={"Graduation date"}
          extraSubtitleText={"12/2023"}
          category={"software"}
          showCertification={showCertification}
        />

        <StudyItemCard 
          title={"Data Analyst"}
          platform={"Platform"}
          platformResponse={"Platzi"}
          description={"Completed a Data Analyst specialization through Platzi online learning platform, which enabled me to develop skills in data analysis and visualization."}
          extraSubtitle={"Completion date"}
          extraSubtitleText={"08/2022"}
          category={"data"}
          showCertification={showCertification}
        />

        <StudyItemCard 
          title={"Front End Developer"}
          platform={"Platforms"}
          platformResponse={"Platzi, Udemy, Freecodecamp and more"}
          description={"I've specialized in front-end development through courses on Platzi, Udemy, Argentina Programa, Oracle One and bootcamps like FreeCodeCamp, providing me with solid skills in user interface design and development."}
          extraSubtitle={"Completion date"}
          extraSubtitleText={"10/2021"}
          category={"front"}
          showCertification={showCertification}
        />

        <StudyItemCard 
          title={"Back End Developer"}
          platform={"Institute"}
          platformResponse={"I12"}
          description={"I'm experienced in backend development with Python and Django, building basic systems for a solid grasp of backend logic and dynamic web apps."}
          extraSubtitle={"Graduation date"}
          extraSubtitleText={"12/2023"}
          category={"back"}
          showCertification={showCertification}
        />

        <StudyItemCard 
          title={"English"}
          platform={"Platform"}
          platformResponse={"Platzi and self-taught"}
          description={"I've dedicated time to studying English on platforms like Platzi and independently, improving my communication skills."}
          extraSubtitle={"Completion date"}
          extraSubtitleText={"I'm still learning"}
          category={"english"}
          showCertification={showCertification}
        />
        
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


function StudyItemCard({title,platform,platformResponse,description, extraSubtitle, extraSubtitleText, category, showCertification}){
  return (
    <div className="study mb-8 p-4 border h-100 flex flex-col justify-between max-w-80 h-96 transition-colors duration-300 ease-in-out bg-gray-700 hover:bg-gray-800 rounded-md">
      <h3 className='text-xl font-black text-center mb-4'>{title}</h3>
      <div>
        <p><strong>{platform}:</strong> {platformResponse}</p>
        { extraSubtitle && <p><strong>{extraSubtitle}:</strong> {extraSubtitleText}</p>}
        <p>{description}</p>
      </div>
      <button onClick={() => showCertification(category)} className="w-full mt-auto bg-slate-900 hover:bg-slate-700 hover:text-white duration-300 transition ease-in-out">
            Ver certificación
          </button>
    </div>
  )
}

