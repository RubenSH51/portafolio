import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
  
      let imagenes = document.querySelectorAll('.imgs-container img');
  
      for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.transform = `translateX(-${(currentSlide-1) * 100}%)`;
      }
    }
  };
  
  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
  
      let imagenes = document.querySelectorAll('.imgs-container img');
  
      for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.transform = `translateX(-${(currentSlide+1) * 100}%)`;
      }
    }
  };


  return (
    <div className="carousel relative w-full overflow-hidden  mx-auto my-4">
      
      <div className="imgs-container flex  transition duration-300" >
        {images.map((image, index) => (
            <img
              key={index}
              src={image}
              id={`image-${index}`}
              alt={`Slide ${index + 1}`}
              className={`w-full  `}
  
            />
        ))}
      </div>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${
          currentSlide === 0 ? 'hidden' : 'block'
        } bg-black bg-opacity-50 text-white p-2 rounded-full  transition-opacity duration-300`}
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className={`absolute top-1/2 right-0  transform -translate-y-1/2 ${
          currentSlide === images.length - 1 ? 'hidden' : 'block'
        } bg-black bg-opacity-50 text-white p-2 rounded-full`}
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};



export default Carousel;

