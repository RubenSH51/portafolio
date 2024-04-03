import React from 'react'

export default function AboutMe() {
  return (
    <section id="aboutme" className="mt-12 bg-blue-400 w-full  py-8 flex flex-col items-center justify-center">
        <div className='flex flex-col justify-center items-center w-full'>
            <h3  className='text-3xl font-bold text-center mb-8 text-white-900'>Welcome to my Portfolio 👨‍💼</h3>
            <div className='w-2/3 gap-4 flex justify-around items-center flex-col lg:flex-row'>
              <img src="https://i.imgur.com/E0B5ewn.jpeg" alt="" className='w-80 h-80 rounded-full'/>
              <i><p className="text-center">
                👋 Greetings! 👋 I'm Rubén, a software engineer 🖥️ fueled by logic 🔍 and a deep love 💖 for mathematics 🧮. Specializing in front-end development, I enjoy creating visually appealing and intuitive user interfaces that elevate the digital experience.
                <br/><br/>
                My background in software engineering 🖥️, combined with my affinity for problem-solving 🧠, allows me to approach development challenges with creativity 🎨 and precision 🎯. From crafting elegant code to analyzing complex data sets, I'm dedicated to delivering solutions that exceed expectations.
                <br/><br/>
                When I'm not immersed in code 💻, you can find me exploring the latest advancements in technology 🚀, tackling mathematical puzzles, or delving into the fascinating world of science 🧪. I'm thrilled 😄 to share my journey and showcase my projects with you through this portfolio! 🌟
                </p></i>
            </div>
        </div>

    </section>
  )
}

