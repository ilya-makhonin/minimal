import React from 'react';

import Header from './../components/header/Header';
import Content from './../components/content/Content';
import Footer from './../components/footer/Footer';


export default function(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}
