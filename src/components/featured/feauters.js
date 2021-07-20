import React from "react";
import Carusel from "./carusel";
import TimeUntil from "./timeUntil";

const Featured = () => {
    return(
        <div className="featured_container">
            <Carusel/>
            <div className="artist_name">
                <div className="wrapper">
                    Temo Pkhaladze
                </div>
            </div>
            <TimeUntil/>
        </div>
    )
}

export default Featured;