import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group wd-max-width wd-border-curved">
            <li class="list-group-item wd-bg-list fw-bold wd-white">Who to follow</li>
            ${
                                    who.map(who => {
                                        return(WhoToFollowListItem(who));
                                    }).join('')
                                }

            </ul>

`); }
export default WhoToFollowList;