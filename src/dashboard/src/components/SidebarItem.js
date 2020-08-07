import React from 'react';

function SidebarItem({active,url,icon,text}) {
    return (
        <li className={`nav-item  ${active ? 'active' : ''}`}>
            <a className="nav-link" href={url}>
                <i className={`fas ${icon}`}></i>
                <span>{text}</span></a>
        </li>
    );
}

export default SidebarItem;