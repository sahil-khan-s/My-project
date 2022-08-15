import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#10239E] sm:h-[120px] h-[200px] sm:flex sm:pl-28 '>
      
<div className='xl:w-[76%] md:w-[70%] sm:w-[60%] mt-8  hidden sm:block'>
<a className='text-4xl  font-bold text-white' href="">ngrok</a>

</div>
<div className='xl:w-[76%] md:w-[70%] sm:w-[60%] pt-4  flex justify-center sm:hidden'>
<a className='text-5xl  font-bold text-white' href="">ngrok</a>

</div>

<div className='sm:block hidden'>
<div className='flex sm:justify-end mt-10  justify-center'>
<div className='w-[70px] h-[30px] bg-[#2E54EA]  sm:block hover:cursor-pointer hover:bg-red-400'>
<button className='pl-3  font-semibold text-white '>Login</button>
</div>
<div className='w-[80px] ml-3 h-[30px] bg-white  sm:block hover:cursor-pointer hover:bg-green-400'>
<button className='pl-3 font-semibold'>Sign Up</button>
</div>
</div>
</div>

<div className=' sm:hidden'>
<div className='flex flex-col  mt-8 items-center  justify-center '>
<div>
<div className='w-[70px] ml-4 h-[30px] bg-[#2E54EA]  sm:block'>
<button className='pl-3  font-semibold text-white'>Login</button>
</div>
<div className='w-[80px] ml-3 mt-5 h-[30px] bg-white  sm:block'>
<button className='pl-3 font-semibold'>Sign Up</button>
</div>
</div>
</div>
</div>

    </div>
  )
}

export default Header
