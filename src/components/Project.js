import React from "react";
import proimg from '../assets/pic5.jpg';
import proimg1 from '../assets/pic6.webp';
import '../App.css';
import { TbHandClick } from "react-icons/tb";


export default function Project(){
    return <section className="">
        <div className=" flex justify-center p-2 text-3xl font-bold tracking-[10px] text-green-500">
            PROJECT
        </div>
        <div className="">
        <p className="flex px-5 py-2 text-[15px] md:text-[14px] xl:text-xl justify-center">I have built these with front-end and Back-end technology. Check them out.</p>
        
        <div className=" flex flex-col md:flex-row px-10 py-10 gap-10 justify-center ">
           <div className="relative hover:scale-110 transition duration-700">
            <img className="h-[250px]  md:h-[300px] lg:w-[300px] xl:w-[400px] shadow-blue-800 shadow-2xl " src={proimg} />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary1 text-white opacity-0 duration-500 hover:opacity-100 ">
            <p className="text-center px-10 py-10">Textile and Chemical laboratory website, built with HTML,CSS and JAVASCRIPT.</p>
            <a className="hover:text-green-600 px-5 py-2 flex flex-row justify-center text-xl" href="https://github.com/srk171/sivark">view project <TbHandClick size={30}/> </a>
            
            
            </div> 
            </div>
           <div className="relative hover:scale-110 transition duration-700">
            <img className="h-[250px] md:h-[300px] lg:w-[300px] xl:w-[400px] shadow-blue-800 shadow-2xl " src={proimg1} />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary1 text-white opacity-0 duration-500 hover:opacity-100">
            <p className="text-center  px-10 py-10">shop Ecommerce website, built with front-end technology and python(Django framework).</p>
            <a className="hover:text-green-600 px-5 py-2 flex flex-row justify-center text-xl" href="https://github.com/srk171/python_proj">view project <TbHandClick size={30}/> </a>
            </div>
            </div>
        </div>
        </div>
    </section>
}