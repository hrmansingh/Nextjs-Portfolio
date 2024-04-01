import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 sm:text-[20px]">
            Herman Singh
          </span>
        </a>

        <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20 text-1.4xs sm:w-[600px] sm:text-[20px]">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px]  py-[10px] sm:py-[13px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#projects" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="sm:flex sm:flex-row gap-5 hidden sm:block">
          {Socials.map((social) => (
            <Link href={`${social.url}`} key= {social.src}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
