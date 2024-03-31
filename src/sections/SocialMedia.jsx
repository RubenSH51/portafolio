import React from 'react'

export default function SocialMedia() {
  return (
      <footer id="socialmedia" className="bg-white dark:bg-gray-900 h-16 flex justify-around items-center">
          <div>©2024 All Rights Reserved.</div>
          <div className='social flex'>
                <a href="https://www.linkedin.com/in/rub%C3%A9n-cuello-15819a23a/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <i className="fab fa-linkedin"></i>
                    <span className="sr-only">LinkedIn page</span>
                </a>
                <a href="https://github.com/RubenSH51" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <i className="fab fa-github"></i>
                    <span className="sr-only">GitHub account</span>
                </a>
          </div>
      </footer>
  )
}
