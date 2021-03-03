import React from "react";

import Menu from "./Menu.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

function Header() {
    return(
        <div className="header">
            <Menu />
            <BurgerMenu />
        </div>
    );
};

export default Header;