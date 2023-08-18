'use client'

import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface IUserDetails {
    username: string;
    password: string;
    token?: string;
}

interface IUserState {
    loadingStatus: string,
    error: 'string',
    user: object | null,
    selectId: number,
    userAddress: string | null
}

export const createUser = createAsyncThunk(
    "user/createUser",
    async ({username, password}: IUserDetails) => {
        const data = { username, password }
        const result: object | any = await axios.post(`http://127.0.0.1:8000/api/registration/`, data )
        console.log('result: ', result)
        console.log('username: ', username, 'password: ', password)
        return result.data
    }
)
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({username, password}: IUserDetails) => {
        const result: object | any = await axios.post('http://127.0.0.1:8000/api/login_user/', {username, password});
        return result.data
    }
)

export const loginUserById = createAsyncThunk(
    "user/loginUserById",
    async ({token}: IUserDetails) => {
        const result: object | any = await axios.post('http://127.0.0.1:8000/api/auth_user/', {token});
        return result.data
    }
)

const userAdapter = createEntityAdapter()

// user: {
//     user_firstname: 'Алексей',
//         user_lastname: "Чекунов",
//         user_ration: "8.40",
//         user_role: 1,
//         user_avatar: "https://avatars.githubusercontent.com/u/73482583?v=4"
// }, // null
export const userSlice = createSlice({
    name: "userData",
    initialState: userAdapter.getInitialState({
        loadingStatus: 'idle',
        error: 'loading',
        user: {
            user_firstname: 'Алексей',
            user_lastname: "Чекунов",
            user_ration: "8.40",
            user_role: 2,
            user_ecoballs: 165,
            userAddress: 'Ремесленный 6',
            user_avatar: "https://avatars.githubusercontent.com/u/73482583?v=4"
        }, // null
        selectId: 2,
        userAddress: null,
        mapOptions: {
            mapMove: false,
            mapCordCenter: null
        }
    }),
    reducers: {
        setUserAddress: (state, action) => {
            console.log(action.payload)
            state.userAddress = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload[0]
        },
        setMapOptions: (state, action) => {
            console.log(action.payload)
            state.mapOptions = {
                mapMove: action.payload.move != undefined ? action.payload.move : state.mapOptions.mapMove,
                mapCordCenter: action.payload.center != undefined ? action.payload.center : state.mapOptions.mapCordCenter
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state:any) => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state:any, action) => {
                let {user_id, user_name} = action.payload
                state.user = {user_id, user_name}
                state.loadingStatus = 'idle'
                state.error = null

            })
            .addCase(loginUser.rejected, (state:any, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error
            })
            .addCase(createUser.pending, (state:any, action) => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state:any, action) => {
                console.log('установлен ACTION')
                let {user_id, user_name} = action.payload
                state.user = {user_id, user_name}
                state.loadingStatus = 'idle'
                state.error = null
            })
            .addCase(createUser.rejected, (state:any, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error
            })
            .addCase(loginUserById.pending, (state:any, action) => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(loginUserById.fulfilled, (state:any, action) => {
                console.log('установлен user')
                let {user_id, user_name} = action.payload
                state.user = {user_id, user_name}
                state.loadingStatus = 'idle'
                state.error = null
            })
            .addCase(loginUserById.rejected, (state:any, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error
            })
    }
})

export const {setUserAddress, setUser, setMapOptions} = userSlice.actions

export default userSlice.reducer