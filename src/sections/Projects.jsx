import React from 'react'

export default function Projects() {
  return (
    <section  id="projects" className='bg-indigo-400 h-full flex flex-col items-center pb-8'>
        <h3 className='text-2xl text-center pt-8 mb-8 font-black text-center mb-4'>Projects</h3>
        <p className="text-center text-lg text-white-800 mb-6 w-3/4 mx-auto">Below, you'll find a collection of projects that reflect my journey as a front-end developer. Each project showcases my skills in JavaScript and React, offering a glimpse into my passion for creating interactive and engaging web experiences. From to-do lists to interactive games, these projects not only demonstrate my technical abilities but also highlight my dedication to mastering front-end development. Explore these projects to discover the creativity, problem-solving, and attention to detail that define my work as a developer.</p>
        <div className="projects-container flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3  w-3/4 mx-auto gap-4">
            <div className='project max-w-96 min-w-60 mx-auto h-auto bg-slate-800 rounded p-4 hover:scale-110 transition ease-in-out hover:opacity-75 hover:bg-slate-700 outline outline-blue-500 outline-offset-[-8px]'>
              <div className='project-img'>
                <img src="https://i.imgur.com/1eaLUx0.png" className="object-cover w-full h-40 rounded-md" alt="" />
              </div>
              <div className='project-description md:h-48 lg:h-60'>
                <h3 className='text-center text-xl font-black my-4'>TaskMaster</h3>
                <p>TaskMaster is a versatile React-based to-do list application. It allows users to effortlessly add, edit, and delete tasks, as well as save the task list securely in local storage.</p>
              </div>
              <div className="botones mt-4 flex flex-col items-center gap-4">
                <a href="https://github.com/RubenSH51/taskmaster" target='blank' 
                  className='py-2 px-2 text-white rounded bg-yellow-500 hover:bg-yellow-300 transition duration-300 ease-in-out'>View repository</a>
                <a href="https://rubensh51.github.io/taskmaster/" target='blank' 
                  className='py-2 px-2 text-white rounded bg-green-500 hover:bg-green-300 transition duration-300 ease-in-out'>View project</a>
              </div>
            </div>

            <div className='project max-w-96 min-w-60 mx-auto h-auto bg-slate-800 rounded p-4 hover:scale-110 transition ease-in-out hover:opacity-75 hover:bg-slate-700 outline outline-blue-500 outline-offset-[-8px]'>
              <div className='project-img'>
                <img src="https://i.imgur.com/RmL8gvW.png" className="object-cover w-full h-40 rounded-md" alt="" />
              </div>
              <div className='project-description md:h-48 lg:h-60'>
                <h3 className='text-center text-xl font-black my-4'>FilmFlux</h3>
                <p>FilmFlux is a movie page that provides information on the latest releases, top-rated films, and enables users to search for movies by title, genre, and even actor.</p>
              </div>
              <div className="botones mt-4 flex flex-col items-center gap-4">
                <a href="https://github.com/RubenSH51/filmflux" target='blank' 
                  className='py-2 px-2 text-white rounded bg-yellow-500 hover:bg-yellow-300 transition duration-300 ease-in-out'>View repository</a>
                <a href="https://rubensh51.github.io/filmflux/" target='blank' 
                  className='py-2 px-2 text-white rounded bg-green-500 hover:bg-green-300 transition duration-300 ease-in-out'>View project</a>
              </div>
            </div>

            <div className='project max-w-96 min-w-60 mx-auto h-auto bg-slate-800 rounded p-4 hover:scale-110 transition ease-in-out hover:opacity-75 hover:bg-slate-700 outline outline-blue-500 outline-offset-[-8px]'>
              <div className='project-img'>
                <img src="https://i.imgur.com/CxSey6M.png" className="object-cover w-full h-40 rounded-md" alt="" />
              </div>
              <div className='project-description md:h-48 lg:h-60'>
                <h3 className='text-center text-xl font-black my-4'>DazzlingDeals</h3>
                <p>DazzlingDeals is an e-commerce platform that allows users to create accounts, log in, add products to their cart, make purchases, and maintain a record of past transactions.</p>
              </div>
              <div className="botones mt-4 flex flex-col items-center gap-4">
                <a href="https://github.com/RubenSH51/DazzlingDeals" target='blank' 
                  className='py-2 px-2 text-white rounded bg-yellow-500 hover:bg-yellow-300 transition duration-300 ease-in-out'>View repository</a>
                <a href="https://rubensh51.github.io/DazzlingDeals/" target='blank' 
                  className='py-2 px-2 text-white rounded bg-green-500 hover:bg-green-300 transition duration-300 ease-in-out'>View project</a>
              </div>
            </div>

            <div className='project max-w-96 min-w-60 mx-auto h-auto bg-slate-800 rounded p-4 hover:scale-110 transition ease-in-out hover:opacity-75 hover:bg-slate-700 outline outline-blue-500 outline-offset-[-8px]'>
              <div className='project-img'>
                <img src="https://i.imgur.com/WxZwvzA.png" className="object-cover w-full h-40 rounded-md" alt="" />
              </div>
              <div className='project-description md:h-48 lg:h-60'>
                <h3 className='text-center text-xl font-black my-4'>Rock, Paper, Scissors, Lizard, Spock</h3>
                <p>Inspired by the popular TV series "The Big Bang Theory," this JavaScript-based game is a modern twist on the classic rock-paper-scissors game.</p>
              </div>
              <div className="botones mt-4 flex flex-col items-center gap-4">
                <a href="https://github.com/RubenSH51/Rock-paper-scissors-lizard-Spock" target='blank' 
                  className='py-2 px-2 text-white rounded bg-yellow-500 hover:bg-yellow-300 transition duration-300 ease-in-out'>View repository</a>
                <a href="https://rubensh51.github.io/Rock-paper-scissors-lizard-Spock/" target='blank' 
                  className='py-2 px-2 text-white rounded bg-green-500 hover:bg-green-300 transition duration-300 ease-in-out'>View project</a>
              </div>
            </div>

            <div className='project max-w-96 min-w-60 mx-auto h-auto bg-slate-800 rounded p-4 hover:scale-110 transition ease-in-out hover:opacity-75 hover:bg-slate-700 outline outline-blue-500 outline-offset-[-8px]'>
              <div className='project-img'>
                <img src="https://i.imgur.com/oSZOz3F.png" className="object-cover w-full h-40 rounded-md" alt="" />
              </div>
              <div className='project-description md:h-48 lg:h-60'>
                <h3 className='text-center text-xl font-black my-4'>Quotes</h3>
                <p>Quotes is a webpage displaying quotes from well-known authors. It is one of my early projects, and refreshing the page reveals new quotes.</p>
              </div>
              <div className="botones mt-4 flex flex-col items-center gap-4">
                <a href="https://github.com/RubenSH51/Quotes" target='blank' 
                  className='py-2 px-2 text-white rounded bg-yellow-500 hover:bg-yellow-300 transition duration-300 ease-in-out'>View repository</a>
                <a href="https://rubensh51.github.io/Quotes/" target='blank' 
                  className='py-2 px-2 text-white rounded bg-green-500 hover:bg-green-300 transition duration-300 ease-in-out'>View project</a>
              </div>
            </div>

            <div className='project max-w-96 min-w-60 mx-auto h-auto bg-slate-800 rounded p-4 hover:scale-110 transition ease-in-out hover:opacity-75 hover:bg-slate-700 outline outline-blue-500 outline-offset-[-8px]'>
              <div className='project-img'>
                <img src="https://i.imgur.com/h5QOitC.png" className="object-cover w-full h-40 rounded-md" alt="" />
              </div>
              <div className='project-description md:h-48 lg:h-60'>
                <h3 className='text-center text-xl font-black my-4'>Memojis</h3>
                <p>Memojis is a fun and addictive memory game featuring emojis, built entirely in JavaScript. It offers various levels of difficulty for players to challenge themselves and enjoy.</p>
              </div>
              <div className="botones mt-4 flex flex-col items-center gap-4">
                <a href="https://github.com/RubenSH51/Memojis" target='blank' 
                  className='py-2 px-2 text-white rounded bg-yellow-500 hover:bg-yellow-300 transition duration-300 ease-in-out'>View repository</a>
                <a href="https://rubensh51.github.io/Memojis/" target='blank' 
                  className='py-2 px-2 text-white rounded bg-green-500 hover:bg-green-300 transition duration-300 ease-in-out'>View project</a>
              </div>
            </div>

        </div>
    </section>
  )
}
