import React from 'react';
import '../../styles/navbar_style.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaTshirt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi"
import { ReactComponent as Logo } from '../../assets/Marques_de_Sidney_-_Logo-02.svg';
import { useGlobalContext } from './context';
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
    const {openSubmenu, openSidebar, closeSubmenu} = useGlobalContext();
    
    const displaySubmenu = (e) => {
        const page = capitalize(e.target.name);
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right)/ 2;
        const bottom = tempBtn.bottom;
        openSubmenu(page, { center, bottom });
    }

    const capitalize = (str) => {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }

    const handleSubmenu = (e) => {
        if(!e.target.classList.contains('link-btn')){
            closeSubmenu();
        }
    }

    return (
        <>
            <nav className='navbar' onMouseOver={handleSubmenu}>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <a href='/'>
                        <Logo className='logo'/>
                        </a>
                        <button className='btn toggle-btn' onClick={openSidebar}>
                            <FiMenu />
                        </button>
                    </div>
                    <ul className='nav-links'>
                        <li>
                            <button className='link-btn' name="productos" onMouseOver={displaySubmenu}>
                                Productos
                            </button>
                        </li>
                        <li>
                            <a className='link-btn' href='/faqs'>
                                FAQS
                            </a>
                        </li>
                        <li>
                            <a className='link-btn' href='/about'>
                                AboUt
                            </a>
                        </li>
                    </ul>
                    <a className='compra'>
                        <FaShoppingBasket/>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;