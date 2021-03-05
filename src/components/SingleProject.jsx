import React from "react";

function SingleProject({name, image, conn, code}) {
    return(
        <div className="singleProject">
            <a href={conn} target="_blank" rel="noreferrer">
                <div className="imageContainer">
                    <div className="image" id={image}>
                        <span>VISIT WEBSITE</span> 
                    </div>
                </div>
            </a>
            <h1 className="nameProject">{name}</h1>
            <a href={code} target="_blank" rel="noreferrer" className="codeButton">CLICK HERE TO SEE THE CODE</a>
        </div>
    );
};

export default SingleProject;