'use client'
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import HeaderComponent from "./modules/header";
import FooterComponent from "./modules/footer";

import imageOne from "./assets/images/banner/ache_rec.jpeg"
import imageTwo from "./assets/images/banner/arena_mrv.jpeg"
import imageThree from "./assets/images/banner/tiete_plaza.jpeg"
import imageFour from "./assets/images/banner/cidade_jardim.jpeg"
import banner from "./assets/images/partners/arenamrv.jpeg"

import racionalIcon from "./assets/images/partners/racional.svg"
import mpdIcon from "./assets/images/partners/mpd.svg"
import teaIcon from "./assets/images/partners/tea.svg"
import montoIcon from "./assets/images/partners/monto.png"
import leonardiIcon from "./assets/images/partners/leonardi.png"
import afonsofrancaIcon from "./assets/images/partners/afonsofranca.png"
import matecIcon from "./assets/images/partners/matec.png"
import ribeirocaramIcon from "./assets/images/partners/ribeirocaram.png"
import Slider from "./modules/partners";
import { ResizableDemo } from "./modules/resizable";

export default function Home() {

  const aboutText = `Há 12 anos presente em diversas obras de extrema
  importância para o mercado nacional, tanto de iniciativas
  privadas quanto de interesse público, atuando em edifícios
  corporativos e residenciais, supermercados, hospitais,
  farmacêuticas, galpões logísticos, estádios, shoppings, etc.
  Nosso foco é na excelência em todos os processos do atendimento, desde a captação do cliente
  até a finalização e entrega dos serviços, buscando a pontualidade no cronograma com todas as
  providências de documentação e infraestrutura necessárias para a execução e fluidez.`;

  const aboutTextDesktop = (
    <div className="flex flex-col gap-5 ">
      <span className="tracking-tighter"><a className="font-bold">Missão:</a> Nossa missão é liderar o mercado de construção nacional, oferecendo soluções inovadoras e de alta qualidade para nossos clientes. Buscamos superar expectativas, garantindo excelência em cada etapa do processo, desde a concepção até a entrega final.</span>
      <span className="tracking-tighter"><a className="font-bold">Visão:</a> Queremos ser reconhecidos como referência em construção, impulsionando o desenvolvimento de infraestruturas que transformam comunidades. Buscamos a excelência em cada projeto, aproveitando tecnologias de ponta e práticas sustentáveis para garantir resultados duradouros.</span>
      <span className="tracking-tighter"><a className="font-bold">Valores:</a> excelência, integridade e compromisso com o cliente. Buscamos constantemente aprimorar nossos processos para garantir a qualidade em todos os projetos, agimos com transparência e ética em todas as interações e priorizamos entender e atender às necessidades específicas dos nossos clientes, superando suas expectativas.</span>
    </div>
  );

  return (
    <div className="flex h-full w-full max-w-screen flex-col items-center justify-between overscroll-y-none">

      <Button 
        className="rounded-full py-8 bg-green-600 fixed z-40 bottom-5 right-5 text-4xl hover:bg-green-800 animate-bounce" 
        onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5511981419676&text=Ol%C3%A1%2C%20desejo%20conhecer%20melhor%20os%20servi%C3%A7os%20da%20Multimol'}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Button>

      <HeaderComponent />

      <Image
        src={banner}
        alt="banner"
        className="hidden w-full object-cover h-[180px] md:block filter brightness-50"
      />

      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-screen md:hidden"
      >
        <CarouselContent>
          {[imageOne, imageTwo, imageThree, imageFour].map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image} alt={`banner ${index + 1}`} className="filter brightness-50" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        id="about"
        className="px-5 pt-6 pb-4 shadow-neutral-900 md:py-5 bg-gray-900 max-w-screen flex md:gap-4 w-full justify-between flex-col rounded-t-2xl rounded-b-2xl -mt-28 md:-mt-6 z-10 shadow-2xl md:items-center"
      >
        <div className="flex flex-col md:flex-row md:gap-2 p-2 md:pt-6 md:p-0">
          <span className="text-white text-xl font-light uppercase text-center md:text-left">
            Nossa
          </span>
          <span className="text-blue-500 text-xl font-extrabold uppercase text-center md:text-left">
            História
          </span>
        </div>
        <span className="text-blue-200 md:tracking-wide text-justify hidden md:block w-1/3">
          Há 12 anos presente em diversas obras de extrema importância para o mercado nacional, atuando em diferentes setores. Nosso foco é na excelência em todos os processos do atendimento, buscando a pontualidade no cronograma e na execução dos serviços.
        </span>
        <div className="flex flex-row justify-center md:justify-end">
          <Drawer>
            <DrawerTrigger asChild>
              <div>
                <Button variant="ghost" className="md:hidden text-white text-xl animate-pulse">
                  <FontAwesomeIcon icon={faChevronDown} />
                </Button>
                <Button variant="link" className="hidden md:block text-white text-md">
                  Ver mais
                </Button>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full md:mx-none">
                <DrawerHeader>
                  <DrawerTitle>
                    <span className="md:hidden">Sobre a Multimol</span>
                    <span className="hidden md:block">Nossos Pilares</span>
                  </DrawerTitle>
                </DrawerHeader>
                <div id="topics" className="p-5">
                  <span className="text-justify tracking-tighter md:hidden">{aboutText}</span>
                  <div className="hidden md:block">{aboutTextDesktop}</div>
                </div>
                <DrawerFooter className="items-center">
                  <DrawerClose asChild>
                    <Button variant="outline">Fechar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div
        id="services"
        className="px-5 py-12 w-full max-w-screen flex flex-col gap-8 -mb-2 md:items-center"
      >
        <div className="flex flex-col md:flex-row border-2 border-neutral-200 rounded-2xl p-2 md:p-4 md:gap-2 shadow-2xl md:w-1/4 md:justify-center">
          <span className="text-gray-950 text-xl font-light uppercase text-center">
            Serviços e
          </span>
          <span className="text-blue-500 text-xl font-extrabold uppercase text-center">
            Procedimentos
          </span>
        </div>
        <div className="items-center w-full justify-center flex flex-row">
          <ResizableDemo />
        </div>
      </div>
      
      <div className="hidden md:block w-full">
        <div
          id="clientsDesktop"
          className="px-5 py-12 bg-gray-900 w-full max-w-screen flex flex-col gap-4 rounded-t-2xl md:items-center"
        >
          <div className="flex flex-col md:flex-row bg-gray-800 rounded-2xl p-2 md:p-4 gap-4 md:gap-2 shadow-2xl md:w-1/4 md:justify-center">
            <span className="text-white text-xl font-light uppercase text-left">
              Clientes e
            </span>
            <span className="text-blue-500 text-xl font-extrabold uppercase text-left">
              Parceiros
            </span>
          </div>
          <div className="py-6 grid gap-12 grid-cols-4">
            <Image src={racionalIcon} alt="racional" width={80} />
            <Image src={montoIcon} alt="monto" width={100} />
            <Image src={leonardiIcon} alt="leonardi" width={120} />
            <Image src={mpdIcon} alt="mpd" width={120} />
            <Image src={afonsofrancaIcon} alt="afonsofranca" width={120} />
            <Image src={matecIcon} alt="matec" width={120} />
            <Image src={ribeirocaramIcon} alt="ribeirocaram" width={90} className="filter brightness-150" />
            <Image src={teaIcon} alt="tea" width={60} className="contrast-0" />
          </div>
        </div>
      </div>

      <div
        id="clientsMobile"
        className="px-5 pt-12 pb-20 bg-gray-900 w-full max-w-screen flex flex-col gap-4 md:hidden rounded-t-2xl"
      >
        <div className="flex flex-col bg-gray-800 rounded-2xl p-2 md:p-4 gap-4 shadow-2xl">
          <span className="text-white text-xl font-light uppercase text-center">
            Clientes e
          </span>
          <span className="text-blue-500 text-xl font-extrabold uppercase text-center -mt-5">
            Parceiros
          </span>
        </div>
        <Slider />
      </div>

      <div
        id="feedbacks"
        className="px-5 py-12 bg-white w-full max-w-screen flex flex-col gap-8 rounded-t-2xl -mt-5 md:items-center"
      >
        <div className="flex flex-col md:flex-row md:gap-2 border-2 border-neutral-200 rounded-2xl p-2 md:p-4 shadow-2xl md:w-1/4 md:justify-center">
          <span className="text-gray-950 text-xl font-light uppercase text-center  md:text-left">
            Avaliações
          </span>
          <span className="text-blue-500 text-xl font-extrabold uppercase text-center  md:text-left">
            Dos clientes
          </span>
        </div>
        <div className="items-center justify-center grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="max-w-[300px] shadow-2xl">
            <CardContent className="pt-5">
              <span className="italic text-sm text-justify tracking-tighter">
                &quot;Adorei os serviços prestados no galpão de Maringá-PR em 2015!&quot;.
              </span>
            </CardContent>
            <CardFooter className="text-xs md:text-md">
              Marcos Oliveira
            </CardFooter>
          </Card>
          <Card className="max-w-[300px] shadow-2xl">
            <CardContent className="pt-5">
              <span className="italic text-sm text-justify tracking-tighter">
                &quot;Adorei os serviços prestados no galpão de Maringá-PR em 2015!&quot;.
              </span>
            </CardContent>
            <CardFooter className="text-xs md:text-md">
              Marcos Oliveira
            </CardFooter>
          </Card>
          <Card className="max-w-[300px] shadow-2xl">
            <CardContent className="pt-5">
              <span className="italic text-sm text-justify tracking-tighter">
                &quot;Adorei os serviços prestados no galpão de Maringá-PR em 2015!&quot;.
              </span>
            </CardContent>
            <CardFooter className="text-xs md:text-md">
              Marcos Oliveira
            </CardFooter>
          </Card>
          <Card className="max-w-[300px] shadow-2xl">
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

