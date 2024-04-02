import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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

const FooterComponent = () => {
return (
    <>
        <div
            id="title"
            className="px-5 py-8 bg-blue-200 w-full max-w-screen flex flex-col md:justify-around md:flex-row gap-8"
        >
            <span className="text-black text-xl font-semibold underline decoration-4 underline-offset-4">
                Fale conosco
            </span>
        </div>

        <div
            id="contacts"
            className="px-5 py-12 bg-blue-200 w-full max-w-screen flex flex-col md:justify-around md:flex-row gap-8 -mt-5"
        >
            <Card className="">
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
                <CardFooter className="flex justify-between">
                    <Button>Enviar mensagem</Button>
                </CardFooter>
            </Card>
            <div className="flex flex-col gap-14">
                <div className="flex flex-col gap-2">
                    <a href="https://api.whatsapp.com/send?phone=5511981419676" className="underline text-base">(11) 98141-9676 (Coord. de obras)</a>
                    <a href="https://api.whatsapp.com/send?phone=5511983330675" className="underline text-base">(11) 98333-0675 (Coord. técnica)</a>
                    <a href="mailto:adm@multimolconstrucoes.com.br" className="underline text-base">adm@multimolconstrucoes.com.br</a>
                </div>
                <span className="text-center text-md">Nos siga nas nossas redes sociais:</span>
                <div className="flex flex-row gap-8 text-3xl -mt-4 justify-center">
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
    </>
);
};

export default FooterComponent;