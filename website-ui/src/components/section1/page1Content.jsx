import React from "react";
import LeftContent from "./leftContent";
import RightContent from "./rightContent";

const Page1Content = (props)=>{
    return (
        <div className=" py-10 px-18 flex  justify-between h-[90vh] gap-10 ">
            <LeftContent />
            <RightContent users={props.users}/>
        </div>
    )
}

export default Page1Content