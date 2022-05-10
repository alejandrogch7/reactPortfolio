import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-slate-200 text-slate-200 h-screen'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4'>
            <div className='text-[#14274E]'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00a6ff]'>Skills</p>
                <p className='py-6'>Technologies that I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon"/>
                    <p className='my-4 font-bold'>HTML</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon"/>
                    <p className='my-4 font-bold'>CSS</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript Icon"/>
                    <p className='my-4 font-bold'>JavaScript</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React Icon"/>
                    <p className='my-4 font-bold'>React</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={Github} alt="Github Icon"/>
                    <p className='my-4 font-bold'>Github</p>
                </div>
                <div className='shadow-md bg-[#14274E] shadow-slate-500 hover:scale-110 duration-500 rounded-md pt-4'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Icon"/>
                    <p className='my-4 font-bold'>Tailwind</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills