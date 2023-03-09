import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import NavbarAdmin from '../components/admin/NavbarAdmin';
import SidebarAdmin from '../components/admin/SidebarAdmin';
import { localvalue } from '../configurations/localvalue';
import { routing } from '../configurations/routing';

const LayoutAdmin = () => {
    // localStorage.setItem(localvalue.tokenLogin, `${response.data.key}`);
    // localStorage.setItem(localvalue.nameLogin, `${response.data.data.firstname} ${response.data.data.lastname}`);
    // localStorage.setItem(localvalue.idLogin, `${response.data.data._id}`);

    var accesstoken = localStorage.getItem(localvalue.tokenLogin);
    if (accesstoken == null) {
        return (<Navigate to={`/${routing.loginAccount}`} />)
    }
    else {
        return (
            <div x-data="setup()" class="{ 'dark': isDark }">
                <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                    <NavbarAdmin />
                    <SidebarAdmin />
                    {/* content */}
                    <Outlet />
                </div>
            </div>
        )
    }
}

export default LayoutAdmin;