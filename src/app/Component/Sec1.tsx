import React from 'react'
import Image from "next/image";
const Sec1 = () => {
  return (
    <div id='BM-STORE'> 
    <br />
    <h2 className='text-center backdrop-blur-lg bg-slate-500 text-black'>Watchs</h2> 
    <br />
     <main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center '>

<Image src="/watchno1rs800.PNG" width={300} height={300} alt="Watch 1" ></Image>

<p className='text-center'>Strap Leather Watch</p>

<p className='text-center py-2'>price 800</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 2nd */}

<div className='w-full md:w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno2rs650.PNG" width={300} height={300} alt="Watch 2" ></Image>

<p className='text-center'>Brown Strap Watch</p>

<p className='text-center py-2'>price 650</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 3rd */}

<div className='w-full md:w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno4rs1500.png" width={300} height={300} alt="Watch 4" ></Image>

<p className='text-center'>Couple Watch</p>

<p className='text-center py-2'>price 1500</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

</main>

<br />

<main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center '>

<Image src="/watchno3rs2450.png" width={300} height={300} alt="Watch 3" ></Image>

<br />

<p className='text-center'>Golden Chain Watch</p>

<p className='text-center py-2'>price 2450</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 5ft */}

<div className='w-full md:w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno5rs1200.png" width={300} height={300} alt="Watch 5" ></Image>

<br />

<p className='text-center'>Black Chain Watch</p>

<p className='text-center py-2'>price 1200</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 6st */}

<div className='w-full md:w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno6rs2600.PNG" width={300} height={300} alt="Watch 6" ></Image>

<p className='text-center'>Stylish Chain Watch</p>

<p className='text-center py-2'>price 2600</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

</main>

</div>
    )
}

export default Sec1
