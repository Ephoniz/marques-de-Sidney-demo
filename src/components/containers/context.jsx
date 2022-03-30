import React, { useState, useContext } from "react";
import sublinks from "../../data";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const[isSidebarOpen, setIsSidebarOpen] = useState(false);
    const[isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState(0);
    const [page, setPage] = useState({page: '', links: []});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setLocation(coordinates);
        setPage(page);
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }


    return <AppContext.Provider value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        location,
        page}}>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}