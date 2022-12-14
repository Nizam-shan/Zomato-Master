import React from "react";
import { GrUserWorker } from "react-icons/gr"

import {IoMdArrowDropdown} from "react-icons/io"
import {HiLocationMarker} from "react-icons/hi"
import {BsSearch} from "react-icons/bs"
import {RxDividerVertical} from "react-icons/rx"

const NavSm = () => {
    return (
        <>
            <div className="lg:hidden py-1 flex justify-between items-center px-2 shadow-lg ">
                <div className="ml-5 w-24 h-6  ">
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                    alt="smallLogo"
                    className="w-full h-full"
                    />
                </div>
                <div className="flex gap-5 items-center">
                    <button className="border border-2 rounded-full w-24 h-10 bg-Zomato-400 text-white">Use App</button>
                    <span className="border border-2 rounded-full w-14 h-14 p-2 bg-blue-200">
                    <GrUserWorker className="w-8 h-8" />
                    </span>
                       
                    
                </div>

            </div>
        </>
    )
};

const NavBig = () => {
    return (
        <>
            
                <div className="lg:flex hidden py-3 gap-8">
                    <div className="ml-28 py-5 w-32 items-center">
                        <img 
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                        alt="biglogo"
                        className=""
                        />
                    </div>
                  <div className="w-2/4 bg-white shadow-2xl rounded-md flex items-center gap-3 h-14 border border-1">
                    <div className="flex gap-5 items-center px-4">
                  <span className="text-Zomato-400">
                  <HiLocationMarker />   
                  </span>
                  <input 
                  type="search"
                  placeholder="Kodagu,Ammathi"
                  className="focus:outline-none"
                  />
                  <IoMdArrowDropdown /> 
                  <span>
                  <RxDividerVertical className=" h-6 w-6"/>
                  </span>
                  
                    </div>
                    <div className="flex gap-5 items-center">
                    <span >
                    <BsSearch />
                  </span>
                  <input 
                  type="search"
                  placeholder="Kodagu,Ammathi"
                  className="focus:outline-none"
                  />
                    </div>

                  </div>
                  <div className="flex py-2 gap-5">
                    <a className="text-xl text-gray-500">Log in</a>
                    <a className="text-xl text-gray-500">Sign up</a>
                  </div>


                    </div>
                   
                   

               


             
         
               
            
           
         
                  
                
                  
                        
                    
                
            
        </>
    )
};


const Navbar = () => {
    return (
        <>
        <NavSm />
        <NavBig />
        </>
    )
};

export default Navbar;