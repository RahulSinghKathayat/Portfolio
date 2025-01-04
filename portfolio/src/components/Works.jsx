import React from "react";
import code from '../assets/code2.png'

const Works = () =>{
    return(
        <div name='works' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                
                <div className="pb-8 w-full flex justify-center items-center flex-col">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">Work</p>
                    <p className="text-2xl py-6">Check out some of my most recent work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{backgroundImage: `url(${code})`}} 
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-lg font-bold text-white tracking-wider">Food ordering webpage</span>
                            <p className="text-center">Created a webpage using only HTML, CSS, and JavaScript 
                                that includes a dynamic cart section, a list of available food items, a carousel, and an inquiry section.</p>

                            <div className="pt-8 text-center">
                                <a href="https://x.com/neuCharacter/status/1873702468154179937"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/RahulSinghKathayat/Frontend"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${code})`}} 
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-lg font-bold text-white tracking-wider">Payment Website</span>
                            <p className="text-center">Created a webpage using the MERN stack, featuring a signup page, 
                                a signin page, a dashboard, and a send money page.</p>

                            <div className="pt-8 text-center">
                                <a href="https://x.com/neuCharacter/status/1870700592160817563"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/RahulSinghKathayat/PaymentWebsite"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{backgroundImage: `url(${code})`}} 
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                            <span className="text-lg font-bold text-white tracking-wider">My Portfolio</span>
                            <p className="text-center">Developed a portfolio website using ReactJS, featuring sections for Home, Skills, Projects, About, and Contact with smooth navigation and responsive design</p>

                            <div className="pt-8 text-center">
                                <a href="https://x.com/neuCharacter/status/1875231508317008035"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/RahulSinghKathayat/1stPortfolio"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Works;