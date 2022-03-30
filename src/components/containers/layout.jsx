import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Marquee from "react-fast-marquee";
import Sidebar from './sidebar';
import { AppProvider } from './context';
import Submenu from './submenu';
import Footer from './footer';

const Layout = () => {
    return (
        <div>
        <AppProvider>
            <Navbar/>
            <Marquee>
                Locoooooooo, me cago en la madre que me pariooo 
                DIOSSS tercero del mundoooo 
                GOOOD CABRON
            </Marquee>
            <Sidebar/>
            <Submenu/>
            <Outlet/>
            <Footer/>
        </AppProvider>
        </div>
    );
}

export default Layout;
