import React from 'react';
import './Stats.css';
import img1 from './CaretCircleDoubleRight.png'
const Stats = () => {
    return (
        <div className='stats-container'>
            <div className='stats-head-container'>
                <div className='stats-heading'>Test Yönetimiyle Neler Sağlıyoruz?</div>
                <div className='stats-subheading'>IoT Destekli Çözümler</div>
            </div>
            <div className='stats-step-container'>
                <div className='stats-step-desc'>Yazılım Kalitesini <br/>
                    Arttırıyoruz</div>
                <img className='stats-step-img' src={img1} alt=""/>
                <div className='stats-step-desc'>Olası Hataları Önceden <br/>
                    Belirliyoruz</div>
                <img className='stats-step-img' src={img1} alt=""/>
                <div className='stats-step-desc'>Oluşabilecek Riskleri <br/>
                    Önlüyoruz</div>
                <img className='stats-step-img' src={img1} alt=""/>
                <div className='stats-step-desc'>Zaman ve Maliyetten <br/>
                    Tasarruf Sağlıyoruz</div>

            </div>
        </div>
    );
};

export default Stats;
