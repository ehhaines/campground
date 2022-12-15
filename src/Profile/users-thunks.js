import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, register, login, logout, profile, updateProfile, ban, unban, makeRanger, demoteRanger} from "./users-service";
export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)
export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const updateProfileThunk = createAsyncThunk(
    'updateProfile',
    async (thunkAPI) => {
        return await updateProfile(thunkAPI)
    }
)

export const banThunk = createAsyncThunk(
    'ban',
    (username) => ban(username)
);

export const unbanThunk = createAsyncThunk(
    'unban',
    async (username) => await unban(username)
);

export const makeRangerThunk = createAsyncThunk(
    'makeRanger',
    async (username) => await makeRanger(username)
);

export const demoteRangerThunk = createAsyncThunk(
    'demoteRanger',
    async (username) => await demoteRanger(username)
);