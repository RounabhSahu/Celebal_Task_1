import React from 'react';

const Banner = () => {

    return (
        <div className='banner'>
            <div className='navbar'>
                <div className='nav-container'>
                    <div className='nav-links'>Çözüm ve Hizmetler</div>
                    <div className='nav-links'> Ürünler</div>
                    <div className='nav-links'>Teknolojiler</div>
                    <div className='nav-links'>İnsan Kaynakları</div>
                    <div className='nav-links'>Kurumsal</div>
                </div>
                <div className='nav-special'>İletişim</div>
            </div>
            <div className='banner-container'>
                <div className='banner-main-text'>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</div>
                <div className='banner-sub-text'>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</div>
                <div className='banner-mail-input-button-container'>
                    <input contentEditable='true' className='banner-mail-input' type='email' placeholder='Mail bültenimize kayıt ol'/>
                    <div className='banner-mail-input-button'>Kayıt Ol</div>
                    {/*<div className='banner-mail-input-button-text'></div>*/}
                </div>
            </div>
        </div>
    );
};

export default Banner;
