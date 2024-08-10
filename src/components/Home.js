
import { Link } from "react-router-dom";

export default function Home(){
    
    return <section className="flex flex-col px-8 py-20 ">
        <div className=''>
        <div className="flex flex-col ">
       
            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl pt-5 font-homefont3 lg:ml-5">Hi, <br/>I am Sivaranjithkumar 
            <p className="flex text-2xl lg:text-3xl xl:text-4xl py-5 font-homefont2 whitespace-nowrap">Full-Stack developer </p>
            </h1>
            
            <p className=" md:hover:scale-150 transition duration-700 lg:ml-5 shadow-inner shadow-black hover:shadow-blue-700 hover:text-blue-700 font-semibold text-lg w-20 rounded-md whitespace-nowrap p-1 "><Link to="https://drive.google.com/file/d/11qUemxfaQ2giDrWJjLUHKmQQOu9z4UCY/view?usp=drivesdk">HIRE ME  </Link></p>
           
        </div>
        </div>
        
    </section>
}