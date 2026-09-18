import React from "react";
import RightCard from './rightcard'


const RightContent = (props) => {
    return (
        <div id="right" className="h-full flex flex-nowrap  gap-3 w-2/3 py-6 px-6 overflow-x-auto">
            {
                props.users.map(function(elem,idx){
                   return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
            

                })

            
           
}

        </div>
    )
}

export default RightContent