import React from 'react'
import '../assets/css/Category.css';
export default function Category({children}) {
    return (
        <div className="card text-white shadow cat-bg">
            <div className="card-body">
                {children}
			</div>
        </div>
    )
}

