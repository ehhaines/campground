import {createSlice} from "@reduxjs/toolkit";
import {banThunk, findAllUsersThunk, loginThunk, logoutThunk, profileThunk, registerThunk, unbanThunk, updateProfileThunk} from "./users-thunks";
import {current} from "@reduxjs/toolkit"

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        currentUser: null,
        error: null
    },
    reducers: {
    },
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            console.log(current(state))
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
            console.log(current(state))
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            console.log(current(state))
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
            console.log(current(state))
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
            console.log(current(state))
        },
        [profileThunk.pending]:
            (state) => {
                state.loading = true;
            },
        [profileThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload
            console.log("profile fulfilled: " + JSON.stringify(current(state)))
        },
        [profileThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
            state.currentUser = null
            console.log("profile rejected" + current(state))
        },
        [updateProfileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            console.log("update profile" + JSON.stringify(current(state)))
        },
        [banThunk.fulfilled]: (state, action) => {
            console.log(`${action.payload} banned`);
        },
        [unbanThunk.fulfilled]: (state, action) => {
            console.log(`${action.payload} unbanned`)
        }
    }
})
export default usersReducer.reducer