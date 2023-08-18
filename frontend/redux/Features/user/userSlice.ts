import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userAdapter} from "./userSelectors";



const initialState = userAdapter.getInitialState({
    loadingStatus: 'idle',
    error: 'loading',
    user: {},
    selectId: null,
    userAddress: null,
    mapOptions: {
        mapMove: false,
        mapCordCenter: null
    }
});

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserAddress: (state: any, action: PayloadAction<string | null>) => {
            state.userAddress = action.payload || null;
        },
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            console.log('payloaded user:')
            console.log(action.payload)
            console.log('setted user:')
            console.log(state.user)
        },
        setMapOptions: (state, action: PayloadAction<any>) => {
            const {move, center} = action.payload;
            state.mapOptions = {
                mapMove: move !== undefined ? move : state.mapOptions.mapMove,
                mapCordCenter: center !== undefined ? center : state.mapOptions.mapCordCenter
            };
        }
    },
    extraReducers: (builder) => {
        // ...
    }
});

export const {setUserAddress, setUser, setMapOptions} = userSlice.actions;

export default userSlice.reducer;
