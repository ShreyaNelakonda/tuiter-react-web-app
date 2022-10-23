import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index";
import ExploreComponent from "./explore";
import HomeComponent from "./home";

import {Routes, Route} from "react-router";
import '../vendors/fontawesome/css/all.css';
import './index.css';

function Tuiter() {
 return (
   <div className="row mt-2">
       <NavigationSidebar active="explore"/>

        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
              style={{"position": "relative"}}>
           <Routes>
             <Route path="home"    element={<HomeComponent/>}/>
             <Route path="explore" element={<ExploreComponent/>}/>
           </Routes>
        </div>

     <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       <WhoToFollowList/>
     </div>

   </div>
 );
}

export default Tuiter;
