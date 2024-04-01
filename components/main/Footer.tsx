import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-90">
                    <div className="font-bold text-[16px]">Community</div>
                    
                    <a href="https://github.com/hrmansingh" className="flex flex-row items-center my-[15px] cursor-pointer" style={{zIndex:"200"}}>
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px] cursor-pointer z-101">Github</span>    
                    </a>
                    <a href="" className="flex flex-row items-center my-[15px] cursor-pointer" style={{zIndex:"200"}}>
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.instagram.com/codegarh/" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   {/* <p className="flex  items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]"></span>    
                    </p> */}
                    <a href="mailto:23hermansingh@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer" style={{zIndex:"200"}}>
                        <span className="text-[15px] ml-[6px] cursor-pointer">23hermansingh@gmail.com</span>    
                    </a>
                </div>
            </div>

            <div className="mb-[20px]  my-16 text-[15px] text-center">
                &copy; Herman 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer