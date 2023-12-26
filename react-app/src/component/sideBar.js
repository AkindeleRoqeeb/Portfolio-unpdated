import React from "react";

import Skills from "./Skills";
import LanguagePage from "./LanguagePages"
import Address from "./AddressPage";

// import profileImg from '../Image/profileimg'

// const profileimg = '../Image/profileImg.jpg'

export default function Navbar() {
    return(
        <div className="containerNavbar" id="containerNavbar">
            <div className="name">
                <img src={require('../Image/profileImg.jpg')}/>
                {/* <img id="image" className="profileimg" src={profileimg} alt="" /> */}
                <h5>akindele roqeeb</h5>
                <span>
                    frontend and backend developer
                </span>
            </div>
            <Address />
            <LanguagePage  />
            <Skills />
        </div>
    );
};