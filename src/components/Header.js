import { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { Bars3Icon } from '@heroicons/react/24/solid';



export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);
    
   return <header className="flex justify-between md:justify-end px-2 py-2">
    <p className="my-name block md:hidden text-[22px] pl-1 text-red-600">SRK.</p>
      <nav className="hidden md:block">
    <ul className="flex font-headfont font-bold whitespace-nowrap md:justify-end md:text-[17px] lg:text-[19px] xl:text-[26px]">
        <li className="text-red-600 hover:text-blue1 "><a href="/">HOME</a></li>
        <li className="text-blue1 hover:text-red-600"><Link to="/About">ABOUT ME </Link></li>
        <li className="text-blue1 hover:text-red-600"><Link to="/Project">PROJECT</Link></li>
        <li className="text-blue1 hover:text-red-600"><Link to="/contact">CONTACT</Link></li>
    </ul>
    </nav>

    {toggleMenu && <nav className="block md:hidden">
    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col  mobile-nav font-headfont">
        <li className="text-white "><a href="/">HOME</a></li>
        <li className="text-white"><Link to="/About">ABOUT ME </Link></li>
        <li className="text-white"><Link to="/Project">PROJECT</Link></li>
        <li className="text-white"><Link to="/contact">CONTACT</Link></li>
    </ul>
    </nav>}
<button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden "><Bars3Icon className="text-black h-8 " /></button>
        
        
        

    
     
    
</header>
}


