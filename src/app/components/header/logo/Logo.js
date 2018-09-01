import React from 'react';
import logo from './../../../images/logo/logo.png';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="Logotype"/>
            </div>
        );
    }
}