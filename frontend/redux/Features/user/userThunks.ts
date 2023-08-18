import {createAsyncThunk} from "@reduxjs/toolkit";
import {createUserApi, loginUserApi, loginUserByIdApi} from "@/api/userApi";
import {IUserDetails} from "@/redux/Features/user/user";
import {setUser} from "@/redux/Features/user/userSlice";

export const createUser = createAsyncThunk(
    "user/createUser",
    async ({username, password}: IUserDetails, thunkAPI) => {
        const data = await createUserApi({username, password});
        if (data) return await thunkAPI.dispatch(loginUser({username, password}));
        return false;
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({username, password}: IUserDetails, thunkAPI) => {
        const data = await loginUserApi({username, password});
        const token = data?.access
        localStorage.setItem('token', token)
        if (data.access) return await thunkAPI.dispatch(loginUserById({token}));
        return data;
    }
);

export const loginUserById = createAsyncThunk(
    "user/loginUserById",
    async ({token}: IUserDetails, thunkAPI) => {
        console.log(token)
        const data = await loginUserByIdApi({token});
        if (data) {
            return thunkAPI.dispatch(setUser(data))
        } else return false
    }
);
