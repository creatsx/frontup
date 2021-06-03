import React from 'react';
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./CookiePolicy";

function Policies() {
    return (
        <div className="policies"> 
            <h3>Policies</h3>
            <PrivacyPolicy />
           <CookiePolicy />
        </div>
    )
}

export default Policies
