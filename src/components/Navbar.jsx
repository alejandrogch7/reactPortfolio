import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import Logo from '../assets/logoAlex.png'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleMenu = () => setNav(!nav)

    return (
        <div className='fixed z-40 w-full h-[10%] flex justify-between items-center px-4 bg-slate-200 text-sky-900'>
            <div>
                <img src={Logo} alt="Logo" style={{ width: '100px' }} />
            </div>
            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* hamburger */}
            <div onClick={handleMenu} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute h-screen bg-[#0c1928] text-gray-300 flex flex-col justify-center w-full top-0 left-0 items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleMenu} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleMenu} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleMenu} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleMenu} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleMenu} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/alejandro-gonz%C3%A1lez-781a231a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8dapIkV7SYaifD2FjynCow%3D%3D"
                            target='_blank'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-900'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/alejandrogch7"
                            target='_blank'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-red-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="mailto:alexdev.gc@gmail.com?Subject=Contact from portfolio" >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-slate-500'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://drive.google.com/file/d/10EjU61bD7GBBoYdcbR2uesqBRpDezYMg/view?usp=sharing"
                            target='_blank'>
                            Resume <BsFillPersonFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar


