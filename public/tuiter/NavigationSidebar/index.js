const NavigationSideBar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item wd-list-color">
                    <i class="fab fa-twitter"></i></a>

                    ${active === 'home'?
                    `<a href="../HomeScreen/index.html" class="list-group-item wd-list-color list-group-item-action active wd-override-active" aria-current="true">`
                     : ` <a href="../HomeScreen/index.html" class="list-group-item wd-list-color list-group-item-action d-print-inline">
                     `}
                     <i class="fa fa-home wd-white"></i>
                     <span class ="d-none d-xl-block wd-first-col">Home</span></a>

                     ${active === 'explore'?
                     `<a href="../explore/index.html" class="list-group-item wd-list-color list-group-item-action active wd-override-active" aria-current="true">`
                      : `<a href="../explore/index.html" class="list-group-item wd-list-color list-group-item-action d-print-inline">
                      `}
                    <i class="fa fa-hashtag wd-white"></i>
                    <span class ="d-none d-xl-block wd-first-col">Explore</span></a>

                <a href="notifications.html" class="list-group-item wd-list-color list-group-item-action ">
                    <i class="fa fa-bell wd-white"></i>
                    <span class ="d-none d-xl-block wd-first-col">Notification</span></a>
                <a href="messages.html" class="list-group-item wd-list-color list-group-item-action">
                    <i class="fa fa-envelope wd-white"></i>
                    <span class ="d-none d-xl-block wd-first-col wd-first-col">Messages</span></a>
                <a href="bookmarks.html" class="list-group-item wd-list-color list-group-item-action">
                    <i class="fa fa-bookmark wd-white"></i>
                    <span class ="d-none d-xl-block wd-first-col">Bookmarks</span></a>
                <a href="lists.html" class="list-group-item wd-list-color list-group-item-action">
                    <i class="fa fa-list wd-white"></i>
                    <span class ="d-none d-xl-block wd-first-col">Lists</span></a>
                <a href="profile.html" class="list-group-item wd-list-color list-group-item-action">
                    <i class="fa fa-user wd-white"></i>
                    <span class ="d-none d-xl-block wd-first-col">Profile</span></a>

                <a href="#" class="list-group-item wd-list-color list-group-item-action">
                    <span class="fa-stack fa-1x wd-set-padding">
                    <i class="fas fa-circle fa-stack-1x wd-white"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x wd-black" ></i></span>
                    <span class ="d-none d-xl-block wd-first-col wd-set-height">More</span></a>
            </div>

            <div class="pt-2 position-relative">
                 <form action="tuit.html">
                     <button type="button" class="btn btn-primary rounded-pill w-100 wd-view-port">Tuit</button>
                 </form>
            </div>
    `);
}
export default NavigationSideBar;