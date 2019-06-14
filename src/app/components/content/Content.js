import React from 'react';
import About from './About';
import Completed from './Completed';
import TabsTop from '../tabs/top/TabsTop';
import TabsDown from '../tabs/down/TabsDown';


export default function(props) {
    return (
        <div className="content">
            <TabsTop/>
            <About/>
            <TabsDown/>
            <Completed/>
        </div>
    );
}
