'use client'
import React from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import logoIcon from "../assets/images/non_slogan_logo.png"

const FooterComponent = () => {
    return (
        <div className="relative bottom-0 w-full">
            <div className="flex flex-col md:flex-row w-full">

                <div className="flex flex-col w-full p-5 bg-gray-900 rounded-t-2xl shadow-2xl md:items-center">
                    <div className="flex flex-col md:flex-row md:gap-2 bg-gray-800 rounded-2xl p-2 md:p-4 shadow-2xl md:w-1/4 md:justify-center mt-8">
                        <span className="text-white text-xl font-light uppercase text-center">
                            Entre
                        </span>
                        <span className="text-blue-500 text-xl font-extrabold uppercase text-center">
                            Em contato
                        </span>
                    </div>
                    <div className="text-white flex flex-col gap-2 items-center mt-10">
                        <a href="https://api.whatsapp.com/send?phone=5511981419676" className="">Coordenação de obras: (11) 98141-9676 </a>
                        <a href="https://api.whatsapp.com/send?phone=5511983330675" className="">Coordenação técnica: (11) 98333-0675 </a>
                        <a href="mailto:adm@multimolconstrucoes.com.br" className="">E-mail: adm@multimolconstrucoes.com.br</a>
                    </div>
                    <span className="text-white text-center text-md mt-10">Nos siga nas nossas redes sociais:</span>
                    <div className="text-white flex flex-row gap-8 text-3xl mt-3 justify-center pb-5 md:pb-0">
                        <FontAwesomeIcon icon={faFacebook} />
                        <a href="https://www.instagram.com/multimol.construcoes/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div>

            <div
                id="footer"
                className="-mt-3 px-2 py-6 w-full max-w-screen flex flex-col gap-8 items-center"
            >
                <Image src={logoIcon} alt="multimol" width={130} className="-mb-20 -mt-11" />
                <span className="text-black text-xs text-center font-light">
                    2024 - Todos os direitos reservados - Multimol Construçes
                </span>
            </div>
        </div>
    );
};

export default FooterComponent;