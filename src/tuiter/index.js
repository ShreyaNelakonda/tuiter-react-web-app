import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import ProfileComponent from "./profile/ProfileComponent";

import {Routes, Route} from "react-router";
import '../vendors/fontawesome/css/all.css';
import './index.css';
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import EditProfile from "./edit-profile/EditProfileComponent";

const store = configureStore({reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});

function Tuiter() {
 return (
 <Provider store={store}>
   <div className="row mt-2">
       <NavigationSidebar active="explore"/>

        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
              style={{"position": "relative"}}>
           <Routes>
           <Route index element={<HomeComponent/>}/>
             <Route path="home"    element={<HomeComponent/>}/>
             <Route path="explore" element={<ExploreComponent/>}/>
             <Route path="profile" element={<ProfileComponent/>}/>
             <Route path="edit-profile" element={<EditProfile/>}/>
           </Routes>
        </div>

     <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       <WhoToFollowList/>
     </div>

   </div>
   </Provider>
 )
}

export default Tuiter;