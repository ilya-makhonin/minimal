import React from 'react';


export default function({ item, len }) {
    return (
        <li className="header_menu_item">
            <a href={ item.href } className="header_menu_link">{ item.title }</a>
            { len ? <span className="header_menu_delimiter">|</span> : null }
        </li>
    );
}
