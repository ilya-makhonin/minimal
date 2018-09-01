import React from 'react';
import MenuItem from './MenuItem';
import { items } from './items';

export default class Menu extends React.Component {
    constructor() {
        super(...arguments);
        this.items = items;
        this.menuItems = [];
    }

    isVertical(i) {
        return this.items.length !== (i + 1);
    }

    render() {
        $(document).ready(function () {
            $('.mobile_menu_header').on('click', function () {
                let $mobMenu = $('.mobile_menu_list_inside');
                if($mobMenu.hasClass('menu_active')) {
                    $mobMenu.removeClass('menu_active')
                } else {
                    $mobMenu.addClass('menu_active');
                }
            })
        });

        this.items.forEach((item, i) => {
            this.menuItems.push(<MenuItem key={i} item={item} len={this.isVertical(i)}/>);
        });

        return (
            <nav className="header_menu">
                <ul className="header_menu_list">
                    {this.menuItems}
                </ul>
                <ul className="mobile_menu">
                    <li className="mobile_menu_list">
                        <p className="mobile_menu_header">Menu open</p>
                        <ul className="mobile_menu_list_inside">
                            {this.menuItems}
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}