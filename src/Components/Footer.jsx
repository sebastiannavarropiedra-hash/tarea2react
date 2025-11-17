import React from "react";
import './Footer.css'

function Footer() {
    return (

        <footer>

            <div className="footer">
                <div className="footer-top">
                    <div className="version-badges">
                        <span className="badge badge-blue">v24.11.1 Latest LTS</span>
                        <span className="badge badge-green">v25.2.0 Latest Release</span>
                    </div>

                    <div className="social-icons">
                        <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">...</svg></a>
                        <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">...</svg></a>
                        <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">...</svg></a>
                        <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">...</svg></a>
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
                <div>
<div >
                            <span className="text-2xl">⚡</span>
                        </div>
                        <div >
                            <span className="text-2xl">🦊</span>
                        </div>
                        <div >
                            <span className="text-2xl">☁️</span>
                        </div>
                        <div >
                            <span className="text-2xl">▲</span>
                        </div>
                        <div >
                            <span className="text-2xl">🎯</span>
                        </div>
                        <div >
                            <span className="text-2xl">⚙️</span>
                        </div>

                </div>
            </div>

        </footer>


    )
}

export default Footer;