import React from 'react';
import { useGlobalContext } from './context';

const Hero = () => {
    const data = useGlobalContext();
    console.log(data);
    
    return (
        <div>
            
        </div>
    );
}

export default Hero;
