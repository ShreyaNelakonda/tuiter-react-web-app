
const PostSummaryItem = (posts) =>  {
return(`
    <div class="wd-moveup rounded wd-main-bg wd-grey-border">
        <div class="row p-4">
            <div class="col-10">
                    <div class="row wd-margin-top-one text-secondary">
                        ${posts.topic}
                    </div>
                    <div class="row d-inline-block">
                         <p><span class="fw-bolder wd-move-right wd-white">${posts.userName}</span>
                         <i class="fa fa-check-circle wd-white"></i>
                         <span class="text-secondary wd-lightgrey">-${posts.time}</span></p>
                    </div>
                    <div class="row fw-bold wd-margin-top-one wd-white">
                        ${posts.title}
                    </div>
                    <div class="row text-secondary">
                        ${posts.tweets}
                    </div>
            </div>
            <div class="col-2">
                <img src= ${posts.image} class="img-fluid"/>
            </div>
        </div>
    </div>
 `);
}

export default PostSummaryItem;