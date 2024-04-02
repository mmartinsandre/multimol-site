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
        className="hidden w-full object-cover h-[180px] md:block filter brightness-50"
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
              <Image src={image} alt={`banner ${index + 1}`} className="filter brightness-50 max-h-[200px]" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        id="about"
        className="px-5 py-12 bg-blue-700 max-w-screen flex gap-4 flex-col rounded-t-2xl -my-6 z-10"
      >
        <span className="text-white text-xl font-light uppercase text-center md:text-left">
          Nossa
        </span>
        <span className="text-blue-950 text-xl font-extrabold uppercase text-center md:text-left -mt-5">
          História
        </span>
        <span className="text-blue-200 tracking-tighter md:tracking-widest text-left">
          Há 12 anos presente em diversas obras de extrema importância para o mercado nacional, atuando em diferentes setores. Nosso foco é na excelência em todos os processos do atendimento, buscando a pontualidade no cronograma e na execução dos serviços.
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
        className="px-5 py-12 bg-gray-900 w-full max-w-screen flex flex-col gap-4 rounded-b-2xl"
      >
        <span className="text-white text-xl font-light uppercase text-center md:text-left">
          Clientes e
        </span>
        <span className="text-blue-500 text-xl font-extrabold uppercase text-center md:text-left -mt-5">
          Parceiros
        </span>
        <div className="py-6 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <Image src={racionalIcon} alt="racional" width={80} />
          <Image src={montoIcon} alt="monto" width={100} />
          <Image src={leonardiIcon} alt="leonardi" width={120} />
          <Image src={mpdIcon} alt="mpd" width={120} />
          <Image src={afonsofrancaIcon} alt="afonsofranca" width={120} />
          <Image src={matecIcon} alt="matec" width={120} />
          <Image src={ribeirocaramIcon} alt="ribeirocaram" width={90} className="filter brightness-150" />
          <Image src={teaIcon} alt="tea" width={60} className="contrast-0" />
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
        <span className="text-blue-950 text-xl font-extrabold uppercase text-center  md:text-left">
          Feedbacks
        </span>
        <div className="items-center justify-center grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="max-w-[300px]">
            <CardContent className="pt-5">
              <span className="italic text-sm text-justify tracking-tighter">
                &quot;Adorei os serviços prestados no galpão de Maringá-PR em 2015!&quot;.
              </span>
            </CardContent>
            <CardFooter className="text-xs md:text-md">
              Marcos Oliveira
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardContent className="pt-5">
              <span className="italic text-sm text-justify tracking-tighter">
                &quot;Adorei os serviços prestados no galpão de Maringá-PR em 2015!&quot;.
              </span>
            </CardContent>
            <CardFooter className="text-xs md:text-md">
              Marcos Oliveira
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardContent className="pt-5">
              <span className="italic text-sm text-justify tracking-tighter">
                &quot;Adorei os serviços prestados no galpão de Maringá-PR em 2015!&quot;.
              </span>
            </CardContent>
            <CardFooter className="text-xs md:text-md">
              Marcos Oliveira
            </CardFooter>
          </Card>
          <Card className="max-w-[300px]">
            <CardContent className="pt-5">
              <span className="italic text-sm text-justify tracking-tighter">
                &quot;Adorei os serviços prestados no galpão de Maringá-PR em 2015!&quot;.
              </span>
            </CardContent>
            <CardFooter className="text-xs md:text-md">
              Marcos Oliveira
            </CardFooter>
          </Card>
        </div>
      </div>

      <FooterComponent />

    </div>
  );
}
