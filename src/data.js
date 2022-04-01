import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import { IoShirt } from 'react-icons/io5'
import { GiHoodie, GiSafetyPin } from 'react-icons/gi'
import React from 'react';

const sublinks = [
  {
    page: 'Productos',
    link: '#',
    links: [
      { label: 'Camiseta', icon: <IoShirt />, url: '/camiseta' },
      { label: 'Sudaderas', icon: <GiHoodie />, url: '/sudaderas' },
      { label: 'Pines', icon: <GiSafetyPin />, url: '/pines' },
    ],
  },
  {
    page: 'FAQs',
    link: '/faqs',
    links: [
    ],
  },
  {
    page: 'About',
    link: '/about',
    links: [
    ],
  },
];

export default sublinks;
