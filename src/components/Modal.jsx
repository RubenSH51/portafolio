import React from 'react'
import Carousel from './Carousel'

export default function Modal({setShowModal, certifications, studyTitle}) {

return (

  <div className='z-50 w-screen h-screen fixed top-0 flex justify-center items-center'>
    <div className='relative w-full flex justify-center'>
      <div className='bg-black opacity-80 fixed inset-0'></div>
      <div className='bg-white border w-full max-w-lg w-1/2 h-3/4 relative rounded-lg border-2 border-gray-700 outline-none focus:outline-none outline-solid p-2 outline-offset-4'>
        <span onClick={() => setShowModal(false)} className='cursor-pointer absolute top-1 right-1'>❌</span>
        <h1 id="modal-title" className='text-center text-black text-3xl mt-8'>{studyTitle}</h1>
        <Carousel images={certifications}/>
      </div>
    </div>
  </div>
)

}
