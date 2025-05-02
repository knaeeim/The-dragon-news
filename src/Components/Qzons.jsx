import React from 'react';
import swimmingImage from '../assets/swimming.png';
import classImage from '../assets/class.png';
import playGroundImage from '../assets/playground.png';

const Qzons = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold text-center'>Qzone</h1>
            <div className=''>
                <img className='w-full' src={swimmingImage} alt="" />
                <img className='w-full' src={classImage} alt="" />
                <img className='w-full' src={playGroundImage} alt="" />
            </div>
        </div>
    );
};

export default Qzons;