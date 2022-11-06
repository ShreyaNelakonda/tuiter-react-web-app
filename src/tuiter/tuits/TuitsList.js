import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem.js";

const TuitsList = () => {
    const tuitList = useSelector(state => state.tuits)
    return (
        <div className="list-group">
            {
                tuitList.map(post => <TuitItem key= {post._id} tuits={post}/>)
            }
        </div>
    );
};

export default TuitsList;