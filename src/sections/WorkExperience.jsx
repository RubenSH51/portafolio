import React from 'react'

export default function WorkExperience() {
  return (
    // <section id="workexperience" className='bg-red-400'>
    //   <h3 className='text-2xl text-center pt-8  font-black text-center mb-4'>Work Experience</h3>
    //   <div className="jobs w-11/12 mx-auto py-8 flex justify-center items-center gap-2">
    //     <div className='jobs__job w-3/4 flex flex-col justify-center border h-96 rounded '>

    //         <div className='p-4'>
    //           <p><b><i>Game:</i></b> Rise of Champions</p>
    //           <p><b><i>Role:</i></b> Beta tester</p>
    //           <p><b><i>Employment period:</i></b> 2020</p>
    //         </div>
    //         <div className='p-4'>
    //           <b><i><h4>Job description</h4></i></b>
    //           <p>As a beta tester, I was responsible for meticulously testing new features of the game, both manually and through Python-based automations, to ensure their proper functionality. Additionally, I created detailed reports and developed custom scripts to automate tasks, accurately simulating the behavior of an average player. Moreover, I utilized a variety of tools for error control and further enhancing testing efficiency.</p>
    //         </div>

    //     </div>
    //     <div className='jobs__job w-3/4 flex flex-col justify-center border h-96 rounded'>
    //         <div className='p-4'>
    //           <p><b><i>Startup:</i></b> Platzi</p>
    //           <p><b><i>Role:</i></b> QC Associate</p>
    //           <p><b><i>Employment Period:</i></b> 2022-2023</p>
    //         </div>
    //         <div className='p-4'  >
    //           <b><i><h4>Job description</h4></i></b>
    //           <p>As a QC Specialist at a startup focused on training professionals in the tech industry, I reviewed audiovisual materials to identify errors and areas for improvement. I developed teamwork and organizational skills, gained knowledge in agile methodologies and effective communication techniques. I participated in training workshops and contributed ideas for platform enhancements.</p>
    //         </div>
    //     </div>
    //   </div>
    // </section>

    <section id="workexperience" className='bg-cyan-800 py-8'>
      <div className="container mx-auto w-5/6">
        <h3 className='text-3xl font-bold text-center mb-8 text-white-900'>Work Experience</h3>
        <p className="text-lg text-center text-white-800 mb-6">
          Although my professional experience may be limited, I have gained valuable insights and skills from my previous roles in the tech industry. These experiences have provided me with a strong foundation and a deep understanding of various aspects of technology. Below, I highlight some of the key positions I've held, where I've actively contributed and honed my abilities to drive projects forward.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className='job bg-white rounded-lg shadow-md p-6'>
            <h4 className="text-lg font-bold mb-2 text-black">Beta Tester at Rise of Champions</h4>
            <p className='text-black'><strong>Employment Period:</strong> 2020</p>
            <p className='text-black'>As a beta tester, I was responsible for meticulously testing new features of the game, both manually and through Python-based automations, to ensure their proper functionality. Additionally, I created detailed reports and developed custom scripts to automate tasks, accurately simulating the behavior of an average player. Moreover, I utilized a variety of tools for error control and further enhancing testing efficiency.</p>
          </div>

          <div className='job bg-white rounded-lg shadow-md p-6'>
            <h4 className="text-lg font-bold mb-2 text-black">QC Associate at Platzi</h4>
            <p className='text-black'><strong>Employment Period:</strong> 2022-2023</p>
            <p className='text-black'>As a QC Specialist at a startup focused on training professionals in the tech industry, I reviewed audiovisual materials to identify errors and areas for improvement. I developed teamwork and organizational skills, gained knowledge in agile methodologies and effective communication techniques. I participated in training workshops and contributed ideas for platform enhancements.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
