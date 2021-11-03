import React from 'react';

function Header(){
    return (
        <div>
            <header id="header">
                <div className="header__port"><a href="/portfolio">Portfolio</a></div>
                <div className="header__logo"><a href="/main">Wooseok</a></div>
                <nav className="header__menu">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/reference">Reference</a></li>
                        <li><a href="/youtube">Youtube</a></li>
                        <li><a href="/script">Script</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <a href="/" className="ham">
                        <span className="sr-only">menu</span>
                    </a>
                </nav>
            </header>
        </div>
    )
}

export default Header;