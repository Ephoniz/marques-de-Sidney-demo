import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import { IoShirt } from 'react-icons/io5'
import { GiHoodie, GiSafetyPin } from 'react-icons/gi'
import React from 'react';

const sublinks = [
  {
    page: 'Productos',
    links: [
      { label: 'Camisetas', icon: <IoShirt />, url: '/camiseta' },
      { label: 'Sudaderas', icon: <GiHoodie />, url: '/sudaderas' },
      { label: 'Pines', icon: <GiSafetyPin />, url: '/pines' },
    ],
  },
  {
    page: 'FAQs',
    links: [
    ],
  },
  {
    page: 'About',
    links: [
    ],
  },
];

export default sublinks;
