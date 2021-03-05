import React from "react";

import photo from "../img/photo.png";
import pythonLogo from "../img/python_logo.png";
import javascriptLogo from "../img/javascript_logo.png";
import htmlLogo from "../img/html_logo.png";
import cssLogo from "../img/css_logo.png";
import reactLogo from "../img/react_logo.png";
import reduxLogo from "../img/redux_logo.png";
import gitLogo from "../img/git_logo.png";
import wordpressLogo from "../img/wordpress_logo.png";
import cv from "../doc/lorenzi_fabio_cv.pdf";

function Home() {
    return(
        <div className="home">
            <div className="biog">
                <h1>FABIO LORENZI'S PORTFOLIO</h1>
                <div className="bioImage">
                    <img src={photo} alt="me" />
                </div>
                <div className="bioText">
                    <p>
                        My name is Fabio Lorenzi and I am interested in Front End Development.
                    </p>
                    <br />
                    <p>
                        I am keen in coding, particularly the client-side, and therefore I started studying Python, Javascript, 
                        HTML, CSS, React, Redux and Git. Building professional, easy to use, user-friendly websites and applications 
                        is a truly passion of mine and I am confident that I would be an excellent addition to your organization. 
                        In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends 
                        and advancements.
                    </p>
                    <br />
                    <p>
                        I am into creating original websites from scratch using React. In doing so, I always make sure that 
                        they are user-friendly, professional by making them device-friendly and able to work properly on every 
                        browser.
                    </p>
                    <br />
                    <p>
                        Additionally, as a simulation training experience, I modified the website of the shop I am currently working 
                        in, which is built through Wordpress. I solved bugs and made it look more professional, whilst following the 
                        requests of my current employer.
                    </p>
                    <br />
                    <p>
                        Finally, I am always eager to learn to build my solid career. I am a hardworking person who is willing to 
                        improve his code and ability to create higher quality products through React, according to my skills, which 
                        will constantly improve. I think that React is a very good library, which will sustain its great presence in 
                        the programming industry and thus I am facinated to use this technology.
                    </p>
                </div>
            </div>
            <div className="skills">
                <h1>SKILLS</h1>
                <div className="logos">
                    <img src={pythonLogo} alt="python" />
                    <img src={javascriptLogo} alt="javascript" />
                    <img src={htmlLogo} alt="html" />
                    <img src={cssLogo} alt="css" />
                    <img src={reactLogo} alt="react" />
                    <img src={reduxLogo} alt="redux" />
                    <img src={gitLogo} alt="git" />
                    <img src={wordpressLogo} alt="wordpress" />
                </div>
            </div>
            <a className="downloadButton" href={cv} download="lorenzi_fabio_cv">DOWNLOAD CV</a>
        </div>
    );
};

export default Home;