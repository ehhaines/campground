import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Steve',
    lastName: 'B',
    profilePicture: 'yellowstong1.png',
    bannerPicture: 'route1.jpg',
    bio: 'Software Engineer, Music, Travel',
    website: 'youtube.com/webdevtv',
    location: 'Sunnyvale, CA',
    dateOfBirth : '01/01/2022',
    dateJoined: '10/2022',
    followingList: 'a',
    followersList: 'b'
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const updatedProfile = action.payload;
            let [firstName, ...lastName] = updatedProfile.name.split('/');
            lastName = lastName.join(' ');
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.birthday.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;