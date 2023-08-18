'use client'

import React, {useState} from 'react';
import Slides from "@/app/components/Auth/Slides";
import Features from "@/app/components/Auth/Features";
import Auth from "@/app/components/Auth/Auth";
import UserSettings from "@/app/components/Auth/UserSettings";
import {AuthModule} from "@/app/(auth)/auth/auth.module";
import Register from "@/app/components/Auth/Register";

export default function Page() {
    const [view, setView] = useState('Brief')

    const ViewContent = () => {
        if (view === 'Brief') return <Slides setView={setView}/>
        else if (view === 'Features') return <Features setView={setView}/>
        else if (view === 'Login') return <Auth setView={setView}/>
        else if (view === 'Register') return <Register setView={setView}/>
        else if (view === 'UserSettings') return <UserSettings/>
    }
    return (
        <AuthModule>
            <ViewContent/>
        </AuthModule>
    );
};