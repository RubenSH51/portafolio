
import React from 'react';

export default function OngoingStudies() {
  return (
    <section id="ongoingstudies" className="py-12  bg-green-200 py-8 ">
      <div className="container mx-auto w-5/6">
        <h3 className='text-3xl text-center  pt-8 mb-8 text-gray-800 font-black text-center mb-4'>Ongoing Studies 📚</h3>
        <p className="text-center text-lg text-gray-700 mb-6 w-3/4 mx-auto">
            Continuous learning is essential in today's fast-paced world. Here's a glimpse into my current educational pursuits and the exciting areas I'm exploring to expand my knowledge and skills:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StudyItem 
            title="Advanced JavaScript Concepts" 
            progress={70} 
            highlights={[
              "Understanding closures and prototypes",
              "Exploring functional programming concepts"
            ]}
          />
          <StudyItem 
            title="Next.js" 
            progress={25}
            highlights={[
              "Server-side rendering for improved SEO",
              "Automatic code splitting for faster page loads",
              "Static site generation for better performance"
            ]}
          />
          <StudyItem 
            title="Data Visualization" 
            progress={50} 
            highlights={[
              "Seaborn: High-level interface for drawing attractive and informative statistical graphics",
              "Altair: Declarative statistical visualization library for Python",
              "Create stunning charts, plots, and graphs to explore and present data effectively"
            ]}
          />
          <StudyItem 
            title="Data Structures and Algorithms" 
            progress={60} 
            highlights={[
              "Implementing common data structures",
              "Analyzing time and space complexity"
            ]}
          />
          <StudyItem 
            title="Node.js" 
            progress={65} 
            highlights={[
              "Build scalable and efficient server-side applications",
              "Use npm packages to extend functionality",
              "Event-driven, non-blocking I/O model for high concurrency"
            ]}
          />

        <StudyItem 
          title="English" 
          progress={70} 
          highlights={[
            "Enhance speaking, listening, reading, and writing skills",
            "Expand vocabulary through regular practice",
            "Develop fluency and confidence in communication",
            "Engage with authentic English materials like movies, podcasts, and news articles"
          ]}
        />
        </div>
      </div>
    </section>
  );
}

function StudyItem({ title, progress, highlights }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl text-gray-700 font-semibold mb-4">{title}</h3>
      <div className="mb-4">
        <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">{`${progress}% Complete`}</p>
      </div>
      <ul className="list-disc ml-6">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-gray-700">{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
