import React from 'react';
import Users from './Users.png';
import './User.css';
const User = () => {
    return (
        <div className='user-container'>
            <img className='user-image' src={Users} alt=""/>
            <div className='user-title'>Bize Ulaşın</div>
            <div className='user-desc'>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</div>
            <div className='user-button'>Bize Ulaşın</div>
        </div>
    );
};

export default User;
