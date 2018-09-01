import React from 'react';

export default class ListTabs extends React.Component {
    render() {
        return (
            <li className={this.props.className}>
                <img src={this.props.icon} alt="Icon Tab"/>
            </li>
        );
    }
}