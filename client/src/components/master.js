import React from "react";

import { useParams } from "react-router-dom";
import Delivery from "./Delivery";
import Dinning from "./Dinning";

const Master = () => {
    const {type} = useParams();
    return (
        <>
            <div>
                {type==="Delivery" && <Delivery />}
                {type==="Dining out" && <Dinning />}
            </div>
        </>
    )
};
export default Master;