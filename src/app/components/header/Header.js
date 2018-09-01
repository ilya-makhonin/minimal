import React from 'react';
import Logo from './logo/Logo';
import Menu from './menu/Menu';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo/>
                <Menu/>
            </header>
        );
    }
}