import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
            <div class="wd-first-container ">
                <div class="wd-first-box">
                    <i class="fa fa-search fa-lg wd-search" aria-hidden="true"></i>
                    <input class="wd-search-rounded wd-search-white wd-placeholder" type="text" placeholder="Search Tuiter">
                </div>
                <div class="wd-second-container container-fluid col-2">
                    <form action="explore-settings.html">
                        <button class="wd-gear-class">
                            <i class="fas fa-cog fa-2x wd-gear"></i>
                        </button>
                    </form>
                </div>
            </div>

           <div class="col wd-width-percent wd-set-nav">
               <ul class="nav nav-tabs col-12 col-md-12 col-lg-12 col-xl-12">
                   <li class="nav-item">
                       <a class="nav-link active wd-override-active" style="background-color:#0275d8 ; color :white" href="for-you.html">For-you</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link wd-grey" href="trending.html">Trending</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link wd-grey" href="news.html">News</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link wd-grey" href="sports.html">Sports</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link wd-grey d-xs-none d-sm-none d-md-block" href="entertainment">Entertainment</a>
                   </li>
               </ul>
           </div>
           <div>
               <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="wd-width-more pt-3"
                    alt="Responsive image">
               <div class="wd-overlay">
                   <h4 class="fw-bold wd-white">SpaceXs Starship</h4>
               </div>
           </div>
           ${PostSummaryList()}
    `);
}

export default ExploreComponent;