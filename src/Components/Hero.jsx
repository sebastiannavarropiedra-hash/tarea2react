import React from "react";
import './Hero.css'

function Hero() {
    return (

        <main className='HeroSection'>
            <div className='Insideherosection'>

                <div className='LeftSide'>
                    <h1>Run JavaScript<br />Everywhere</h1>

                    <p> Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.</p>

                    <div className="Leftbuttons">
                        <button className="buttonone">
                            Get Node.js®
                        </button>
                        <button className="buttontwo">
                            <div className="text-center">
                                <div >Get security support</div>
                                <div >for EOL Node.js versions</div>
                            </div>
                        </button>
                    </div>
                    <div className='PartnerLogos'>
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
                    <p className="text-sm text-gray-600">
                        Node.js is proudly supported by the partners above and more.
                    </p>
                </div>

                <div className='RightSide'>

                    <h1>Here goes the table</h1>
                </div>
            </div >
        </main>

    )
}

export default Hero;