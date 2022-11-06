import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({
    tuits = {
    "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

    }
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item border">
            <div className="row">
                <div className="col-1">
                    <img className="wd-round-image"
                         src={tuits.avatar} height="40px" width="40px" className="rounded-circle" alt=""/>
                </div>
                <div className="col-11">
                    <div className="ms-3 ms-lg-0">
                        <b>{tuits.userName}
                            <i className="text-primary fa-sharp fa fa-check-circle"></i>
                        </b>
                        <span className="text-secondary"> {tuits.handle} . {tuits.time} </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuits._id)}> </i>
                    </div>

                    <div className="ms-3 ms-lg-0 wd-text-align">
                        {tuits.tuit}
                    </div>
                    <TuitStats tuits={tuits}/>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;