import React from 'react';
import '../../styles/sidebar_styles.scss';
import { FaTimes } from 'react-icons/fa';
import sublinks from '../../data';
import { useGlobalContext } from './context';
import { ReactComponent as Logo } from '../../assets/Marques_de_Sidney_-_Logo-03.svg';

const Sidebar = () => {
    const{ isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${ isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper' }`}>
            <div className='sidebar'>
                <button className='close-btn' onClick={ closeSidebar }>
                    <FaTimes/>
                </button>
                <div className='sidebar-links'>
                    {
                        sublinks.map((item, index) => {
                            const{links, page, link} = item;
                            return <article key={index}>
                                <a href={link}><h4>{page}</h4></a>
                                <div className='sidebar-sublinks'>
                                    {links.map((link, index) => {
                                        const{ url, icon, label } = link;
                                        return <a href={url} key={index}>
                                            {icon}
                                            <p>{label}</p>
                                        </a>
                                    })}
                                </div>
                            </article>
                        })
                    }
                </div>
                <Logo className='logo-watermark'/>
            </div>
        </aside>
    );
}

export default Sidebar;
