import { useState } from "react";
import data from "projecthon/src/components/data.js"
export default function Accordion(){
    const [selected,Setselected]=UseState(null);
    return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length>0 ? data.map(dataitem=><div className="item">
                    <div className="title">
                        <h3>{dataItem.question}</h3>
                </div>) : <div>No data present</div> 
            }
        </div>
    </div>
}