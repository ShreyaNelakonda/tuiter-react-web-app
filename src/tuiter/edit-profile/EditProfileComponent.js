import {useSelector} from "react-redux";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {editProfile} from "../profile/profile-reducer";
import ProfileImages from "../profile/profile-images";


const EditProfileComponentList = () => {
    let profileInfo = useSelector(state => state.profile)
    let [profile, setprofile] = useState(profileInfo);

    const editedProfile = (name, value) => {
        const newData = {
            ...profile
        }
        if (name === 'name') {
            const Name = value.split(' ');
            for (let i = 0; i < Name.length; i++) {
                if (i === 0) {
                    newData['firstName'] = Name[i];
                } else {
                    newData['lastName'] = Name[i];
                    break;
                }
            }
        } else {
            newData[name] = value;
        }
        setprofile(newData)
    }

    const dispatch = useDispatch();
    const editProfileReducer = () => {
        dispatch(editProfile(profile));
    }

    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <Link to={"/tuiter/profile"} className="text-black">
                        <i class="fab fa-regular fa-x"></i>
                    </Link>
                </div>
                <div className="col-8">
                    <span className="h5 fw-bold">Edit Profile</span> <br/>
                </div>
                <div className="col-3">
                    <Link onClick={editProfileReducer} to={"/tuiter/profile"}
                          className="btn btn-dark rounded-pill float-end w-50">
                        <span className="button-text d-none d-sm-block d-md-none"
                              style={{marginLeft: "-6px"}}>Save</span>
                        <span className="button-text d-none d-md-block d-lg-none"
                              style={{marginLeft: "0px"}}>Save</span>
                        <span className="button-text d-none d-lg-block d-xl-none"
                              style={{marginLeft: "-3px"}}>Save</span>
                        <span className="button-text d-none d-xl-block d-xxl-none"
                              style={{marginLeft: "-2px"}}>Save</span>
                        <span className="button-text d-none d-xxl-block"
                              style={{marginLeft: "-1px"}}>Save</span>
                        <b className="button-text d-block d-sm-none">S</b>
                    </Link>
                </div>
            </div>
            <div className="mt-1">
                <ProfileImages profile={profile}/>
            </div>
            <br/>
            <div className="position-relative mt-4">
                <span className="position-absolute ps-2 text-secondary" style={{fontSize: "13px"}}>
                    Name
                </span>
                <input className="pt-3 ps-2 form-control rounded"
                       value={`${profile.firstName} ${profile.lastName}`}
                       onChange={(event) => editedProfile('name', event.target.value)}/>
            </div>
            <br/>
            <div className="position-relative mt-2">
                <span className="position-absolute ps-2 text-secondary" style={{fontSize: "13px"}}>
                    Bio
                </span>
                <input className="pt-3 ps-2 form-control rounded"
                       value={profile.bio}
                       onChange={(event) => editedProfile('bio', event.target.value)}/>
            </div>
            <br/>
            <div className="position-relative mt-2">
                <span className="position-absolute ps-2 text-secondary" style={{fontSize: "13px"}}>
                    Location
                </span>
                <input className="pt-3 ps-2 form-control rounded"
                       value={profile.location}
                       onChange={(event) => editedProfile('location', event.target.value)}/>
            </div>
            <br/>
            <div className="position-relative mt-2">
                <span className="position-absolute ps-2 text-secondary" style={{fontSize: "13px"}}>
                    Website
                </span>
                <input className="pt-3 ps-2 form-control rounded"
                       value={profile.website}
                       onChange={(event) => editedProfile('website', event.target.value)}/>
            </div>
            <br/>
            <div className="position-relative mt-2">
                <span className="position-absolute ps-2 text-secondary" style={{fontSize: "13px"}}>
                    Birth Date
                </span>
                <input type="date" className="pt-3 ps-2 form-control rounded"
                       value={profile.dateOfBirth}
                       onChange={(event) => editedProfile('dateOfBirth', event.target.value)}/>
            </div>
        </div>
    );
}

export default EditProfileComponentList;