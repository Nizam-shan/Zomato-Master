import React from "react";
import FoodDelivery from "./FoodDelivery";
import OrderCarousel from "./orderCarousel";

const DeliveryCarousel = () => {
    return (
        <>
       
          <div className="lg:px-6 ">
         
          <div className="lg:bg-gray-200">
          <div className="container p-2 py-5 lg:inline lg:p-2 ">
          <h1 className="font-semibold text-2xl py-3 ml-3">Inspiration for your first order</h1>
                <OrderCarousel />
            </div>
          </div>

          <div className="lg:inline">
          <div className="container p-2 py-5 lg:inline lg:p-2 ">
          <h1 className="font-semibold text-2xl py-3 ml-3">Top Brand For You</h1>
                <OrderCarousel />
            </div>
          </div>
            <div className="lg:hidden">
                <img 
                src="https://b.zmtcdn.com/web/assets/e80201cf2e86a49ce4722e9b5ddfab551620045350.png"
                alt="adImage"
                className=""
                />
            </div>
          </div>
       
        <div className="p-2 ">
       <div>
       <h1 className="text-2xl font-semibold py-4 px-2">Delivery Restaurant in bengaluru</h1>
       </div>
           <div className="p-3  lg:grid grid-cols-3 lg:gap-5 lg:p-4 ">
            <FoodDelivery />
            <FoodDelivery />
            <FoodDelivery />
            <FoodDelivery />
            <FoodDelivery />
            <FoodDelivery />
            <FoodDelivery />
            <FoodDelivery />
           </div>
        </div>

        
        </>
    )
};
export default DeliveryCarousel;