import React from 'react';

import Header from './../components/header/Header';
import Content from './../components/content/Content';
import Footer from './../components/footer/Footer';

import About from '../components/content/About';
import Completed from '..components/content/Completed';
import TabsTop from '../components/tabs/top/TabsTop';
import TabsDown from '../components/tabs/down/TabsDown';


export default function(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Content>
                <TabsTop/>
                <About/>
                <TabsDown/>
                <Completed/>
            </Content>
            <Footer/>
        </div>
    );
}
