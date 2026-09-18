import React from "react";
import RightCardContent from "./rightCardContent";

const RightCard = (props) => {
    return (
        <div className=" shrink-0 h-full w-80 rounded-4xl overflow-hidden relative">
            <img className="w-full h-full object-cover" src={props.img} alt="image" />
            <RightCardContent id={props.id} intro={props.intro} tag={props.tag}/>

        </div>
    )
}

export default RightCard