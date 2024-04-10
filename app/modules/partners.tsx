import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

import racionalIcon from "../assets/images/partners/racional.svg"
import mpdIcon from "../assets/images/partners/mpd.png"
import teaIcon from "../assets/images/partners/tea.svg"
import montoIcon from "../assets/images/partners/monto.png"
import leonardiIcon from "../assets/images/partners/leonardi.png"
import bemarcoIcon from "../assets/images/partners/bemarco.png"
import afonsofrancaIcon from "../assets/images/partners/afonsofranca.png"
import matecIcon from "../assets/images/partners/matec.png"
import ribeirocaramIcon from "../assets/images/partners/ribeirocaram.png"
import rioverdeIcon from "../assets/images/partners/rioverde.png"

const slides = [
    racionalIcon,
    mpdIcon,
    teaIcon,
    montoIcon,
    leonardiIcon,
    bemarcoIcon,
    afonsofrancaIcon,
    matecIcon,
    ribeirocaramIcon,
    rioverdeIcon
];

const Slider = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative mt-8 w-full overflow-hidden">
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-400%'],
                    transition: {
                        ease: 'linear',
                        duration: 10,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="shrink-0" style={{ width: `${400 / slides.length}%` }}>
                        <div className="mx-6 flex h-full flex-col items-center justify-center">
                        <Image src={slide} alt={`partner-${index}`} className="" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;