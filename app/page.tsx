'use client'
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import HeaderComponent from "./modules/header";
import FooterComponent from "./modules/footer";

import acheRecPic from "./assets/images/banner/ache_rec.jpeg";
import arenaMrvPic from "./assets/images/banner/arena_mrv.jpeg";
import cdLeroyPic from "./assets/images/banner/cd_leroy.jpeg";
import cidadeJardimPic from "./assets/images/banner/cidade_jardim.jpeg";
import dvrBpPic from "./assets/images/banner/dvr_bp.jpeg";
import gnFortalPic from "./assets/images/banner/gn_fortal.jpeg";
import jkIguatemiPic from "./assets/images/banner/jk_iguatemi.jpeg";
import shopBandeiraPic from "./assets/images/banner/shop_bandeira.jpeg";
import shopUniaoPic from "./assets/images/banner/shop_uniao.jpeg";
import tietePlazaPic from "./assets/images/banner/tiete_plaza.jpeg";

import workOnePic from "./assets/images/progress/workone.jpeg";
import workTwoPic from "./assets/images/progress/worktwo.jpeg";
import workThreePic from "./assets/images/progress/workthree.jpeg";
import workFourPic from "./assets/images/progress/workfour.jpeg";

import racionalIcon from "./assets/images/partners/racional.svg";
import mpdIcon from "./assets/images/partners/mpd.svg";
import teaIcon from "./assets/images/partners/tea.svg";
import montoIcon from "./assets/images/partners/monto.png";
import leonardiIcon from "./assets/images/partners/leonardi.png";
import afonsofrancaIcon from "./assets/images/partners/afonsofranca.png";
import matecIcon from "./assets/images/partners/matec.png";
import ribeirocaramIcon from "./assets/images/partners/ribeirocaram.png";
import Slider from "./modules/partners";

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

  const constructionPics = [
    { src: acheRecPic, alt: 'Ache Rec' },
    { src: arenaMrvPic, alt: 'Arena MRV' },
    { src: cdLeroyPic, alt: 'CD Leroy' },
    { src: cidadeJardimPic, alt: 'Cidade Jardim' },
    { src: dvrBpPic, alt: 'DVR BP' },
    { src: gnFortalPic, alt: 'GN Fortal' },
    { src: jkIguatemiPic, alt: 'JK Iguatemi' },
    { src: shopBandeiraPic, alt: 'Shop Bandeira' },
    { src: shopUniaoPic, alt: 'Shop União' },
    { src: tietePlazaPic, alt: 'Tietê Plaza' }
  ];

  const progressPics = [
    { src: workOnePic, alt: 'work' },
    { src: workTwoPic, alt: 'work' },
    { src: workThreePic, alt: 'work' },
    { src: workFourPic, alt: 'work' }
  ]

  return (
    <div className="flex h-full w-full max-w-screen flex-col items-center justify-between overscroll-y-none pt-16 md:pt-16">

      <Button
        className="rounded-full py-8 bg-green-600 fixed z-40 bottom-5 right-5 text-4xl hover:bg-green-800 animate-bounce"
        onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5511981419676&text=Ol%C3%A1%2C%20desejo%20conhecer%20melhor%20os%20servi%C3%A7os%20da%20Multimol'}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Button>

      <HeaderComponent />

      <div id="mosaic" className="hidden md:block">
        <div className="w-full grid grid-cols-5">
          {constructionPics.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} className="object-cover h-full w-full" />
          ))}
        </div>
      </div>

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
          {[acheRecPic, arenaMrvPic, tietePlazaPic, cidadeJardimPic].map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image} alt={`banner ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        id="about"
        className="px-5 pt-6 pb-4 md:py-5 bg-white border-t-4 border-neutral-100 max-w-screen flex md:gap-4 w-full justify-between flex-col rounded-t-2xl -mt-20 md:-mt-6 z-10 md:items-center"
      >
        <div className="flex flex-col md:flex-row md:gap-2 md:pt-6 md:p-0 items-center">
          <div className="h-2 bg-neutral-100 w-1/3 mb-5 rounded-full flex flex-row"></div>
          <span className="text-blue-950 text-xl font-light uppercase text-center md:text-left">
            Nossa
          </span>
          <span className="text-blue-800 text-xl font-extrabold uppercase text-center md:text-left">
            História
          </span>
        </div>
        <span className="text-blue-950 md:tracking-wide text-justify hidden md:block w-1/3">
          Há 12 anos presente em diversas obras de extrema importância para o mercado nacional, atuando em diferentes setores. Nosso foco é na excelência em todos os processos do atendimento, buscando a pontualidade no cronograma e na execução dos serviços.
        </span>
        <div className="flex flex-row justify-center md:justify-end py-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="link" className="text-neutral-400 text-md animate-pulse font-light tracking-tighter underline">
                Ler artigo completo
              </Button>
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
                    <Button variant="outline" className="w-full">Fechar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div
        id="services"
        className="px-5 py-2 w-full max-w-screen flex flex-col gap-8 -mb-2 md:items-center"
      >
        <div className="flex flex-col md:flex-row border-t-2 border-neutral-100 p-2 md:p-4 md:gap-2 md:w-1/2 md:min-w-2/5 md:justify-center">
          <span className="text-gray-950 text-xl font-light uppercase text-center">
            Serviços e
          </span>
          <span className="text-blue-800 text-xl font-extrabold uppercase text-center">
            Procedimentos
          </span>
        </div>
        <span className="text-neutral-400 w-full items-center justify-center font-light text-center tracking-tighter">Alguns dos nossos serviços:</span>
        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tighter text-blue-800">Tratamento de concreto pré-moldados:</span>
            <span className="font-light tracking-tighter text-blue-950">• Equalização de lajes alveolares e pontiamento</span>
            <span className="font-light tracking-tighter text-blue-950">• Abertura e/ou regularização de fundos e frisos de lajes</span>
            <span className="font-light tracking-tighter text-blue-950">• Lixamento manual e/ou mecânico</span>
            <span className="font-light tracking-tighter text-blue-950">• Acabamentos não estruturais em quebrados com massa</span>
            <span className="font-light tracking-tighter text-blue-950">• Impermeabilização</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tighter text-blue-800">Tratamento de juntas de dilatação e frisos técnicos:</span>
            <span className="font-light tracking-tighter text-blue-950">• Aberturas</span>
            <span className="font-light tracking-tighter text-blue-950">• Ajuste e/ou alinhamento</span>
            <span className="font-light tracking-tighter text-blue-950">• Fechamentos</span>
            <span className="font-light tracking-tighter text-blue-950">• Impermeabilização</span>
            <span className="font-light tracking-tighter text-blue-950">• Vedação "com estética" com selante comum e firestop</span>
          </div>
        </div>
        <div className="items-center w-full justify-center flex flex-row py-24 -px-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-4">
            {progressPics.map((image, index) => (
              <Image key={index} src={image.src} alt={image.alt} className="object-cover h-full w-full rounded-2xl p-2" />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full">
        <div
          id="clientsDesktop"
          className="px-5 py-12 w-full max-w-screen flex flex-col gap-4 rounded-t-2xl md:items-center"
        >
          <div className="flex flex-col border-t-2 border-neutral-100 md:flex-row p-2 md:p-4 gap-4 md:gap-2 md:w-1/2 md:min-w-2/5 md:justify-center">
            <span className="text-blue-950 text-xl font-light uppercase text-left">
              Clientes e
            </span>
            <span className="text-blue-800 text-xl font-extrabold uppercase text-left">
              Parceiros
            </span>
          </div>
          <div className="py-6 grid gap-12 grid-cols-4">
            <Image src={racionalIcon} alt="racional" width={80} className="invert grayscale contrast-50" />
            <Image src={montoIcon} alt="monto" width={100} className="invert grayscale contrast-50" />
            <Image src={leonardiIcon} alt="leonardi" width={120} className="invert grayscale contrast-50" />
            <Image src={mpdIcon} alt="mpd" width={120} className="invert grayscale contrast-50" />
            <Image src={afonsofrancaIcon} alt="afonsofranca" width={120} className="invert grayscale contrast-50" />
            <Image src={matecIcon} alt="matec" width={120} className="invert grayscale contrast-50" />
            <Image src={ribeirocaramIcon} alt="ribeirocaram" width={90} className="invert grayscale contrast-50" />
            <Image src={teaIcon} alt="tea" width={60} className="invert grayscale contrast-50" />
          </div>
        </div>
      </div>

      <div
        id="clientsMobile"
        className="px-5 pt-12 pb-20  w-full max-w-screen flex flex-col gap-4 md:hidden rounded-t-2xl"
      >
        <div className="flex flex-col border-t-2 border-neutral-100 p-2 md:p-4 gap-4">
          <span className="text-blue-950 text-xl font-light uppercase text-center">
            Clientes e
          </span>
          <span className="text-blue-800 text-xl font-extrabold uppercase text-center -mt-5">
            Parceiros
          </span>
        </div>
        <Slider />
      </div>

      <div
        id="feedbacks"
        className="px-5 py-12 bg-white w-full max-w-screen flex flex-col gap-8 rounded-t-2xl -mt-5 md:items-center"
      >
        <div className="flex flex-col md:flex-row md:gap-2 border-t-2 border-neutral-100 p-2 md:p-4 md:w-1/2 md:min-w-2/5 md:justify-center">
          <span className="text-gray-950 text-xl font-light uppercase text-center  md:text-left">
            Avaliações
          </span>
          <span className="text-blue-800 text-xl font-extrabold uppercase text-center  md:text-left">
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

