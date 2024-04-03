import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faCss3Alt, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';


export default function Skills() {
    return (
      <section id="skills" className="bg-gray-100 py-12">
        <div className="container mx-auto">
        <h3 className='text-3xl text-center pt-8 mb-8 font-black text-black text-center mb-4'>Skills 📊</h3>
        <p className="text-center text-lg text-gray-800 mb-6 w-3/4 mx-auto">
        In the dynamic field of software engineering, continuous learning and skill development are essential. 
        Below, you'll find an overview of my expertise and proficiencies. From frontend technologies like React.js 
        to backend frameworks such as Node.js and Python, I'm well-versed in a variety of tools and languages. 
        My experience extends to database management, modern CSS frameworks, and much more. Explore further to 
        discover the depth of my capabilities.
        </p>
          <div className="w-3/4 mx-auto grid grid-cols-2 gap-4 md:grid-cols-3">
            <SkillItem 
              name="JavaScript" 
              icon={faJs} 
              description="Frontend & Backend scripting language."
              imagenLink={true}
              link={''}
            />
            <SkillItem 
              name="React.js" 
              icon={faReact} 
              description="JavaScript library for building user interfaces."
              imagenLink={true}
              link={''}
            />
            <SkillItem 
              name="Tailwind CSS" 
              icon={faCss3Alt} 
              description="Utility-first CSS framework."
              imagenLink={true}
              link={''}
            />
            <SkillItem 
              name="Python" 
              icon={faPython} 
              description="General-purpose programming language."
              imagenLink={true}
              link={''}
            />
            <SkillItem 
              name="Node.js" 
              icon={faNodeJs} 
              description="JavaScript runtime environment."
              imagenLink={true}
              link={''}
            />
            {/* <SkillItem 
              name="SQL" 
              icon={faDatabase} 
              description="Structured Query Language for databases."
              imagenLink={true}
              link={''}
            />  */}
            <SkillItem 
              name="Django" 
              icon={""} 
              description="High-level Python web framework."
              imagenLink={false}
              link={'https://cdn.icon-icons.com/icons2/512/PNG/512/prog-django_icon-icons.com_50802.png'}
            /> 
          </div>
        </div>
      </section>
    );
  }
  
  function SkillItem({ name, icon, description, imagenLink, link }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center">
        <div className="text-2xl text-black mb-2">
          {imagenLink ? <FontAwesomeIcon icon={icon} /> : <img className='w-6' src={link} />}
          
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    );
  }
