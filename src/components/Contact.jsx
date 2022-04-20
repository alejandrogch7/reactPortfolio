import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-200 flex justify-center items-center p-4'>
        <form 
        action="https://getform.io/f/9db8d46b-98bc-4e2f-826f-2f7fc9b74627"
        method='POST'
        className='flex flex-col max-w-[600px] w-full'
        >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00a6ff] '>Contact</p>
                <p className='pt-6'>Submit the form to contact me.</p>
            </div>
            <input className='p-2 m-2 rounded-md' type="text" name="name" id="name" placeholder='Name' />
            <input className='p-2 m-2 rounded-md' type="email" name="email" id="email" placeholder='Email' />
            <textarea className='p-2 m-2 rounded-md' name="message" id="message" placeholder='Message' cols="30" rows="10"></textarea>
            <button 
            className='bg-[#14274E] rounded-md text-slate-200 border-2 
            px-4 py-2 mx-auto flex justify-center items-center hover:bg-[#00a6ff] hover:text-[#14274E]'>
              Submit.
            </button>
        </form>
    </div>
  )
}

export default Contact