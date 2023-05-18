import React from 'react'
import { TfiWorld } from 'react-icons/tfi'
import { FiGithub } from 'react-icons/fi'
import IconButton from './IconButton'

export default function Button2() {
  const project = {
    link: 'https://lonkan-portfolio.netlify.app/',
    github: 'https://github.com/storres20',
  }

  return (
    <div className="flex justify-center mt-2">
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex text-white border-0 focus:outline-none rounded text-lg"
      >
        <IconButton text="Link" color="bg-green-500" textcolor="text-black">
          <TfiWorld />
        </IconButton>
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="ml-4 inline-flex text-gray-400 border-0 focus:outline-none hover:text-white rounded text-lg"
      >
        <IconButton text="Github" color="bg-gray-700">
          <FiGithub />
        </IconButton>
      </a>
    </div>
  )
}
