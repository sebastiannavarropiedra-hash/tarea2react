import React from "react";
import { Search, ExternalLink } from "lucide-react";
import './Header.css'


function Header() {
    return (

        <header className="header">
            <div className="header-inner">
                <div className="header-left">
                    <div className="logo-group">
                        <svg width="32" height="32" viewBox="0 0 590 590" fill="none">
                            <path d="M 294.725 0.125 L 589.45 147.5625 L 589.45 442.4375 L 294.725 589.875 L 0 442.4375 L 0 147.5625 L 294.725 0.125 Z" fill="#43853d" />
                            <path d="M 294.725 147.5 L 294.725 442.5 L 491 319.5 L 491 270.5 L 343 192.5" fill="#83cd29" />
                        </svg>
                        <span className="title">Node.js</span>
                    </div>

                    <nav className="menu">
                        <a href="#">Aprender</a>
                        <a href="#">Acerca de</a>
                        <a href="#">Descargar</a>
                        <a href="#">Blog</a>
                        <a href="#">Documentación</a>
                        <a href="#">
                            Contribuir <ExternalLink className="w-3 h-3" />
                        </a>
                        <a href="#">
                            Certificación <ExternalLink className="w-3 h-3" />
                        </a>
                    </nav>
                </div>

                <div className="header-right">
                    <div className="searchbar">
                        <Search className="w-4 h-4" />
                        <span>Start typing...</span>
                        <kbd>⌘K</kbd>
                    </div>

                    <button className="icon-btn">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>

    )

}

export default Header