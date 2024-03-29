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
import banner from "assets/images/partners/arenamrv.jpeg"
import logoIcon from "assets/images/logo.png"

import racionalIcon from "assets/images/partners/racional.svg"
import mpdIcon from "assets/images/partners/mpd.svg"
import teaIcon from "assets/images/partners/tea.svg"
import montoIcon from "assets/images/partners/monto.png"
import leonardiIcon from "assets/images/partners/leonardi.png"
import bemarcoIcon from "assets/images/partners/bemarco.png"
import afonsofrancaIcon from "assets/images/partners/afonsofranca.png"
import matecIcon from "assets/images/partners/matec.png"
import ribeirocaramIcon from "assets/images/partners/ribeirocaram.png"
import rioverdeIcon from "assets/images/partners/rioverde.png"

export default function Home() {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-between">
      <div className="w-screen p-3 md:px-6 flex justify-between items-center bg-transparent absolute md:fixed top-0 z-10">
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
        className="max-w-screen md:hidden"
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
        className="px-5 py-12 bg-blue-900 max-w-screen flex flex-col gap-4 md:flex-row md:justify-around"
      >
        <div className="flex flex-col gap-4 min-w-1/2 w-full">
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
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col gap-4 min-w-1/2 w-full">
            <span className="text-white text-xl font-semibold underline decoration-4 underline-offset-4">
              Serviços
            </span>
            <span className="text-white tracking-tighter text left">
              Oferecemos mão de obra qualificada, com ou sem o fornecimento de
              materiais e equipamentos, para serviços em placas pré-moldadas,
              painéis tilt-up’s, alvenarias, estruturas metálicas, vigas e
              pilares in-loco, painéis de drywall, EPS, etc..
            </span>
          </div>
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
      </div>

      <div
        id="feedbacks"
        className="px-5 py-12 bg-white w-full max-w-screen flex flex-col gap-8"
      >
        <span className="text-black text-xl font-semibold underline decoration-4 underline-offset-4">
          Feedbacks
        </span>
        <div className="flex flex-col gap-6 md:flex md:flex-row">
          <Card className="max-w-[400px]">
            <CardHeader className="flex flex-row gap-4">
              <CardDescription className="md:text-md">
                @oconstrutor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span>
                adorei os serviços prestados no galpão de Maringá-PR em 2015!
              </span>
            </CardContent>
            <CardFooter>
              <span className="text-xs md:text-sm font-light text-gray-400">
                Em 21 Dezembro de 2019 as 18:00 via Instagram
              </span>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex flex-row gap-4">
              <CardDescription className="md:text-md">
                @oconstrutor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span>
                adorei os serviços prestados no galpão de Maringá-PR em 2015!
              </span>
            </CardContent>
            <CardFooter>
              <span className="text-xs md:text-sm font-light text-gray-400">
                Em 21 Dezembro de 2019 as 18:00 via Instagram
              </span>
            </CardFooter>
          </Card>
          <Card className="max-w-[400px]">
            <CardHeader className="flex flex-row gap-4">
              <CardDescription className="md:text-md">
                @oconstrutor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span>
                adorei os serviços prestados no galpão de Maringá-PR em 2015!
              </span>
            </CardContent>
            <CardFooter>
              <span className="text-xs md:text-sm font-light text-gray-400">
                Em 21 Dezembro de 2019 as 18:00 via Instagram
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div
        id="contacts"
        className="px-5 py-12 bg-blue-200 w-full max-w-screen flex flex-col md:justify-around md:flex-row gap-8"
      >
        <div className="flex flex-col gap-8">
          <span className="text-black text-xl font-semibold underline decoration-4 underline-offset-4">
            Contatos
          </span>
          <div className="flex flex-col gap-2">
            <span>(11) 98141-9676 (Coord. de obras)</span>
            <span>(11) 98333-0675 (Coord. técnica)</span>
            <span>adm@multimolconstrucoes.com.br</span>
          </div>
          <span className="md:hidden">Nos siga nas nossas redes sociais:</span>
          <div className="flex flex-row gap-8 text-3xl -mt-4 md:hidden">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="flex-col space-y-4 hidden md:block">
          <span>Nos siga nas nossas redes sociais:</span>
          <div className="flex flex-row gap-8 text-3xl -mt-4">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>

      <div
        id="footer"
        className="px-2 py-6 bg-blue-300 w-full max-w-screen flex flex-col gap-8"
      >
        <span className="text-black text-sm text-center font-light">
          2024 - Todos os direitos reservados - Multimol Construçes
        </span>
      </div>
    </div>
  );
}
