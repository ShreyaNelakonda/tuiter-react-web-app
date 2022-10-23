import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSideBar = () => {
const {pathname} = useLocation();
const paths = pathname.split('/')
const active = paths[2];

    return(
    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
      <div className="list-group">
            <a className="list-group-item">
            <i className="fab fa-twitter"></i>
            <span className ="d-none d-xl-block wd-link">Tuiter</span></a>

            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
            <i className="fa fa-home"></i>
            <span className ="d-none d-xl-block wd-link">Home</span></Link>

            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`} >
            <i className="fa fa-hashtag"></i>
            <span className ="d-none d-xl-block wd-link">Explore</span></Link>

            <Link to="/" className="list-group-item">
            <i className="fab fa-slack"></i>
            <span className ="d-none d-xl-block wd-link">Labs</span></Link>

            <a className="list-group-item">
            <i className="fa fa-bell"></i>
            <span className ="d-none d-xl-block wd-link">Notification</span></a>

            <a className="list-group-item">
            <i className="fa fa-envelope"></i>
            <span className ="d-none d-xl-block wd-link">Messages</span></a>

            <a className="list-group-item">
            <i className="fa fa-bookmark"></i>
            <span className ="d-none d-xl-block wd-link">Bookmarks</span></a>

            <a className="list-group-item">
            <i className="fa fa-list"></i>
            <span className ="d-none d-xl-block wd-link">Lists</span></a>

            <a className="list-group-item">
            <i className="fa fa-user"></i>
            <span className ="d-none d-xl-block wd-link">Profile</span></a>

            <a class="list-group-item">
            <span class="fa-stack fa-1x wd-margin">
            <i class="fas fa-circle fa-stack-1x"></i>
            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse" ></i>
            </span>
            <span class ="d-none d-xl-block wd-link">More</span></a>
      </div>
      <div className="pt-2 position-relative">
          <form action="tuit.html">
            <button type="button" className="btn btn-primary rounded-pill w-100">Tuit</button>
          </form>
      </div>
    </div>

   );
}
export default NavigationSideBar;