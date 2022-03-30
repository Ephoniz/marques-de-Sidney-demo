import React, { useState, useRef, useEffect } from 'react';
import '../../styles/submenu_styles.scss'
import { useGlobalContext } from './context';

const Submenu = () => {
    const { isSubmenuOpen, location, page:{ page, links } } = useGlobalContext();
    const container = useRef(null);
    const [columns, setColumns] = useState('col-1');

    useEffect(() => {
        setColumns('col-1');
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
    }, [location])

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            <div className={`submenu-center ${columns}`}>
                {links.map((link, index) => {
                    const{label, icon, url} = link;
                    return <a key={index} href={url}>
                        {icon}
                        {label}
                    </a>
                })}
            </div>
        </aside>
    );
}

export default Submenu;
