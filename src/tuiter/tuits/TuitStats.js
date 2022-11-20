import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "disliked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 0,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    return(
            <div className="row mt-2">
                <div className="col">
                    <i className="bi bi-chat me-2"></i> {tuit.replies}
                </div>
                <div className="col">
                    <i className="bi bi-arrow-repeat me-2"></i> {tuit.retuits}
                </div>
                <div className="col">
                    <i onClick={() => dispatch(
                        updateTuitThunk({
                           ...tuit,
                           likes: tuit.likes + 1,
                           liked: true,
                         }))}
                       className={`bi
                    ${
                           tuit.liked === true
                           ? "bi-heart-fill text-danger"
                           : "bi-heart"
                       }`}></i> {tuit.likes}
                </div>
                <div className="col">
                    <i onClick={() => dispatch(
                        updateTuitThunk({
                                            ...tuit,
                                            dislikes: tuit.dislikes === undefined ? 1 : tuit.dislikes + 1,
                                            disliked: true,
                                        }))}
                       className={`bi
                    ${
                           tuit.disliked === true
                           ? "bi-hand-thumbs-down-fill text-primary"
                           : "bi-hand-thumbs-down"
                       }`}></i> {tuit.dislikes === undefined ? 0 : tuit.dislikes}
                </div>
                <div className="col">
                    <i className="bi bi-share"></i>
                </div>
            </div>
    );
};
export default TuitStats;