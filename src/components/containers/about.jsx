import React from 'react';
import '../../styles/about_syle.scss';
import { AiOutlineTwitter, AiFillInstagram, AiOutlineGlobal } from 'react-icons/ai';
import { useGlobalContext } from './context';
import { ImTwitch } from 'react-icons/im';

const About = () => {
    const {closeSubmenu} = useGlobalContext();

    return (
        <section className='about-page' onMouseOver={closeSubmenu}>
            <div className='knekro'>
                    <h3>Knekro</h3>
                    <div>
                        <a href='https://www.twitch.tv/knekro'><ImTwitch/></a>
                        <a href='https://twitter.com/KNekro'><AiOutlineTwitter/></a>
                    </div>
            </div>
            <div className="cards-container">
                <div className='profile-card'>
                    <img alt="Ivan" src="https://media.discordapp.net/attachments/370170882087190540/959250218304569385/Web_-_Presentacion_oruZ.png"/>
                    <h5>Iván</h5>
                    <p>Diseño de marca y diseño todos los elementos gráficos.</p>
                    <div className='socials'>
                        <a href='https://www.instagram.com/oruzcreates/'><AiFillInstagram /></a>
                        <a href='https://twitter.com/oruZCreates'><AiOutlineTwitter/></a>
                    </div>
                </div>
                <div className='profile-card'>
                    <img alt="Maruan" src="https://cdn.discordapp.com/attachments/370170882087190540/959250218786897920/Web_-_Presentacion_Maru.png"/>
                    <h5>Maruan</h5>
                    <p>Diseño y desarrollo de la página web.</p>
                    <div className='socials'>
                        <a href='https://www.maruanaguerdouh.me/'><AiOutlineGlobal/></a>
                        <a href='https://twitter.com/Maru_null'><AiOutlineTwitter/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
