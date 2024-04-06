'use client'
import React from "react";
import Image from "next/image";
import logoIcon from "../assets/images/app_logo.png"
import letteringIcon from "../assets/images/lettering.png"

const HeaderComponent = () => {
  return (
      <div className="w-full max-w-screen h-[70px] md:h-[90px] mx-auto flex justify-between items-center absolute top-0 z-20 gradient-radial bg-white rounded-b-2xl border-b-4 border-neutral-100">
        <div className="w-full items-center justify-start flex -space-x-5 md:-space-x-6">
          <Image src={logoIcon} alt="logo" className="w-[70px] md:w-[90px]" />
          <Image src={letteringIcon} alt="desc" className="object-cover h-16 w-48" />
        </div>
      </div>
  );
};

export default HeaderComponent;