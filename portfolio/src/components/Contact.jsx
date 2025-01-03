import React from "react";

const Contact = () =>{
    return(
        <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <div className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">Send a message</p>
                </div>

                <input className="bg-[#ccd6f6] p-2 rounded-lg" type="text" placeholder="Your name" name="name" />
                <input className="bg-[#ccd6f6] p-2 my-4" type="email" placeholder="Your email" name="email"/>
                <textarea className="bg-[#ccd6f6] p-2" name="message" rows='10' placeholder="Your message"></textarea>
                <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">Submit</button>
            </div>
        </div>
    )
}
export default Contact;