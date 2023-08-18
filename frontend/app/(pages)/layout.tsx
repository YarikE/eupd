import React from 'react';
import {PageModule} from "@/app/(pages)/PageModule";
import './profile/page'

const Layout = ({
                    children,
                }: {
    children: React.ReactNode;
}) => {
    return (
        <PageModule>
            {children}
        </PageModule>
    );
};

export default Layout;