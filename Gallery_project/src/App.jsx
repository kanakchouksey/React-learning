import React, { use, useEffect, useState } from "react";
import axios from "axios";

const App = () => {


  const [data, setData] = useState([])

  const [index,setIndex] = useState(1)

  const getdata = async () => {
    const api = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setData(api.data);


  }

  useEffect(function(){
    getdata();
  },[index])

  let printdata = <h3 className="text-sm text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>

  if (data.length > 0) {
    printdata = data.map(function (elem, idx) {
      return (

        <a href={elem.url}>
          <div>

            <div className="h-40 w-44 bg-white rounded-xl overflow-hidden">
              <img className="h-full w-full object-cover"
                src={elem.download_url}
                alt={idx} />
            </div>
            <h1 className="font-bold text-xl">{elem.author}</h1>
          </div>

        </a>
      )


    })

  }

  return (
    <div className="bg-black h-full w-screen p-4 text-white">
      
      <div className="flex flex-wrap gap-4 h-full ">

        {printdata}

      </div>

      <div className="flex justify-center items-center p-4 gap-5">
        <button 
        style={{opacity:index==1?0.5:1}}
        className="bg-amber-400 p-5 text-black  rounded-2xl hover:zoom-125" onClick={()=>{
          if(index>1){
          
          setIndex(index-1)
          setData([])
          }

        }}>prev</button>
        <h1>page {index}</h1>
         
        <button className="bg-amber-400 p-5 text-black rounded-2xl  hover:zoom-125" onClick={()=>{
          
            setIndex(index+1)

        }}>next</button>
      </div>



    </div>
  )
}

export default App