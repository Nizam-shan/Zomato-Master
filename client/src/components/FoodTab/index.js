import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {GiSchoolBag} from "react-icons/gi"
import {IoFootsteps} from "react-icons/io5"
import {MdNightlife} from "react-icons/md"


const MobileTab = () => {

    const [alltypes] = useState ([
        {
            id:"Delivery",
            icon:<GiSchoolBag />,
            name:"Delivery"
        },
        {
            id:"Dining out",
            icon:<IoFootsteps />,
            name:"Dining out"
        },
        {
            id:"Night life",
            icon:<MdNightlife />,
            name:"Night life"
        },
    ])

    const {type} = useParams();
    return(
        <>
        <div className="lg:hidden fixed bottom-0 flex bg-white shadow-inner justify-around w-full text-gray-600 md:justify-evenly z-10 p-3 items-center">
            {alltypes.map((items)=>(
                <Link to={`/${items.id}`}>
                <div className={
                    type===items.id
                    ? "flex flex-col relative items-center text-Zomato-400"
                    : "flex flex-col items-center text-xl"
                }>
                    <div
                        className={
                            type===items.id &&
                            "border-t-2 -top-3  absolute w-full border-Zomato-400"
                        }
                    />
                    {items.icon}
                    <h5 className="text-sm">{items.name}</h5>

                </div>
                
                </Link>
            ))}


        </div>
        </>
    )
}

const BigScreen = () => {
    const {type} = useParams();
    const [alltypes] = useState([
        {
            id:"Delivery",
            DefaultImage : 
            "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            ActiveImage :
            "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name:"Delivery"
        },
        {
            id:"Dining out",
            DefaultImage :
            "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            ActiveImage:
            "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name:"Dining Out"
        },
        {
            id:"Night out",
            DefaultImage:
            "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            ActiveImage:
            "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name:"Night Out"
        }
    ]);
    return (
        <>
        <div className="hidden lg:flex justify-evenly gap-3 items-center py-8 ">
            {alltypes.map((items) => (
                <Link to={`${items.id}`}>
                    <div className={
                        type===items.id 
                        ? "flex border-b-2 border-Zomato-400 items-center gap-5"
                        : " flex items-center gap-5"
                    }>
                       <div className="w-16 h-16 bg-gray-100 p-4 rounded-full"
                       >
                        <img 
                        src={  type===items.id
                            ? items.ActiveImage :items.DefaultImage}
                            alt="bigfood"
                            className="w-full h-full"
                        />
                       </div>
                       <h3 className={
                        type===items.id
                        ? "text-xl text-Zomato-500 items-center"
                        : "text-xl items-center"
                       }>{items.name}</h3>


                    </div>
                </Link>
            ))}

        </div>
        </>
    )
}

const FoodTab = () => {
    return (
        <>
        <MobileTab />
        <BigScreen />
        </>
    )
}

export default FoodTab;