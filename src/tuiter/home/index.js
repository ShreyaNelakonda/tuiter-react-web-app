import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import PostSummaryList from "../post-summary-list";
import PostList from "../post-list";
import TuitList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";


const HomeScreen = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeScreen;