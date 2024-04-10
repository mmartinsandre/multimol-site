'use client'
import React, { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Slider from "./modules/partners";
import HeaderComponent from "./modules/header";
import FooterComponent from "./modules/footer";
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
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import acheRecPic from "./assets/images/banner/ache_rec.jpeg";
import arenaMrvPic from "./assets/images/banner/arena_mrv.jpeg";
import allianzPic from "./assets/images/banner/allianz.jpeg"
import cdLeroyPic from "./assets/images/banner/cd_leroy.jpeg";
import cidadeJardimPic from "./assets/images/banner/cidade_jardim.jpeg";
import dvrBpPic from "./assets/images/banner/dvr_bp.jpeg";
import gnFortalPic from "./assets/images/banner/gn_fortal.jpeg";
import hemobrasPic from "./assets/images/banner/hemobras.jpeg"
import jkIguatemiPic from "./assets/images/banner/jk_iguatemi.jpeg";
import shopBandeiraPic from "./assets/images/banner/shop_bandeira.jpeg";
import shopUniaoPic from "./assets/images/banner/shop_uniao.jpeg";
import tietePlazaPic from "./assets/images/banner/tiete_plaza.jpeg";

import workOnePic from "./assets/images/progress/workone.jpeg";
import workTwoPic from "./assets/images/progress/worktwo.jpeg";
import workThreePic from "./assets/images/progress/workthree.jpeg";
import workFourPic from "./assets/images/progress/workfour.jpeg";

import racionalIcon from "./assets/images/partners/racional.svg";
import mpdIcon from "./assets/images/partners/mpd.png";
import teaIcon from "./assets/images/partners/tea.svg";
import montoIcon from "./assets/images/partners/monto.png";
import leonardiIcon from "./assets/images/partners/leonardi.png";
import afonsofrancaIcon from "./assets/images/partners/afonsofranca.png";
import matecIcon from "./assets/images/partners/matec.png";
import ribeirocaramIcon from "./assets/images/partners/ribeirocaram.png";
import { Skeleton } from "./components/ui/skeleton";

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
    { src: acheRecPic, alt: 'Ache - Recife/PE' },
    { src: arenaMrvPic, alt: 'Arena MRV - Belo Horizonte/MG' },
    { src: allianzPic, alt: 'Allianz Parque - São Paulo/SP' },
    { src: cdLeroyPic, alt: 'Leroy Merlin - Cajamar/SP' },
    { src: cidadeJardimPic, alt: 'Cidade Jardim - São Paulo/SP' },
    { src: dvrBpPic, alt: 'DVR Business - Araquari/SC' },
    { src: gnFortalPic, alt: 'GN - Fortaleza/CE' },
    { src: hemobrasPic, alt: 'Hemobras - Goiânia/GO' },
    { src: jkIguatemiPic, alt: 'JK Iguatemi - São Paulo/SP' },
    { src: shopBandeiraPic, alt: 'Shopping Bandeira - Campinas/SP' },
    { src: shopUniaoPic, alt: 'Shopping União - Osasco/SP' },
    { src: tietePlazaPic, alt: 'Tietê Plaza Shopping - São Paulo/SP' }
  ];

  const progressPics = [
    { src: workOnePic, alt: 'pintura' },
    { src: workTwoPic, alt: 'vedação' },
    { src: workThreePic, alt: 'calibragem' },
    { src: workFourPic, alt: 'alinhamento' }
  ]

  const [showAllImages, setShowAllImages] = useState(false);
  const showImageCount = showAllImages ? progressPics.length : 2;

  const handleShowMoreImages = () => {
    setShowAllImages(true);
  };


  return (
    <div className="max-w-screen flex size-full flex-col items-center justify-between overscroll-y-none pt-[60px] md:pt-16">

      <Button
        className="fixed bottom-5 right-5 z-40 animate-bounce rounded-full bg-green-600 py-8 text-4xl hover:bg-green-800"
        onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5511981419676&text=Ol%C3%A1%2C%20desejo%20conhecer%20melhor%20os%20servi%C3%A7os%20da%20Multimol'}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Button>

      <HeaderComponent />

      <div id="mosaic" className="hidden md:block">
        <div className="grid w-full grid-cols-6">
          {constructionPics.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} className="size-full object-cover" />
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
        className="max-w-screen w-full md:hidden"
      >
        <CarouselContent>
          {constructionPics.map((image, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-full z-10 absolute items-center justify-center flex">
                <span className="text-white bg-blue-800 p-1.5 rounded-xl">{image.alt}</span>
              </div>
              <Image src={image.src} alt={`banner ${index + 1}`} className="size-full z-0 brightness-50" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        id="about"
        className="max-w-screen z-10 -mt-3 flex w-full flex-col justify-between rounded-t-2xl border-t-4 border-neutral-100 bg-white p-5 md:items-center md:gap-4"
      >
        <div className="flex flex-col items-center md:flex-row md:gap-2 md:p-0 md:pt-6">
          <div className="mb-5 flex h-2 w-1/3 flex-row rounded-full bg-neutral-100"></div>
          <span className="text-center text-xl font-light uppercase text-blue-950 md:text-left">
            Nossa
          </span>
          <span className="text-center text-xl font-extrabold uppercase text-blue-800 md:text-left">
            História
          </span>
        </div>
        <span className="hidden w-1/3 text-justify text-blue-950 md:block md:tracking-tighter">
          {aboutText}
        </span>
        <div className="flex flex-row justify-center py-4 md:justify-end">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="link" className="text-md animate-pulse font-light tracking-tighter text-neutral-400 underline">
                Ler artigo completo
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="md:mx-none mx-auto w-full">
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
        className="max-w-screen -mb-2 flex w-full flex-col gap-8 px-5 py-2 md:items-center"
      >
        <div className="md:min-w-2/5 flex flex-col border-t-2 border-neutral-100 p-2 md:w-1/2 md:flex-row md:justify-center md:gap-2 md:p-4">
          <span className="text-center text-xl font-light uppercase text-gray-950">
            Serviços e
          </span>
          <span className="text-center text-xl font-extrabold uppercase text-blue-800">
            Procedimentos
          </span>
        </div>
        <span className="w-full items-center justify-center text-center font-light tracking-tighter text-neutral-400">Alguns dos nossos serviços:</span>
        <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
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
            <span className="font-light tracking-tighter text-blue-950">• Vedação &quot;com estética&quot; com selante comum e firestop</span>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center md:hidden">
          <div className="grid w-full grid-cols-1 md:grid-cols-4">
            {progressPics.slice(0, showImageCount).map((image, index) => (
              <div className="flex flex-col items-center justify-center w-full p-2">
                <Image key={index} src={image.src} alt={image.alt} className="size-full rounded-t-2xl object-cover" />
                <span className="font-light text-sm uppercase bg-neutral-100 border-2 border-neutral-200 rounded-b-2xl w-full text-center p-2 shadow-2xl">{image.alt}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid w-full grid-cols-1 items-center justify-center py-20 md:grid-cols-4">
            {progressPics.map((image, index) => (
              <div className="flex flex-col items-center justify-center w-full p-2">
                <Image key={index} src={image.src} alt={image.alt} className="size-full rounded-t-2xl object-cover" />
                <span className="font-light text-sm uppercase bg-neutral-100 border-2 border-neutral-200 rounded-b-2xl w-full text-center p-2 shadow-2xl">{image.alt}</span>
              </div>
            ))}
          </div>
        </div>
        {!showAllImages && (
          <div className="flex justify-center md:hidden">
            <Button onClick={handleShowMoreImages} variant="link" className="underline">
              Ver mais
            </Button>
          </div>
        )}
      </div>

      <div className="hidden w-full md:block">
        <div
          id="clientsDesktop"
          className="max-w-screen flex w-full flex-col gap-4 rounded-t-2xl px-5 py-12 md:items-center"
        >
          <div className="md:min-w-2/5 flex flex-col gap-4 border-t-2 border-neutral-100 p-2 md:w-1/2 md:flex-row md:justify-center md:gap-2 md:p-4">
            <span className="text-left text-xl font-light uppercase text-blue-950">
              Clientes e
            </span>
            <span className="text-left text-xl font-extrabold uppercase text-blue-800">
              Parceiros
            </span>
          </div>
          <div className="grid grid-cols-4 gap-12 py-6 item-center justify-center align-baseline">
            <Image src={racionalIcon} alt="racional" width={80} className="" />
            <Image src={montoIcon} alt="monto" width={120} className="" />
            <Image src={leonardiIcon} alt="leonardi" width={100} className="" />
            <Image src={mpdIcon} alt="mpd" width={120} height={100} className="" />
            <Image src={afonsofrancaIcon} alt="afonsofranca" width={120} className="" />
            <Image src={matecIcon} alt="matec" width={120} className="" />
            <Image src={ribeirocaramIcon} alt="ribeirocaram" width={90} className="" />
            <Image src={teaIcon} alt="tea" width={60} className="" />
          </div>
        </div>
      </div>

      <div
        id="clientsMobile"
        className="max-w-screen flex w-full  flex-col gap-4 rounded-t-2xl px-5 pb-20 pt-12 md:hidden"
      >
        <div className="flex flex-col gap-4 border-t-2 border-neutral-100 p-2 md:p-4">
          <span className="text-center text-xl font-light uppercase text-blue-950">
            Clientes e
          </span>
          <span className="-mt-5 text-center text-xl font-extrabold uppercase text-blue-800">
            Parceiros
          </span>
        </div>
        <Slider />
      </div>

      <div
        id="feedbacks"
        className="max-w-screen -mt-5 flex w-full flex-col gap-8 rounded-t-2xl bg-white px-5 py-12 md:items-center"
      >
        <div className="md:min-w-2/5 flex flex-col border-t-2 border-neutral-100 p-2 md:w-1/2 md:flex-row md:justify-center md:gap-2 md:p-4">
          <span className="text-center text-xl font-light uppercase text-gray-950  md:text-left">
            Avaliações
          </span>
          <span className="text-center text-xl font-extrabold uppercase text-blue-800  md:text-left">
            Dos clientes
          </span>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="max-w-[400px] min-h-[120px] shadow-2xl">
            <CardContent className="pt-5">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-[400px] min-h-[120px] shadow-2xl">
            <CardContent className="pt-5">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-[400px] min-h-[120px] shadow-2xl">
            <CardContent className="pt-5">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-[400px] min-h-[120px] shadow-2xl">
            <CardContent className="pt-5">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FooterComponent />

    </div>
  );
}

