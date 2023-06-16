import React from 'react';
import './Footer.css';
import icons from './Group 8.png';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-top-container'>
                <div className='footer-top-items-container'>
                    <div className='footer-top-items'>Çözüm ve Hizmetler</div>
                    <div className='footer-top-items'>Yazılım Geliştirme</div>
                    <div className='footer-top-items'>Outsourcing</div>
                    <div className='footer-top-items'>Kalite ve Süreç Yönetimi</div>
                    <div className='footer-top-items'>Danışmanlık</div>
                    <div className='footer-top-items'>IoT Destekli Çözümler</div>

                </div>
                <div className='footer-top-items-container'>
                    <div className='footer-top-items'>Ürünler</div>
                    <div className='footer-top-items'>Eğitim Yönetim Sistemi</div>
                    <div className='footer-top-items'>İnsan Sermayesi Yönetim Sistemi</div>
                    <div className='footer-top-items'>Müşteri İlişkileri Yönetim Sistemi</div>
                    <div className='footer-top-items'>İçerik Yönetim Sistemi</div>


                </div>
                <div className='footer-top-items-container'>
                    <div className='footer-top-items'>Kurumsal</div>
                    <div className='footer-top-items'>Hakkımızda</div>
                    <div className='footer-top-items'>Belge ve Yetkinlikler</div>
                    <div className='footer-top-items'>İş Ortakları</div>


                </div>
                <div className='footer-top-items-container'>
                    <div className='footer-top-items'>İletişim</div>
                    <div className='footer-top-items'>Bilgi İstek Formu</div>
                    <div className='footer-top-items'>Uzman Talep Formu</div>

                </div>

            </div>
            <div className='footer-bottom-container'>
                <div className='footer-bottom-text'>© Copyright 2010-2021 - Can Çevik</div>
                <div className='footer-bottom-icons'><img src={icons} alt=""/></div>
            </div>
        </div>
    );
};

export default Footer;
