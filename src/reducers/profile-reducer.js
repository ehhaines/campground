import {createSlice} from "@reduxjs/toolkit";

const profile = {
    username: 'Steve',
    profilePicture: 'yellowstong1.png',
    bannerPicture: 'route1.jpg',
    email: 'sample@gmail.com',
    phone: 6043123123,
    location: 'Sunnyvale, CA',
    dateOfBirth : '01/01/2022',
    numOfTrips: 8,
    dateJoined: '10/2022',
    tripsPlanned: 'trip1, trip2, trip3',
    favoriteParks: 'Yellowstone, Shenandoah',
    friendsList: 'Tom, John, Bob'
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const updatedProfile = action.payload;
            let [username] = updatedProfile.username;
            const email = updatedProfile.email;
            const phone = updatedProfile.phone;
            const location = updatedProfile.location;
            const [year, month, day] = updatedProfile.birthday.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, username, email, phone, location, dateOfBirth}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;