import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX  } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import '../App.css';

export default function Contact(){
    return <section className="flex flex-col font-bold">
      
        <p className=" About text-2xl sm:text-3xl flex py-10 xl:py-20 md:text-4xl xl:text-5xl justify-center text-green-800">GET IN TOUCH</p>
          <p className="text-base xl:text-3xl  flex py-3  justify-center">WhatsApp : +91 7708380872</p>
          <p className="text-base md:text-xl lg:text-xl xl:text-3xl flex py-3  justify-center">Email : sivalatha1710@gmail.com</p>
          <p className="text-base md:text-xl xl:text-3xl flex py-3   justify-center"> Linkedin : www.linkedin.com/in/siva1710  </p>
         
      
          <div className="flex justify-center py-5 ">
          <a href="https://www.linkedin.com/in/siva1710?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="pr-5  hover:text-blue-700 hover:scale-125"><FaLinkedin size={35}/></a>
            <a href="" className="pr-5  hover:text-blue-800  hover:scale-125"><FaSquareFacebook size={35}/></a>
            <a href="" className="pr-5 hover:text-white  hover:scale-125"><BsTwitterX size={35}/></a>
            <a href="https://www.instagram.com/sivark97?igsh=MTV6cXp5ZDF6N2VnOA==" className="pr-5 hover:text-pink-600  hover:scale-125"><BsInstagram size={35}/></a>
            
           
            </div>
            
          
        
    </section>
}