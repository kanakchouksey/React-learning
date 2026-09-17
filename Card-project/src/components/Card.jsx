import React from "react";
import { Bookmark } from 'lucide-react'
const Card = (props)=>{
    return (
        <div>
            <div className='card'>
        <div className="top">
          <img src={props.brandLogo} alt="image" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        {/* companyName={ele.companyName} brandLogo={ele.brandLogo} datePosted = {ele.datePosted}
     post={ele.post} tag1 = {ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location} */}

        <div className="center">
          <h3>{props.companyName} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className="h4div">
            <h4>{props.tag1}</h4>

            <h4>{props.tag2}</h4>
          </div>

        </div>

          <div className="bottom">
        <div>
         
            <h3>{props.pay}</h3>
            <p>
                {props.location}
            </p>


     

          

        </div>
        <button>Apply now</button>
      </div>
</div>
        </div>
    )
}

export default Card;