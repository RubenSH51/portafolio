import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mgegnllz");
  const [infoOk, setInfoOk] = useState(false);


  const handleFormSubmit = (e) => {
    e.preventDefault();


    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById("message");
    const formMessage = document.getElementById('form-message');


    if(name.value.length<3)
    {
      formMessage.textContent="Completa el campo nombre";
      setTimeout(() => {
        formMessage.textContent = ""
      },3000)
      setInfoOk(false);
      return -1;
      
    }
    if(email.value.length<10)
    {
      formMessage.textContent="Completa el campo email";
      setTimeout(() => {
        formMessage.textContent = ""
      },3000)
      setInfoOk(false);
      return -1;
      
    }
    if(message.value.length<4)
    {
      formMessage.textContent="Completa el campo mensaje";
      setTimeout(() => {
        formMessage.textContent = ""
      },3000)
      setInfoOk(false);
      return -1;
      
    }


    /* >>>>>>>>>>> Todo salío perfectamente >>>>>>>>>>>>> */
    setInfoOk(true);
    formMessage.textContent="Mensaje enviado con éxito!";
    setTimeout(() => {
      formMessage.textContent = "";
      setInfoOk(false); 
    },3000)


    // Enviando datos al formulario de formspree
    handleSubmit(e);

    // Limpiando los campos
    name.value = '';
    email.value = '';
    message.value = '';
    
    
  };

  return (
    <section id="contact" className='bg-emerald-950 py-8 px-4'>
      <h3 className='text-3xl font-black text-center mb-8'>Contact Me ✉️</h3>
      <form action='https://formspree.io/f/mgegnllz' onSubmit={handleFormSubmit} className='mx-auto w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">
            Name
          </label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline text-white' 
            id="name" 
            name="name" 
            type="text" 
            placeholder="Your Name" 

          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">
            Email
          </label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline text-white' 
            id="email" 
            type="email" 
            name="email" 
            placeholder="Your Email" 

          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="message">
            Message
          </label>
          <textarea 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline text-white' 
            id="message" 
            name="message" 
            placeholder="Your Message" 
            rows="6"

          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className='flex items-center justify-center'>
          <button 
            className='bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
            type="submit" 
            
          >
            Send
          </button>
        </div>
        <h3 className={`text-center font-black ${infoOk ? "text-green-500" : "text-red-500"}`} id="form-message"></h3>
      </form>
    </section>
  );
}
