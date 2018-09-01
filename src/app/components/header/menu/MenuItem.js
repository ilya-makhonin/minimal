import React from 'react';

export default class MenuItem extends React.Component {
    render() {
        return (
            <li className="header_menu_item">
                <a href={this.props.item.href} className="header_menu_link">
                    {this.props.item.title}
                </a>
                {
                    this.props.len ? <span className="header_menu_delimiter">|</span> : null
                }
            </li>
        );
    }
}