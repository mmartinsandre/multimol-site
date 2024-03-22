'use client'
import * as React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from  "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import imageOne from "assets/images/432750439_405561108788301_5075291415628301266_n.jpg"
import imageTwo from "assets/images/427285700_734099785490705_8667246861789682469_n.jpg"
import imageThree from "assets/images/432750439_405561108788301_5075291415628301266_n.jpg"
import logoIcon from "assets/images/logo-multimol.png"

export default function Home() {
  return (
    <div className="flex w-full h-full max-w-screen flex-col items-center justify-between">

      <div className="w-screen p-3 flex justify-between items-center bg-transparent absolute top-0 z-10">
        <Image src={logoIcon} alt="logo" width={80}/>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="text-2xl text-white">
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Carousel 
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {[imageOne, imageTwo, imageThree].map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image} alt={`banner ${index + 1}`}/>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="px-5 py-16 bg-blue-900 w-full flex flex-col gap-4">
        <span className="text-white text-xl font-semibold underline decoration-4 underline-offset-4">Sobre</span>
        <span className="text-white tracking-tighter	">A Multimol é uma construtora líder de mercado, especializada em projetos inovadores e sustentáveis. Com mais de 20 anos de experiência, nossa missão é construir espaços que transformam vidas e cidades.</span>
      </div>
    </div>
  );
}
