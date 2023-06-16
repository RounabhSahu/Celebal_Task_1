import React from 'react';
import NodeFeature from "./NodeFeature";
import img1 from "./Group 10.png";
import img2 from "./Star.png";
import img3 from "./Crown.png";
import img4 from "./Group 11.png";
import img5 from "./ChartPieSlice.png";
import img6 from "./FigmaLogo.png";
const Features = () => {
    return (
        <div className='feature-container'>
            <div className='feature-head-container'>
                <div className='feature-head-container-heading'>Kalite ve Süreç Yönetimi</div>
                <div className='feature-head-container-subheading'>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</div>
            </div>
            <div className='features-tiles-container'>
                <NodeFeature image={img1} title='Döküman Analizi' desc='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
                <NodeFeature image={img2} title='Kabul ve Değerlendirme' desc='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
                <NodeFeature image={img3} title='İş Kuralları Analizi' desc='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
                <NodeFeature image={img4} title='Akış Diyagramları' desc='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
                <NodeFeature image={img5} title='Paydaş Analizi' desc='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
                <NodeFeature image={img6} title='Prototipleme' desc='Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.'/>
            </div>
        </div>
    );
};

export default Features;
