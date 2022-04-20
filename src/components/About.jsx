import React from 'react'

const About = () => {
  return (
    <div 
    name='about'
    className='w-full h-screen bg-slate-200 text-[#14274E]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00a6ff]'>
                        About
                    </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Alex, welcome, please take a look around!</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Qui aspernatur ea aliquam, distinctio culpa et, minima 
                        maiores sapiente magni mollitia omnis repellendus! Dolore 
                        laudantium reprehenderit odit, perferendis deleniti sint velit 
                        facere molestiae fugit vitae aspernatur vero iusto, laborum, 
                        cumque obcaecati!</p>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default About