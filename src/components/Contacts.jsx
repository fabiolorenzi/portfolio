import React from "react";

import cv from "../doc/lorenzi_fabio_cv.pdf";

function Contacts() {
    return(
        <div className="contacts_container">
            <h1>CONTACTS</h1>
            <div className="contacts">
                <div className="contact_info">
                    <h1>TELEPHONE:</h1>
                    <p>+44 7858380185</p>
                </div>
                <div className="contact_info">
                    <h1>EMAIL:</h1>
                    <a href="mailto:fabiolorenzi13975@gmail.com"><p>fabiolorenzi13975@gmail.com</p></a>
                </div>
                <div className="contact_info">
                    <h1>ADDRESS:</h1>
                    <p>
                        Flat 4, 11 Vernon Terrace<br />
                        Brighton BN1 3JG
                    </p>
                </div>
                <div className="contact_info">
                    <h1>LINKEDIN:</h1>
                    <a href="https://www.linkedin.com/in/fabio-lorenzi-6901421b3/" target="_blank" rel="noreferrer">
                        <p>https://www.linkedin.com/in/fabio-lorenzi-6901421b3/</p>
                    </a>
                </div>
                <div className="contact_info">
                    <h1>GITHUB:</h1>
                    <a href="https://github.com/fabiolorenzi" target="_target" rel="noreferrer">
                        <p>https://github.com/fabiolorenzi</p>
                    </a>
                </div>
                <a id="downloadButtonContacts" className="downloadButton" href={cv} download="lorenzi_fabio_cv">DOWNLOAD CV</a>
            </div>
        </div>
    );
};

export default Contacts;