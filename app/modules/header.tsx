'use client'
import React from "react";
import Image from "next/image";
import logoIcon from "../assets/images/app_logo.png"
import letteringIcon from "../assets/images/lettering.png"

const HeaderComponent = () => {
  return (
      <div className="max-w-screen gradient-radial absolute top-0 z-20 mx-auto flex h-[70px] w-full items-center justify-between rounded-b-2xl border-b-4 border-neutral-100 bg-white md:h-[90px]">
        <div className="flex w-full items-center justify-start -space-x-5 md:-space-x-6">
          <Image src={logoIcon} alt="logo" className="w-[70px] md:w-[90px]" />
          <Image src={letteringIcon} alt="desc" className="h-16 w-48 object-cover" />
        </div>
      </div>
  );
};

export default HeaderComponent;