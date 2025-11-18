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

                    <div className="tabs">
                        <input type="radio" name="tab" id="tab1" value="1" defaultChecked>
                        </input>
                        <label htmlFor="tab1" >Create an HTTP Server
                        </label>

                        <input type="radio" name="tab" id="tab2" value="2">
                        </input>
                        <label htmlFor="tab2" >Write Tests
                        </label>

                        <input type="radio" name="tab" id="tab3" value="3">
                        </input>
                        <label htmlFor="tab3" >Read a Hash File
                        </label>

                        <div className="tab-content" id="tab1-content">

                            <pre>{`
/* server.mjs */
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\\n');
// });

// starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// run with \`node server.mjs\`
  `}</pre>
                        </div>

                        <div className="tab-content" id="tab2-content">
                            <pre>{`
/* tests.mjs */
import assert from 'node:assert';
import test from 'node:test';

// test('that 1 is equal 1', () => {
//   assert.strictEqual(1, 1);
// });

// test('that throws as 1 is not equal 2', () => {
//   // throws an exception because 1 != 2
//   assert.strictEqual(1, 2);
// });

// run with \`node tests.mjs\`
  `}</pre>
                        </div>

                        <div className="tab-content" id="tab3-content">
                            <pre>{`
/* crypto.mjs */
// import { createHash } from 'node:crypto';
// import { readFile } from 'node:fs/promises';

const hasher = createHash('sha1');

hasher.setEncoding('hex');
// ensure you have a \`package.json\` file for this test!
hasher.write(await readFile('package.json'));
hasher.end();

const fileHash = hasher.read();

// run with \`node crypto.mjs\`
  `}</pre>
                        </div>






                    </div>
                </div >
            </div>
        </main>

    )
}

export default Hero;