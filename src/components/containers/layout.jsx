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
                Buenas a todos chicos, qué tal, cómo estáis, bienvenidos a una nueva comprita aquí on my shop · 
                Buenas a todos chicos, qué tal, cómo estáis, bienvenidos a una nueva comprita aquí on my shop ·&nbsp;
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
