import React from "react";

const PostItem = (
{
     posts = {
     "avatarIcon": "data:image/jpeg;base64,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",
         "userName": "Elon Musk",
         "handle" :"@elonmusk",
         "time": "23h",
         "caption":"Amazing show about Inspiration4x mission!",
         "image": "https://pbs.twimg.com/media/FL5vqDMWUA8qyMp?format=jpg&name=900x900",
         "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
         "content":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
         "comments":"4.2k",
         "retweets":"3.5k",
         "likes":"37.5k"
     }
 }) =>  {

return(
<li className="list-group-item">
    <div className="col-11">
        <div className ="row">
            <div className="col-2">
               <img src = {posts.avatarIcon} className="rounded-circle" height={50} width={50}/>
            </div>

            <div className="col-8 d-inline wd-home">
                <div className ="col">
                    <div>
                        <p className = "fw-bold d-inline">{posts.userName}</p><i className="fa fa-check-circle d-inline p-2"></i>
                        <p className = "d-inline">{posts.handle}</p>
                        <p className = "d-inline">-{posts.time}</p>
                    </div>
                </div>

                <div className="wd-caption">
                    <p>{posts.caption}</p>
                </div>
            </div>
            <div className ="col-2">
                <i className="fa fa-ellipsis-h fa-lg wd-ellipsis-right"></i>
            </div>

            <div className="wd-img position-relative">
                 <img src = {posts.image} className="border rounded-3 img-fluid"/>
            </div>

            <div>
                <div className="wd-share">
                    <div>
                        <form action="#">
                            <i className="fa fa-thin fa-comment"> {posts.comments}</i>
                        </form>
                    </div>
                    <div>
                        <form action="#">
                            <i className="fa fa-thin fa-retweet"> {posts.retweets}</i>
                        </form>
                    </div>
                    <div>
                        <form action="#">
                            <i className="fa fa-solid fa-heart"> {posts.likes}</i>
                        </form>
                    </div>
                    <div>
                        <form action="#">
                            <i className="fas fa-upload"></i>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
 </li>
 );

}
export default PostItem;