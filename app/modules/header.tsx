import React from "react";
import Image from "next/image";
import logoIcon from "../assets/images/non_slogan_white_logo.png"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button } from  "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const HeaderComponent = () => {
  return (
      <div className="w-full max-w-screen max-h-[100px] px-1 md:px-6 flex justify-between items-center bg-transparent absolute top-0 z-10 gradient-radial">
        <div className="w-11/12 items-center justify-center flex pl-14">
          <Image src={logoIcon} alt="logo" width={160} className="filter brightness-200" />
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <Button variant="ghost" className="text-2xl text-white">
                    <FontAwesomeIcon icon={faBars} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Inicio</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => window.location.href = "#about"}>Sobre</DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = "#clients"}>Clientes</DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = "#feedbacks"}>Feedbacks</DropdownMenuItem>
                <DropdownMenuItem>Contatos</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
  );
};

export default HeaderComponent;