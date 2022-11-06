import {createSlice} from "@reduxjs/toolkit";

let userProfile = {
    firstName: 'Rosa',
    lastName: 'Diaz',
    handle: '@rosadiaz',
    profilePicture: 'jose.png',
    bannerPicture: 'polyglot.png',
    bio: 'NYPD Detective, Leader of the Anti-Drug Task Force, '
         + 'Investigation and Law Enforcement.',
    website: 'youtube.com/diazrosa',
    location: 'Brooklyn, NY',
    dateOfBirth: '1987-07-18',
    dateJoined: '08/2008',
    followingCount: 413,
    followersCount: 198
};

const profileSlice = createSlice({
                                 name: 'userProfile',
                                 initialState: userProfile,
                                 reducers: {
                                     editProfile(state, action) {
                                         return action.payload;
                                     }
                                 }
                             });

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;