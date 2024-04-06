'use client'
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
    return (
        <div className="relative bottom-0 w-full">
            <div className="flex w-full flex-col md:flex-row">

                <div className="flex w-full flex-col rounded-2xl bg-blue-950 p-5 md:items-center">
                    <div className="md:min-w-2/5 mt-8 flex flex-col rounded-2xl bg-blue-900 p-2 shadow-2xl md:w-1/2 md:flex-row md:justify-center md:gap-2 md:p-4">
                        <span className="text-center text-xl font-light uppercase text-white">
                            Entre
                        </span>
                        <span className="text-center text-xl font-extrabold uppercase text-blue-300">
                            Em contato
                        </span>
                    </div>
                    <div className="mt-10 flex flex-col items-center gap-2 text-white">
                        <a href="https://api.whatsapp.com/send?phone=5511981419676" className="">Coordenação de obras: (11) 98141-9676 </a>
                        <a href="https://api.whatsapp.com/send?phone=5511983330675" className="">Coordenação técnica: (11) 98333-0675 </a>
                        <a href="mailto:adm@multimolconstrucoes.com.br" className="">E-mail: adm@multimolconstrucoes.com.br</a>
                    </div>
                    <span className="text-md mt-10 text-center text-white">Nos siga nas nossas redes sociais:</span>
                    <div className="mt-3 flex flex-row justify-center gap-8 pb-5 text-3xl text-white md:pb-0">
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
                className="max-w-screen -mt-3 flex w-full flex-col items-center gap-8 px-2 py-6"
            >
                <span className="text-center text-xs font-light text-black">
                    2024 - Todos os direitos reservados - Multimol Construçes
                </span>
            </div>
        </div>
    );
};

export default FooterComponent;