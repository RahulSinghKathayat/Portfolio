import React from "react";

const Skills = () =>{
    return(
        <div name='skills' className="w-full h-screen bg-black text-gray-300">
             <div className="max-w-[1000px] mx-auto p-4 felx -felx-cols justify-center w-full h-full">
                <div className="w-full flex flex-col justify-center items-center mb-7">
                    <p className="text-4xl border-b-4 border-cyan-500 text-center font-bold inline">Technical Skills</p>
                    <p className="text-2xl py-4">I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">HTML</p>
                    </div>
                
                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">CSS</p>
                    </div>
                
                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">JavaScript</p>
                    </div>

                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">React.js</p>
                    </div>

                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">TypeScript</p>
                    </div>
                    
                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">Node.jS</p>
                    </div>

                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">TailwindCSS</p>
                    </div>
                    
                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">MongoDB</p>
                    </div>
                    
                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">Github</p>
                    </div>
                    
                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">Python</p>
                    </div>

                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">Machine Learning</p>
                    </div>

                    <div className="border-2 border-solid border-transparent animate-rgb-border shadow-md shadow-white bg-indigo-200 text-black hover:scale-110 duration-500">
                        <p className="my-4">Deep Learning</p>
                    </div>
                </div>  
             </div>
        </div>
    )
}

export default Skills;