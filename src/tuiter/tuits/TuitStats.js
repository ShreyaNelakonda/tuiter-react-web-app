import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

const TuitStats = ({tuits}) => {
    let [liked, setLiked] = useState(tuits.liked);
    const changeLiked = () => {
        setLiked(!liked)
    }

    return (
        <div className="row ms-1 mt-3 text-secondary">
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="fa fa-regular fa-comment"></i> &nbsp;
                    <span> {tuits.comments} </span>
                </Link>
            </div>



            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="fa fa-thin fa-retweet"></i> &nbsp;
                    <span > {tuits.retuits} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link onClick={changeLiked} className="nav-link" to={""}>
                    {
                        liked && <i className="fa fa-solid fa-heart text-danger"></i>
                    }
                    {
                        !liked &&
                        <i className="fa fa-solid fa-heart"></i>
                    }
                    &nbsp;
                    <span> {tuits.likes} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="fas fa-upload"></i>
                </Link>
            </div>
        </div>
    )
}

export default TuitStats;