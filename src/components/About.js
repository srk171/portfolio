import React from "react";
import AboutImg from '../assets/siva1.jpg';
import '../App.css';
import { Link } from "react-router-dom";
import { IoSchool } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import skillimg from '../assets/sk-1.jpg';
import skillimg1 from '../assets/sk-2.webp';
import skillimg2 from '../assets/sk-3.png';
import skillimg3 from '../assets/sk-4.jpg';
import skillimg4 from '../assets/sk-5.jpg';
import skillimg5 from '../assets/sk-6.png';
import skillimg6 from '../assets/sk-7.png';



export default function About() {
    const config = {
      line1:'Mr. SIVARANJITH KUMAR  ',
      line2:'Passionate about full-stack development, with a learn and new programming languages and technologies, aiming to create innovative solutions and stay upto-date with industry trends.',
    }

  return <section  className='  bg-black h-[100%] md:h-[1100px] w-[100%] xl:h-[1300px] text-white  bg-secondary px-5 lg:px-10 xl:py-8 '>

    <div className="md:flex ">
    <div className='flex-col  md:w-1/2  px-5 py-10 font-extrabold font-aboutfont lg:w-3/4 xl:w-1/2 '>
          <p className="whitespace-nowrap tracking-[8px] text-3xl lg:text-4xl xl:text-[45px]  ">About me</p>
          <img className="h-[35vh] w-[35vh] md:h-[40vh] md:w-[40vh] lg:h-[43vh] lg:w-[45vh] xl:w-[48vh] xl:h-[45vh] py-3 " src={AboutImg} ></img>
    </div> 

    <div className="md:w-1/2 lg:w-3/4">     
          <p className='pb-2 text-green-500 text-lg md:text-[22px] lg:text-2xl xl:text-3xl md:mt-28 lg:mt-38 xl:mt-36 ml-5'>{config.line1}</p> 
          <p className=' text-md md:text-xl lg:text-2xl xl:text-3xl  md:mt-2 lg:mt-5 xl:mt-7 ml-5 pb-5  xl:w-3/4 '>{config.line2} </p>
    </div>  

    </div>    
     
      
    <div className='md:flex     font-aboutfont1 font-medium '>

        <div className='md:flex-col xl:py-8 md:w-1/2 lg:w-3/4 xl:w-1/2 '>
          
          <h1 className='flex gap-2 items-center text-2xl pb-3 pl-5 md:text-3xl md:mt-5 xl:mt-4 lg:text-3xl xl:text-4xl font-extrabold font-aboutfont text-green-500'> <IoSchool /> - EDUCATION </h1>
          <p className="text-md pl-5 pb-1 lg:text-xl xl:text-2xl">Degree : Bachelor of Science - 2017</p>
          <p className="text-md pl-5 pb-1 lg:text-xl  xl:text-2xl whitespace-nowrap">College : Chikkanna Govt.arts college</p>
          <p className="text-md pl-5 pb-1 lg:text-xl  xl:text-2xl">Place : Tirupur, India</p>
          <p className="text-md pl-5 pb-5 lg:text-xl  xl:text-2xl">Percentage : 64.5 %</p>
        </div>
        <div className="md:flex md:w-1/2 lg:w-3/4 md:mt-3">
          <div className="md:flex-col">
          <h1 className='flex gap-2 items-center text-2xl pb-3 pl-5 md:text-3xl md:mt-2 xl:mt-8 lg:text-3xl xl:text-4xl font-extrabold font-aboutfont text-green-500'> <LiaCertificateSolid /> - CERTIFICATION </h1>
          <p className="text-md pl-5 pb-1 lg:text-xl  xl:text-2xl">Course Name : Full-stack python </p>
          <p className="text-md pl-5 pb-1 lg:text-xl  xl:text-2xl whitespace-nowrap">Institute Name : Ether Infotech</p>
          <p className="text-md pl-5 pb-2 lg:text-xl  xl:text-2xl">Place : Coimbatore, India</p>
          <div className="pb-5 xl:mt-2">
           <p className="border rounded-lg ml-5 w-32 whitespace-nowrap md:hover:scale-150 md:w-[20vh] lg:w-1/2 xl:w-[18vh]  p-1 px-1 md:px-2 lg:px-6 xl:px-1 text-[15px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-green-500"><Link to="https://drive.google.com/file/d/1tOVbn5cAr-ENKA0_CD_KjV0EG4VhCGhR/view?usp=drivesdk">Click here to view </Link></p> 
          </div>
        </div>
        </div>
           

    </div>
    <div className="md:mt-3">
      <p className="pb-1 px-5 text-sm md:text-lg lg:text-xl  md:first-line:tracking-widest md:first-letter:text-7xl  md:first-letter:font-bold md:first-letter:mr-5 md:first-letter:float-left">Hi there,</p>
      <p className="pb-3 px-5 text-md md:text-xl lg:text-1xl xl:text-2xl md:w-full whitespace-pre-wrap">I have completed a Full-Stack python course.As a versatile developer, I possess a robust skill set that spans both front-end and back-end technologies. I am proficient in HTML, CSS, Bootstrap, and Tailwind CSS, allowing me to craft visually appealing and responsive interfaces. Additionally, I have expertise in JavaScript and React.js, enabling me to build dynamic and interactive client-side applications. On the back-end, I am well-versed in Python and the Django framework, capable of building scalable and efficient server-side logic. I am also skilled in database management using MySQL. Furthermore, I am proficient in version control using Git, ensuring seamless collaboration and tracking of changes. Lastly, I have experience with Microsoft Excel, enabling me to effectively manage and analyze data. With this comprehensive skill set, I am equipped to tackle a wide range of projects and deliver high-quality results.</p>
    </div>

    <div>
  <div class="flex items-center space-x-2  ml-16 md:ml-60 ">
    <h4 class="font-semibold text-green-600 text-lg md:text-xl lg:text-2xl ">What i knew.........</h4>
    
  </div>
  <div class="mt-2 flex -space-x-2 overflow-hidden pb-5 ml-12 md:ml-56 ">
    <img class="inline-block h-10 w-10 lg:h-14 lg:w-14 rounded-full ring-2 ring-white md:hover:scale-150 transition duration-300" src={skillimg} alt="1"/>
    <img class="inline-block h-10 w-10 lg:h-14 lg:w-14 rounded-full ring-2 ring-white md:hover:scale-150 transition duration-500" src={skillimg1} alt="2"/>
    <img class="inline-block h-10 w-10 lg:h-14 lg:w-14 rounded-full ring-2 ring-white md:hover:scale-150 transition duration-300" src={skillimg2} alt="3"/>
    <img class="inline-block h-10 w-10 lg:h-14 lg:w-14 rounded-full ring-2 ring-white md:hover:scale-150 transition duration-500" src={skillimg3} alt="4"/>
    <img class="inline-block h-10 w-10 lg:h-14 lg:w-14 rounded-full ring-2 ring-white md:hover:scale-150 transition duration-300" src={skillimg4} alt="5"/>
    <img class="inline-block h-10 w-10 lg:h-14 lg:w-14 rounded-full ring-2 ring-white md:hover:scale-150 transition duration-500" src={skillimg5} alt="6"/>
    <img class="inline-block h-10 w-10 lg:h-14 lg:w-14 rounded-full ring-2 ring-white md:hover:scale-150 transition duration-300" src={skillimg6} alt="7"/>

  </div>
  
</div>
      

    
    

    
      
</section>
  
  

  

}

  

