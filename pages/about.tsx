'use client'
import * as React from "react";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import logoIcon from "../app/assets/images/non_slogan_logo.png"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function AboutPage() {

    const FooterComponent = () => {
        return (
            <>
                <div className="flex flex-col md:flex-row w-full">
                    <div
                        id="title"
                        className=" bg-gray-900 w-full flex flex-col pb-5 md:justify-around rounded-t-2xl md:rounded-tl-2xl p-5 md:rounded-tr-none"
                    >
                        <span className="text-white text-xl font-light uppercase text-center  md:text-left">
                            Solicite
                        </span>
                        <span className="text-blue-500 text-xl font-extrabold uppercase text-center  md:text-left">
                            Um orçamento
                        </span>
                        <Card className="mt-10">
                            <CardHeader>
                                <CardTitle>Escolha o serviço</CardTitle>
                                <CardDescription>Selecione o serviço que você deseja solicitar</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Seu nome</Label>
                                            <Input id="name" placeholder="Digite seu nome" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="framework">Serviço</Label>
                                            <Select>
                                                <SelectTrigger id="framework">
                                                    <SelectValue placeholder="Selecione o serviço" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value="placas-pre-moldadas">Placas pré-moldadas</SelectItem>
                                                    <SelectItem value="painels-tilt-ups">Painéis tilt-up’s</SelectItem>
                                                    <SelectItem value="alvenarias">Alvenarias</SelectItem>
                                                    <SelectItem value="estruturas-metalicas">Estruturas metálicas</SelectItem>
                                                    <SelectItem value="vigas-e-pilares-in-loco">Vigas e pilares in-loco</SelectItem>
                                                    <SelectItem value="painels-de-drywall">Painéis de drywall</SelectItem>
                                                    <SelectItem value="EPS">EPS</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="justify-center md:justify-start">
                                <Button variant="secondary" className="gap-2">
                                    <FontAwesomeIcon icon={faPaperPlane} />Enviar mensagem
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="flex flex-col w-full p-5 bg-blue-700 md:rounded-tr-2xl">
                        <span className="text-white text-xl font-light uppercase text-center  md:text-left">
                            Entre
                        </span>
                        <span className="text-blue-950 text-xl font-extrabold uppercase text-center  md:text-left">
                            Em contato
                        </span>
                        <div className="text-blue-200 flex flex-col gap-2 items-center mt-10">
                            <a href="https://api.whatsapp.com/send?phone=5511981419676" className="">Coordenação de obras: (11) 98141-9676 </a>
                            <a href="https://api.whatsapp.com/send?phone=5511983330675" className="">Coordenação técnica: (11) 98333-0675 </a>
                            <a href="mailto:adm@multimolconstrucoes.com.br" className="">E-mail: adm@multimolconstrucoes.com.br</a>
                        </div>
                        <span className="text-blue-200 text-center text-md mt-10">Nos siga nas nossas redes sociais:</span>
                        <div className="text-blue-200 flex flex-row gap-8 text-3xl mt-3 justify-center pb-5 md:pb-0">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                </div>

                <div
                    id="footer"
                    className="px-2 py-6 w-full max-w-screen flex flex-col gap-8 relative bottom-0 items-center"
                >
                    <Image src={logoIcon} alt="multimol" width={130} className="-mb-20 -mt-11" />
                    <span className="text-black text-xs text-center font-light">
                        2024 - Todos os direitos reservados - Multimol Construçes
                    </span>
                </div>
            </>
        );
    };

    return (
        <div className="flex h-full w-full max-w-screen flex-col items-center justify-between overscroll-y-none">

            <FooterComponent />

        </div>
    );
};