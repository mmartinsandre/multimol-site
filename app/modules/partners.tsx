import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

import racionalIcon from "../assets/images/partners/racional.svg"
import mpdIcon from "../assets/images/partners/mpd.svg"
import teaIcon from "../assets/images/partners/tea.svg"
import montoIcon from "../assets/images/partners/monto.png"
import leonardiIcon from "../assets/images/partners/leonardi.png"
import bemarcoIcon from "../assets/images/partners/bemarco.png"
import afonsofrancaIcon from "../assets/images/partners/afonsofranca.png"
import matecIcon from "../assets/images/partners/matec.png"
import ribeirocaramIcon from "../assets/images/partners/ribeirocaram.png"
import rioverdeIcon from "../assets/images/partners/rioverde.png"

// Define the array of slides with images
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
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden mt-8">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-380%'],
                    transition: {
                        ease: 'linear',
                        duration: 10,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides with images */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${380 / slides.length}%` }}>
                        <div className="flex flex-col items-center justify-center h-full mx-6">
                        <Image src={slide} alt={`partner-${index}`} className="invert grayscale contrast-50" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;