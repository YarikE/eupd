import { createEntityAdapter, createSelector, EntityState } from "@reduxjs/toolkit";

interface IUserDetails {
    username: string;
    password: string;
    token?: string;
}

interface IUserState {
    loadingStatus: string;
    error: 'string';
    user: object | null;
    selectId: number | null;
    userAddress: string | null;
}

const userAdapter = createEntityAdapter();


export { userAdapter };
