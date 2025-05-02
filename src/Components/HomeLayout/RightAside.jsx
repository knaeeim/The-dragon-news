import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs';
import Qzons from '../Qzons';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzons></Qzons>
        </div>
    );
};

export default RightAside;