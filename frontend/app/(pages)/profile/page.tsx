'use client'
import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {ProfileModule} from "@/app/(pages)/profile/profile.module";
import UserProfile from "@/app/(pages)/profile/UserProfile";
import OrganizationProfile from "@/app/(pages)/profile/OrganizationProfile";
import {RootState} from "@/redux/store";
import {IUserDetails} from "@/redux/Features/user/user";



const Page = () => {
    const user = useSelector((state: RootState) => state.user.user) as IUserDetails;

    const renderProfileByRole = () => {
        if(user.user_role === 1){
            return <UserProfile user={user} />
        }
        else if(user.user_role === 2){
            return <OrganizationProfile user={user}/>
        }else {
            return <p>Rendering...</p>
        }
    }
    return (
        <ProfileModule className="panel profile">
            <div className="mobile-wrapper">
                <h1 className="title">Ваш профиль</h1>
                <div className="avatar">
                    <b>Аватар</b>
                    <div className="avatar-content">
                        <div className="avatar-content_image"
                             style={{backgroundImage: `url(${user.user_avatar && 'https://freelance.habr.com/assets/default/users/avatar_r100-510ec240a9384f321c7075c46962f4fad15dd58cd22cd41d7f1ca9b2e1732c00.png'})`}}></div>
                        <button>Загрузить новое изображение</button>
                    </div>
                    <p>Максимально допустимый размер - 1 МБ. Разрешенные форматы JPG, PNG и GIF.</p>
                </div>
                {
                    renderProfileByRole()
                }
            </div>
        </ProfileModule>
    );
};

export default Page;