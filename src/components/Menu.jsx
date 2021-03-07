import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {

    return(
        <div className="menu">
            <nav>
                <NavLink to="/portfolio" className="menu1" activeClassName="sel1" exact>HOME</NavLink>
                <NavLink to="/projects" className="menu1" activeClassName="sel1">PROJECTS</NavLink>
                <NavLink to="/contacts" className="menu1" activeClassName="sel1">CONTACTS</NavLink>
            </nav>
        </div>
    );
};

export default Menu;