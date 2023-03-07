import React from 'react'
import { Outlet } from 'react-router-dom';
import NavbarAdmin from '../components/admin/NavbarAdmin';
import SidebarAdmin from '../components/admin/SidebarAdmin';

const LayoutAdmin = () => {
    return (
        <div x-data="setup()" class="{ 'dark': isDark }">
            <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

            <NavbarAdmin/>
            <SidebarAdmin/>
            {/* content */}
            <Outlet/>


            </div>
        </div>
    )
}

export default LayoutAdmin;