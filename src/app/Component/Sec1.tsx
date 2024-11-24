import React from 'react'
import Image from "next/image";
const Sec1 = () => {
  return (
    <>
    
    <br />    
    <h2 className='text-center backdrop-blur-lg bg-slate-500 text-white'>Watchs</h2> 
    <br />
     <main className='flex justify-around md:flex-row '>
     
     <div className='w-3/12 border-black border-2 bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno1rs800.PNG"  width={300} height={300}  alt="watch no 1" ></Image>

<p className='text-center'>Strape Styles Watch</p>

<p className='text-center py-2'>Rs 930</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

{/* 2nd */}

<div className='w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno2rs650.PNG"  width={300} height={300}  alt="watch no 2" ></Image>

<p className='text-center'>Leather Styles Watch</p>

<p className='text-center py-2'>Rs 650</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

{/* 3rd */}

<div className='w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno3rs2450.png"  width={300} height={300}  alt="watch no 3" ></Image>


<p className='text-center'>Premium Silver  Watch</p>

<p className='text-center py-2'>Rs 2450</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

</main>

<br />

     <main className='flex justify-around md:flex-row '>
     
     <div className='w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno4rs1500.PNG"  width={350} height={300}  alt="watch no 4" ></Image>

<br />

<p className='text-center'> Couple Stylish Chain Watch</p>

<p className='text-center py-2'>Rs 1300</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

{/* 5nd */}

<div className='w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno5rs1200.png"  width={300} height={300}  alt="watch no 5" ></Image>

<br />
<br />

<p className='text-center'>  Premium Watch</p>

<p className='text-cente, py-2'>Rs 1200</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

{/* 6rd */}

<div className='w-3/12 border-black border-2  bg-slate-600 flex flex-col justify-center items-center'>

<Image src="/watchno6rs3600.PNG"  width={300} height={300}  alt="watch no 6" ></Image>

<p className='text-center'> Permium GC Watch</p>

<p className='text-center py-2'>Rs 3600</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

</main>
   </>
  )
}

export default Sec1
