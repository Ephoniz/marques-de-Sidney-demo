import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import { IoShirt } from 'react-icons/io5'
import { GiHoodie, GiSafetyPin } from 'react-icons/gi'
import React from 'react';

const sublinks = [
  {
    page: 'productos',
    links: [
      { label: 'camisetas', icon: <IoShirt />, url: '/products' },
      { label: 'sudaderas', icon: <GiHoodie />, url: '/products' },
      { label: 'pines', icon: <GiSafetyPin />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
