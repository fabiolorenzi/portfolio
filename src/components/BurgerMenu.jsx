import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function BurgerMenu() {
    const [open, setOpen] = useState(false);

    const burgerOpener = e => {
        e.preventDefault();
        setOpen(!open);
    };
    return(
        <div className="burgerMenu">
            <div className="burgerButton" id={open ? "burgerOpen" : ""} onClick={burgerOpener}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="hidden_menu" id={open ? "hidden_menu_open" : "hidden_menu_closed"}>
                <nav>
                    <NavLink to="/" className="menu2" activeClassName="sel2" exact>HOME</NavLink>
                    <NavLink to="/projects" className="menu2" activeClassName="sel2">PROJECTS</NavLink>
                    <NavLink to="/contacts" className="menu2" activeClassName="sel2">CONTACTS</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;