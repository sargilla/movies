import React from 'react';
import NavBar from './Navbar';
import Main from './Main';

function MainContent(props) {
    return (
        <div id="content">
            <NavBar/>
            <Main />
        </div>
    );
}

export default MainContent;