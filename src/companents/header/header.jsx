import React from "react";
import Logo from "./header-logo";
import HeaderList from "./hlist";
import HeaderButton from "./header-buttons";
function Header(){
    return(
        <header className="ecos">
            <nav>
                <div className="container">
                  <div className="header-box">
                    <Logo/>
                    <HeaderList/>
                    <HeaderButton/>
                  </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;