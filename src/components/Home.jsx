import React from 'react'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-200'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className=' text-[#00a6ff] text-2xl'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#002b78]'>Alex</h1>
            <h2 className='text-[#14274E] text-4xl'>I'm a web developer.</h2>
            <p className='text-[#14274E] py-4 max-w-[700px]'>
                Passionate about technology and always looking for new challenges, 
                in this portfolio I'll show you my skill set, focused on modern JavaScript with all the technologies around it,
                and a few things about me.  
            </p>
            <form>
                <button className='text-[#14274E] font-bold border-2 border-[#14274E] px-6 py-3 my-2 flex flex-row items-center hover:bg-[#002b78] hover:text-slate-200'>
                    <Link to='work' smooth={true} duration={500}>
                        View my work 
                    </Link>
                </button>
            </form>
        </div>

    </div>
  )
}

export default Home









