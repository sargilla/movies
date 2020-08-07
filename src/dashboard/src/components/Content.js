import React from 'react';
import MainContent from './MainContent';
import Footer from './Footer';
function Content(props) {
    return (
        <div id="content-wrapper" className="d-flex flex-column"> 
           <MainContent />
           <Footer />
       </div>
  
    );
}

export default Content; 