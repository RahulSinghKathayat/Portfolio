import React from "react";
import { Link } from 'react-scroll'

const Contact = () =>{
    return(
        <div name='contact' className="w-full h-screen bg-black flex justify-center items-center p-4">
            <div className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                    <p className="text-4xl font-bold inline border-b-2 border-cyan-500 text-gray-300">Get in touch</p>
                    <p className="text-gray-300 py-4">Email:{" "}<a href="mailto:rahulkathayat000@gmail.com" className="text-gray-300 underline hover:text-blue-950 hover:no-underline transition-colors duration-300">rahulkathayat000@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}
export default Contact;