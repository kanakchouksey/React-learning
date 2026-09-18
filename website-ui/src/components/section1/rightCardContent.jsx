import React from "react";

const RightCardContent = (props) => {
    return (
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between " >
            <h1 className="h-10 w-10 flex justify-center items-center bg-white rounded-full text-2xl font-semibold">{props.id+1}</h1>
            <div>
                <p className="text-white text-lg mb-10">{props.intro}</p>

                <div className="flex justify-between">
                    <button className="bg-blue-400 rounded-full text-lg text-white  font-medium px-7 py-3">{props.tag}</button>
                    <button className=" bg-blue-400 rounded-full text-lg text-white  font-medium px-4 py-3"><i className="ri-arrow-right-long-line"></i></button>
                </div>
            </div>
        </div>

    )
}

export default RightCardContent