'use client'
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button } from  "@/components/ui/button";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import imageOne from "assets/images/banner/432750439_405561108788301_5075291415628301266_n.jpg"
import imageTwo from "assets/images/banner/427285700_734099785490705_8667246861789682469_n.jpg"
import imageThree from "assets/images/banner/432750439_405561108788301_5075291415628301266_n.jpg"
import logoIcon from "assets/images/logo.png"

import racionalIcon from "assets/images/partners/racional.svg"
import mpdIcon from "assets/images/partners/mpd.svg"
import montoIcon from "assets/images/partners/monto.png"
import leonardiIcon from "assets/images/partners/leonardi.png"

export default function Home() {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-between">

      <div className="w-screen p-3 flex justify-between items-center bg-transparent absolute top-0 z-10">
        <Image src={logoIcon} alt="logo" width={80} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="text-2xl text-white">
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Inicio</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sobre</DropdownMenuItem>
            <DropdownMenuItem>Clientes</DropdownMenuItem>
            <DropdownMenuItem>Feedbacks</DropdownMenuItem>
            <DropdownMenuItem>Contatos</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-screen"
      >
        <CarouselContent>
          {[imageOne, imageTwo, imageThree].map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image} alt={`banner ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="px-5 py-16 bg-blue-900 max-w-screen flex flex-col gap-4">
        <span className="text-white text-xl font-semibold underline decoration-4 underline-offset-4">
          Sobre
        </span>
        <span className="text-white tracking-tighter	">
          A Multimol é uma construtora líder de mercado, especializada em
          projetos inovadores e sustentáveis. Com mais de 20 anos de
          experiência, nossa missão é construir espaços que transformam vidas e
          cidades.
        </span>
      </div>

      <div className="px-5 pb-2 pt-12 -my-2 bg-gray-600 w-full max-w-screen">
        <span className="text-white text-xl font-semibold underline decoration-4 underline-offset-4">
          Clientes
        </span>
      </div>

      <div className="px-5 py-10 bg-gray-600 w-full max-w-screen grid grid-cols-2 gap-4">
        <Image src={racionalIcon} alt="racional" width={100} height={100} />
        <Image src={montoIcon} alt="monto" width={100} height={100} />
        <Image src={leonardiIcon} alt="leonardi" width={100} height={100} />
        <Image src={mpdIcon} alt="mpd" width={100} height={100} />
      </div>

      <div className="px-5 py-12 bg-white w-full max-w-screen flex flex-col gap-8">
        <span className="text-black text-xl font-semibold underline decoration-4 underline-offset-4">
          Feedbacks
        </span>
        <div className="flex flex-col gap-6 md:flex md:flex-row">
          <Card className="max-w-[400px]">
            <CardHeader className="flex flex-row gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardDescription>@oconstrutor</CardDescription>
            </CardHeader>
            <CardContent>
              <span>adorei os serviços prestados no galpão de Maringá-PR em 2015!</span>
            </CardContent>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex flex-row gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardDescription>@oconstrutor</CardDescription>
            </CardHeader>
            <CardContent>
              <span>adorei os serviços prestados no galpão de Maringá-PR em 2015!</span>
            </CardContent>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex flex-row gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardDescription>@oconstrutor</CardDescription>
            </CardHeader>
            <CardContent>
              <span>adorei os serviços prestados no galpão de Maringá-PR em 2015!</span>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="px-5 pt-12 pb-2 bg-blue-200 w-full max-w-screen flex flex-col gap-8">
        <span className="text-black text-xl font-semibold underline decoration-4 underline-offset-4">
          Contatos
        </span>
        <div className="flex flex-col gap-4">
          <span>(11) 98141-9676 (Coord. de obras)</span>
          <span>(11) 98333-0675 (Coord. técnica)</span>
          <span>adm@multimolconstrucoes.com.br</span>
        </div>
        <span>Nos siga nas nossas redes sociais:</span>
        <div className="flex flex-row gap-8 text-3xl -mt-4">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>

    </div>
  );
}
