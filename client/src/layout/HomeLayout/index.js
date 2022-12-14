import React from "react";
import FoodTab from "../../components/FoodTab";
import Navbar from "../../components/Navbar";

const HomeLayout = (props) => {
    return (
        <>
            <div className="container mx-auto">
                <Navbar />
                <FoodTab />
            {props.children}
            
            </div>
        </>
    )
};


export default HomeLayout;
