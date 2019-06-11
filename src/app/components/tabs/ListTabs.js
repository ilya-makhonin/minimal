import React from 'react';

export default function({ className, icon }) {
    return (
        <li className={className}>
            <img src={icon} alt="Icon Tab"/>
        </li>
    );
}