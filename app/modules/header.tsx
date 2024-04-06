'use client'
import React from "react";
import Image from "next/image";
import logoIcon from "../assets/images/app_logo.png"
import letteringIcon from "../assets/images/lettering.png"

const HeaderComponent = () => {
  return (
      <div className="w-full max-w-screen h-[80px] md:h-[90px] px-1 md:px-6 flex justify-between items-center bg-transparent absolute top-0 z-20 gradient-radial bg-white rounded-b-2xl border-b-4 border-neutral-100">
        <div className="w-full items-center justify-start flex -space-x-5 md:-space-x-6">
          <Image src={logoIcon} alt="logo" className="w-[80px] md:w-[90px]" />
          <Image src={letteringIcon} alt="desc" className="object-cover h-20 w-48" />
        </div>
      </div>
  );
};

export default HeaderComponent;