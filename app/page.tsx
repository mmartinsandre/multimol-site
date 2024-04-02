'use client'
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button } from  "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import HeaderComponent from "./modules/header";
import FooterComponent from "./modules/footer";

import imageOne from "./assets/images/banner/432750439_405561108788301_5075291415628301266_n.jpg"
import imageTwo from "./assets/images/banner/427285700_734099785490705_8667246861789682469_n.jpg"
import imageThree from "./assets/images/banner/432750439_405561108788301_5075291415628301266_n.jpg"
import banner from "./assets/images/partners/arenamrv.jpeg"

import racionalIcon from "./assets/images/partners/racional.svg"
import mpdIcon from "./assets/images/partners/mpd.svg"
import teaIcon from "./assets/images/partners/tea.svg"
import montoIcon from "./assets/images/partners/monto.png"
import leonardiIcon from "./assets/images/partners/leonardi.png"
import bemarcoIcon from "./assets/images/partners/bemarco.png"
import afonsofrancaIcon from "./assets/images/partners/afonsofranca.png"
import matecIcon from "./assets/images/partners/matec.png"
import ribeirocaramIcon from "./assets/images/partners/ribeirocaram.png"
import rioverdeIcon from "./assets/images/partners/rioverde.png"

export default function Home() {
  return (
    <div className="flex h-full w-full max-w-screen flex-col items-center justify-between overscroll-y-none">

      <HeaderComponent />

      <Image
        src={banner}
        alt="banner"
        className="hidden w-full object-cover h-[300px] md:block"
      />

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
        className="w-full max-w-screen md:hidden"
      >
        <CarouselContent>
          {[imageOne, imageTwo, imageThree].map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image} alt={`banner ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        id="about"
        className="px-5 py-12 bg-blue-900 max-w-screen flex gap-4 flex-col"
      >
        <span className="text-white text-xl font-semibold underline decoration-4 underline-offset-4">
          Sobre
        </span>
        <span className="text-white tracking-tighter md:tracking-tight text left">
          Há 12 anos presente em diversas obras de extrema importância para o
          mercado nacional, tanto de iniciativas privadas quanto de interesse
          público, atuando em edifícios corporativos e residenciais,
          supermercados, hospitais, farmacêuticas, galpões logísticos,
          estádios, shoppings, etc. Nosso foco é na excelência em todos os
          processos do atendimento, desde a captação do cliente até a
          finalização e entrega dos serviços, buscando a pontualidade no
          cronograma com todas as providências de documentação e
          infraestrutura necessários para a execução e fluidez.
        </span>
        <div className="flex flex-row justify-end">
          <Button variant="ghost" onClick={() => window.location.href = "/about"} className="md:hidden text-white text-xl">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button variant="link" onClick={() => window.location.href = "/about"} className="hidden md:block text-white text-md">
            Ver mais
          </Button>
        </div>
      </div>

      <div
        id="clients"
        className="px-5 py-12 bg-gray-900 w-full max-w-screen flex flex-col gap-4"
      >
        <span className="text-white text-xl font-semibold underline decoration-4 underline-offset-4">
          Clientes
        </span>
        <div className="py-6 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <Image src={racionalIcon} alt="racional" width={80} />
          <Image src={montoIcon} alt="monto" width={100} />
          <Image src={leonardiIcon} alt="leonardi" width={120} />
          <Image src={mpdIcon} alt="mpd" width={120} />
          <Image src={afonsofrancaIcon} alt="afonsofranca" width={120} />
          <Image src={matecIcon} alt="matec" width={120} />
          <Image src={ribeirocaramIcon} alt="ribeirocaram" width={90} />
          <Image src={teaIcon} alt="tea" width={60} />
        </div>
        <div className="flex flex-row justify-end">
          <Button variant="ghost" onClick={() => window.location.href = "/about"} className="md:hidden text-white text-xl">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button variant="link" onClick={() => window.location.href = "/about"} className="hidden md:block text-white text-md">
            Ver mais
          </Button>
        </div>
      </div>

      <div
        id="feedbacks"
        className="px-5 py-12 bg-white w-full max-w-screen flex flex-col gap-8"
      >
        <span className="text-black text-xl font-semibold underline decoration-4 underline-offset-4">
          Feedbacks
        </span>
        <div className="items-center justify-center grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="max-w-[300px]">
            <CardHeader>
              <CardDescription className="text-xs md:text-md">
                Marcos Oliveira
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="italic text-sm text-justify tracking-tighter">
                "adorei os serviços prestados no galpão de Maringá-PR em 2015!".
              </span>
            </CardContent>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader>
              <CardDescription className="text-xs md:text-md">
                Marcos Oliveira
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="italic text-sm text-justify tracking-tighter">
                "adorei os serviços prestados no galpão de Maringá-PR em 2015!".
              </span>
            </CardContent>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader>
              <CardDescription className="text-xs md:text-md">
                Marcos Oliveira
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="italic text-sm text-justify tracking-tighter">
                "adorei os serviços prestados no galpão de Maringá-PR em 2015!".
              </span>
            </CardContent>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader>
              <CardDescription className="text-xs md:text-md">
                Marcos Oliveira
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="italic text-sm text-justify tracking-tighter">
                "adorei os serviços prestados no galpão de Maringá-PR em 2015!".
              </span>
            </CardContent>
          </Card>
        </div>
      </div>

      <FooterComponent />

    </div>
  );
}
