import React, { useState } from 'react'

const App = ()=>{

  const [num,setNum] = useState(0);

    function increase(){
      setNum(num+1)

    }

    function decrease(){
      setNum(num-1);
    }


  return (
   <div className='flex flex-col items-center justify-center gap-10 p-20'>
    <h1 className='text-4xl bg-green-950 text-white h-20 w-20 px-5 py-5 text-center '>{num}</h1>

    <div>
   <button onClick={increase} className='h-20 w-50 bg-green-200 p-5 m-20 text-lg rounded-full'>Increase</button>
   <button onClick={decrease} className='h-20 w-50 bg-green-200 p-5 m-20 text-lg rounded-full'>decrease</button>
   </div>
   </div>
    
  )
}

export default App