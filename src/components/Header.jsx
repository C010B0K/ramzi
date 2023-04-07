import React from 'react';
// import Basket from '../assets/img/basket.svg';
// import Profile_icon from '../assets/img/profile-icon.svg';
// import Logo from '../assets/img/logo.svg';
// import { Link } from 'react-router-dom';
import Search from "./card_components/search/index";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Auth } from './auth/auth';




function Header() {

  const [showWindow, setShowWindow] = useState(false);

  const handleClick = () => {
      setShowWindow(!showWindow);
  };


  return (
    <>
      <div className="bg-[#27272780] backdrop-blur-[5px] backdrop-grayscale-[50%] z-10 flex flex-row px-[70px] py-[23px] justify-between items-center fixed w-full">
        {/* <Link to="/"><img src={Logo} alt="text" /></Link> */}
        <ul className="flex flex-row gap-x-[64px] float-left w-full ml-[64px] font-html flex-wrap items-center">
        <li className="text-[#fff] text-[16px] hover:text-mainLight duration-300"><Link to="/">Главная</Link></li>
        <li className="text-[#fff] text-[16px] hover:text-mainLight duration-300"><Link to="/">Главная</Link></li>
        <li className="text-[#fff] text-[16px] hover:text-mainLight duration-300"><Link to="/">Главная</Link></li>
         
          <div className="flex gap-3">
                <button className=" py-2 px-4 border-[#8a6a6a] bg-[#8a6a6a] text-[white] rounded-lg hover:bg-[#b39999]" onClick={handleClick}>Регистрация</button>
                {showWindow && (
                    <div className="flex flex-wrap">
                        <dialog open className="bg-[#ffffff] border border-[black] rounded-2xl my-10"> 
                            <Auth/>
                        </dialog>
                        <button className=" py-2 px-4 border-[#8a6a6a] bg-[#8a6a6a] text-[white] rounded-lg hover:bg-[#b39999] z-10" onClick={handleClick}>Закрыть</button>
                    </div>
                )}
            </div>
          <Search />
        </ul>

        <div className="flex flex-row gap-x-[36px]">
          {/* <Link to="/shopcart"><img src={Basket} alt="cart" className="min-w-[35px]" /></Link> */}
          {/* <img src={Profile_icon} alt="text" /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
