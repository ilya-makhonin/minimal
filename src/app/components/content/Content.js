import React from 'react';
import About from './About';
import Completed from './Completed';
import TabsTop from '../tabs/top/TabsTop';
import TabsDown from '../tabs/down/TabsDown';

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <TabsTop/>
                <About/>
                <TabsDown/>
                <Completed/>
            </div>
        );
    }
}