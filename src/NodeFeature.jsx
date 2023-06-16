import React from 'react';

const NodeFeature = (props) => {
    return (
        <div className='features-tiles'>
            <img src={props.image} alt=""/>
            <div className='features-tiles-heading'>{props.title}</div>
            <div className='features-tiles-desc'>{props.desc}</div>
        </div>
    );
};

export default NodeFeature;
