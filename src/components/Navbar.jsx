import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Al ampliar la pantalla garantiza que se cierre el menu desplegable para evitar bloqueos
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1023) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // Redireccionamiento del navbar 50 px hacia arriba del "id"
  const handleClickScrolling = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = 50; // Valor adicional de desplazamiento
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`w-full flex ${isOpen ? 'flex-col' : ''} py-2 lg:py-0 justify-center bg-slate-800 fixed z-50`}>
      <button
        className="lg:hidden text-white navbar-menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰ Click Me! {/* {isOpen ? <span >🥳</span> : <span className="">🙂</span> } */}
      </button>
      <ul className={`flex w-full justify-around lg:flex lg:justify-around ${isOpen ? 'flex-col bg-slate-800 items-center' : 'hidden'}`}>
        <li className={`${isOpen ? "w-full" : ''} cursor-pointer bg-slate-800 hover:rounded hover:bg-slate-400 justify-center duration-300 ease-in-out w-40 h-16 flex items-center`}>
          <a className={`${isOpen ? "w-full flex flex-row" : ''} w-full text-white h-full flex ${isOpen ? "gap-2 ": "flex-col"} items-center justify-center`} href="#aboutme" onClick={(e) => handleClickScrolling(e, "aboutme")}>
            <p>About me</p>
            <span>👨‍💼</span>
          </a>
        </li>
        <li className={`${isOpen ? "w-full" : ''} cursor-pointer bg-slate-800 hover:rounded hover:bg-slate-400 justify-center duration-300 ease-in-out w-40 h-16 flex items-center`}>
          <a className={`${isOpen ? "w-full flex flex-row" : ''} w-full text-white h-full flex ${isOpen ? "gap-2 ": "flex-col"} items-center justify-center`} href="#studies" onClick={(e) => handleClickScrolling(e, "education")}>
            <p>Education</p>
            <span>🎓</span>
          </a>
        </li>

        <li className={`${isOpen ? "w-full" : ''} cursor-pointer bg-slate-800 hover:rounded hover:bg-slate-400 justify-center duration-300 ease-in-out w-40 h-16 flex items-center`}>
          <a className={`${isOpen ? "w-full flex flex-row" : ''} w-full text-white h-full flex ${isOpen ? "gap-2 ": "flex-col"} items-center justify-center`} href="#projects" onClick={(e) => handleClickScrolling(e, "skills")}>
            <p>Skills</p>
            <span>📊</span>
          </a>
        </li>
        <li className={`${isOpen ? "w-full" : ''} cursor-pointer bg-slate-800 hover:rounded hover:bg-slate-400 justify-center duration-300 ease-in-out w-40 h-16 flex items-center`}>
          <a className={`${isOpen ? "w-full flex flex-row" : ''} w-full text-white h-full flex ${isOpen ? "gap-2 ": "flex-col"} items-center justify-center`} href="#projects" onClick={(e) => handleClickScrolling(e, "ongoingstudies")}>
            <p>Ongoing Studies</p>
            <span>📚</span>
          </a>
        </li>


        <li className={`${isOpen ? "w-full" : ''} cursor-pointer bg-slate-800 hover:rounded hover:bg-slate-400 justify-center duration-300 ease-in-out w-40 h-16 flex items-center`}>
          <a className={`${isOpen ? "w-full flex flex-row" : ''} w-full text-white h-full flex ${isOpen ? "gap-2 ": "flex-col"} items-center justify-center`} href="#workexperience" onClick={(e) => handleClickScrolling(e, "workexperience")}>
            <p>Work experience </p>
            <span>💼</span>
          </a>
        </li>
        <li className={`${isOpen ? "w-full" : ''} cursor-pointer bg-slate-800 hover:rounded hover:bg-slate-400 justify-center duration-300 ease-in-out w-40 h-16 flex items-center`}>
          <a className={`${isOpen ? "w-full flex flex-row" : ''} w-full text-white h-full flex ${isOpen ? "gap-2 ": "flex-col"} items-center justify-center`} href="#projects" onClick={(e) => handleClickScrolling(e, "projects")}>
            <p>Projects</p>
            <span>🛠️</span>
          </a>
        </li>
        <li className={`${isOpen ? "w-full" : ''} cursor-pointer bg-slate-800 hover:rounded hover:bg-slate-400 justify-center duration-300 ease-in-out w-40 h-16 flex items-center`}>
          <a className={`${isOpen ? "w-full flex flex-row" : ''} w-full text-white h-full flex ${isOpen ? "gap-2 ": "flex-col"} items-center justify-center`} href="#interests" onClick={(e) => handleClickScrolling(e, "interests")}>
            <p>Interests</p>
            <span>🎵</span>
          </a>
        </li>
        <li className={`${isOpen ? "w-full" : ''} cursor-pointer bg-slate-800 hover:rounded hover:bg-slate-400 justify-center duration-300 ease-in-out w-40 h-16 flex items-center`}>
          <a className={`${isOpen ? "w-full flex flex-row" : ''} w-full text-white h-full flex ${isOpen ? "gap-2 ": "flex-col"} items-center justify-center`} href="#contact" onClick={(e) => handleClickScrolling(e, "contact")}>
            <p>Contact</p>
            <span>✉️</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
