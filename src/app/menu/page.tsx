'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { TransitionPanel } from '@/components/ui/transition-panel';
import { Lens } from '@/components/ui/lens';

const PoppedOut = () => {

    const [hovering, setHovering] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const Ingredients_Face = [
        {
            id: 1,
            title: "Glucosamine",
            description:
                "A rising star in cosmetic technologies linked with younger looking skin, anti-wrinkle properties and stimulates Hyaluronic Acid production.",
        },
        {
            id: 2,
            title: "Glycerol",
            description:
                "Moisturizer (established as the best possible moisturizing agent), hydrating and softening the skin.",
        },
        {
            id: 3,
            title: "Nicotinamide",
            description:
                "Nicotinamide (Niacinamide) – the bioactive form of Vitamin B3, shown to provide protection against the harmful effects of the sun (UV irradiation), skin aging, and environmental insult.",
        },
        {
            id: 4,
            title: "Lactobionic Acid",
            description:
                "Brings a fresh complexion to the skin through skin renewal, maintenance of skin integrity and fortification of the natural Skin Barrier.",
        },
    ]
    const Ingredients_Eye = [
        {
            id: 1,
            title: "Ceramides",
            description:
                "Key structural components of the skin, replenishing and providing a healthier looking skin.",
        },
        {
            id: 2,
            title: "Glycerol",
            description:
                "Moisturizer (established as the best possible moisturizing agent), hydrating and softening the skin.",
        },
        {
            id: 3,
            title: "Nicotinamide",
            description:
                "Nicotinamide (Niacinamide) – the bioactive form of Vitamin B3, shown to provide protection against the harmful effects of the sun (UV irradiation), skin aging, and environmental insult.",
        },
        {
            id: 4,
            title: "Lactobionic Acid",
            description:
                "Brings a fresh complexion to the skin through skin renewal, maintenance of skin integrity and fortification of the natural Skin Barrier.",
        },
    ]
    const Ingredients_Serum = [
        {
            id: 1,
            title: "Anti-Aging Peptide Complex",
            description:
                "Is a complex formula of short chain amino acids which make up certain proteins needed by the skin. Collagen is also made up of three polypeptide chains, so by adding our complex chain of peptides we help to promote the production of additional collagen within the skin which can have visible anti-aging effects.",
        },
        {
            id: 2,
            title: "Nicotinamide",
            description:
                "Nicotinamide (Niacinamide) – the bioactive form of Vitamin B3, shown to provide protection against the harmful effects of the sun (UV irradiation), skin aging, and environmental insult.",
        },
        {
            id: 3,
            title: "Lactobionic Acid",
            description:
                "Brings a fresh complexion to the skin through skin renewal, maintenance of skin integrity and fortification of the natural Skin Barrier.",
        },
    ]
    const Ingredients_Body = [
        {
            id: 1,
            title: "Silk Protein",
            description:
                "a variety of silk proteins have been associated with skin rejuvenation, anti-ageing and sun protection.",
        },
        {
            id: 2,
            title: "Glycerol",
            description:
                "Moisturizer (established as the best possible moisturizing agent), hydrating and softening the skin.",
        },
        {
            id: 3,
            title: "Nicotinamide",
            description:
                "Nicotinamide (Niacinamide) – the bioactive form of Vitamin B3, shown to provide protection against the harmful effects of the sun (UV irradiation), skin aging, and environmental insult.",
        },
    ]
    const Ingredients_Hand = [
        {
            id: 1,
            title: "Linoleic Acid",
            description:
                "An essential fatty acid and key component of the skins lipid barrier. It strengthens the skins outer layer, making it more resilient and preventing moisture loss, which is essential for keeping hands soft and hydrated, especially in harsh conditions. Other reported ben fits include soothing of irritation, enhancing skin elasticity, regulating cell function, and neutralising damaging free radicals.",
        },
        {
            id: 2,
            title: "Glycerol",
            description:
                "Moisturizer (established as the best possible moisturizing agent), hydrating and softening the skin.",
        },
        {
            id: 3,
            title: "Nicotinamide",
            description:
                "Nicotinamide (Niacinamide) – the bioactive form of Vitamin B3, shown to provide protection against the harmful effects of the sun (UV irradiation), skin aging, and environmental insult.",
        },
        {
            id: 4,
            title: "Lactobionic Acid",
            description:
                "Brings a fresh complexion to the skin through skin renewal, maintenance of skin integrity and fortification of the natural Skin Barrier.",
        },
    ]

    return (
        <main className="h-svh w-full flex overflow-hidden bg-red-400">
            <div className="w-1/2 h-svh border-r-[1px] flex-col flex justify-center items-center border-[#000]/10 ">
                <div className='h-3/4 w-full flex justify-center items-center bg-white'>
                    <Lens hovering={hovering} setHovering={setHovering}>
                        <div className=' p-24'>
                            <img
                                src="/B3_Face_gold.png"
                                alt="B3 Face"
                                className="h-[320px] cursor-none max-h-[450px] object-contain"
                            />
                        </div>
                    </Lens>
                </div>
                <div className='h-1/4 border-t-[1px] flex justify-center bg-white items-center w-full border-[#000]/10 px-24 max-[900px]:px-12'>
                    <div className='overflow-hidden  border-[#000]/10'>
                        <TransitionPanel
                            activeIndex={activeIndex}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            variants={{
                                enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                            }}
                        >
                            {Ingredients_Face.map((item, index) => (
                                <div key={index} className=''>
                                    <p className='text-[#000] font-[400]'>{item.description}</p>
                                </div>
                            ))}
                        </TransitionPanel>
                    </div>
                </div>
            </div>

            <motion.div initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.45 }} className="w-1/2 bg-white h-svh flex justify-center items-center">
                <motion.div initial={{ opacity: 0, filter: "blur(4px)", y:-20 }} animate={{ opacity: 1, filter: "blur(0px)", y:0 }} exit={{ opacity: 0, filter: "blur(4px)" }} transition={{ delay: 0.5, duration: 0.45 }} className=" px-10">
                    <h1 className="  text-[#000] font-[400] max-[1250px]:text-[2.1rem] text-[3rem]">
                        Facial Moisturiser
                    </h1>
                    <p className='text-[#000] font-light text-[1rem]'>
                        With Bioactive Vitamin B3 and Glucosamine.
                    </p>
                    <div className="pt-7">
                        <div className="flex gap-4 flex-wrap">
                            {Ingredients_Face.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`px-[16px] py-[8px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
                                        ? ' text-[#fff] bg-black transition-all duration-100'
                                        : 'text-[#000]/80 transition-all duration-100'
                                        }`}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>



                    </div>
                </motion.div>
            </motion.div>
        </main>
    )
}

export default PoppedOut