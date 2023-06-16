import React from 'react';
import Banner from "./Banner";
import Feature from "./Feature";
import Stats from "./Stats";
import Value from "./Value";
import Referal from "./Referal";
import User from "./User";
import Footer from "./Footer";
const App = () => {
    return (
        <div className='flexing'>
            <Banner/>
            <Feature/>
            <Stats/>
            <Value/>
            <Referal/>
            <User/>
            <Footer/>
        </div>
    );
};

export default App;
