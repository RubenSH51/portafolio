import React from 'react'

export default function Interests() {
  return (
      <section id="interests" className='bg-gray-100 py-8'>
        <div className='container mx-auto'>
          <h3 className='text-3xl font-bold text-center mb-8 text-gray-900'>Interests 🎵</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-5/6 mx-auto'>
            <div className='bg-white rounded-lg shadow-md '>
              <div className='p-6'>
                <h4 className='text-2xl font-semibold mb-4'>Mathematics</h4>
                <p className='text-gray-700 leading-relaxed'>I have a deep fascination with mathematics, particularly its elegance and its ability to describe the world around us with precision. Exploring mathematical concepts, solving challenging problems, and delving into mathematical proofs are activities that I find intellectually stimulating and rewarding.</p>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md'>
              <div className='p-6'>
                <h4 className='text-2xl font-semibold mb-4'>Sports</h4>
                <p className='text-gray-700 leading-relaxed'>Staying active is an integral part of my lifestyle, and I enjoy a variety of physical activities. I regularly engage in gym workouts to build strength and endurance. Running allows me to clear my mind and stay in shape, while playing tennis provides both physical exercise and a competitive outlet. Sports not only keep me fit but also help me maintain a healthy work-life balance.</p>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md'>
              <div className='p-6'>
                <h4 className='text-2xl font-semibold mb-4'>Music</h4>
                <p className='text-gray-700 leading-relaxed'>Music holds a special place in my heart, and I have a passion for playing musical instruments. The piano, guitar, and violin are instruments that I have dedicated time to mastering. Whether it's expressing emotions through melodies on the piano, strumming chords on the guitar, or producing harmonious sounds on the violin, music allows me to channel my creativity and connect with others on a profound level.</p>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md'>
              <div className='p-6'>
                <h4 className='text-2xl font-semibold mb-4'>Literature</h4>
                <p className='text-gray-700 leading-relaxed'>I have a keen interest in literature, particularly novels, with a special fondness for detective fiction. Exploring the intricate plots, captivating characters, and suspenseful narratives of mystery novels is a source of enjoyment and relaxation for me. I find great satisfaction in unraveling the clues and solving the puzzles presented in these thrilling tales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}
