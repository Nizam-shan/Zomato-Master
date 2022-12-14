import React from "react";
import DinningCarousel from "./dinningCarousel";
import DiningDelivery from "./DinningRestaurant";


const Dinning = () => {
    return (
        <>
       <div>
       <DinningCarousel />
       </div>
       <div className="px-2 mt-7 py-3 ">
       <h1 className="text-2xl ml-3 py-2 text-gray-500">Best Dining Location Near you in Bangaluru</h1>
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div>
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div>
       <div className="shadow-xl rounded-md border ">
       <DiningDelivery />
       </div>
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div>
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div>
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div>
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div> 
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div>
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div>
       <div className="shadow-xl rounded-md border">
       <DiningDelivery />
       </div>
       </div>
        </>
    )
}

export default Dinning;