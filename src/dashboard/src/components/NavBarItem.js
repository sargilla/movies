import React from 'react';
import PropTypes from 'prop-types'

NavBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  value: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

NavBarItem.defaultProps = {
  color: "primary",
};

function NavBarItem ({url,icon,color,value})  {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href={url} id="alertsDropdown">
                <i className={`fas ${icon} fa-fw`}></i>
                <span className={`badge badge-${color} badge-counter`}>{value }</span>
            </a>
        </li>
    );
}



export default NavBarItem;
