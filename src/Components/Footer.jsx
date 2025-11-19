import React from "react";
import './Footer.css'

function Footer() {
    return (

        <footer>

            <div className="footer">
                <div className="footer-top">
                    <div className="version-badges">

                        <a className="badge-wrapperblue" href="#">
                            <span className="badge badge-blue">v24.11.1</span>
                            <span className="badge-messageblue">Latest LTS</span>
                        </a>

                        <a className="badge-wrappergreen" href="#">
                            <span className="badge badge-green">v25.2.0</span>
                            <span className="badge-messagegreen">Latest Release</span>
                        </a>

                    </div>


                </div>

                <div className="footer-links">
                    <a href="#">Política de Marcas Registradas</a>
                    <a href="#">Política de Privacidad</a>
                    <a href="#">Código de Conducta</a>
                    <a href="#">Política de Seguridad</a>
                </div>

                <div className="footer-bottom">
                    © OpenJS Foundation

                </div>
                <div className="Socialicons">
                    <div >
                        <span >⚡</span>
                    </div>
                    <div >
                        <span >🦊</span>
                    </div>
                    <div >
                        <span >☁️</span>
                    </div>
                    <div >
                        <span >▲</span>
                    </div>
                    <div >
                        <span >🎯</span>
                    </div>
                    <div >
                        <span >⚙️</span>
                    </div>

                </div>
            </div>

        </footer>


    )
}

export default Footer;