import React from "react";
import PostItem from "./post-item.js";
import posts from "./posts.json"

const PostList = (who) => {
 return(
   <ul className="list-group">
     {
       posts.map(posts =>
         <PostItem
           key={who._id} posts={posts}/> )
     }
   </ul>
 );
};
export default PostList;