import axios from "axios";
import {IUserDetails} from "@/redux/Features/user/user";


export const createUserApi = async ({username, password}: IUserDetails) => {
    const data = {username, password};
    const result: object | any = await axios.post(`http://127.0.0.1:8000/api/registration/`, {
        ...data
    }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return result.data;
};

export const loginUserApi = async ({username, password}: IUserDetails) => {
    const data = {username, password};
    const result: object | any = await axios.post('http://127.0.0.1:8000/api/v1/token/', {
        ...data
    }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return result.data;
};

export const loginUserByIdApi = async ({token}: IUserDetails) => {
    const data = { token }
    console.log('ss', data)
    const result: object | any = await axios.get('http://127.0.0.1:8000/api/get-user-info/', {headers: {'Authorization': `Bearer ${token}`}});
    return result.data;
};
