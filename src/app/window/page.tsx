'use client'
import Image from "next/image"
import B3_Face_Gold from "../../../public/B3_Face_gold.png"
import B3_Body_Slim from "../../../public/2_B3_Body_slim-200ml.png"
import B3_Eye_Gold from "../../../public/B3_Eye_gold.png"
import B3_Serum_Gold from "../../../public/B3_Serum_gold.png"
import BG_Lander_new from "../../../public/BG_Lander_New.png"
import Lindenpark from "../../../public/Lindenpark.png"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
    CarouselIndicator
} from '../../components/ui/carousel';
import Word from '../../components/ui/word'

const Window = () => {

    const [openSerum, setOpenSerum] = useState(true)
    const ingredients = [
        {
            id: 1,
            title: "Anti-Aging Peptide Complex",
            description:
                "Anti-Aging Peptide Complex – is a complex formula of short chain amino acids which make up certain proteins needed by the skin.Collagen is also made up of three polypeptide chains, so by adding our complex chain of peptides we help to promote the production of additional collagen within the skin which can have visible anti - aging effects.",
        },
        {
            id: 2,
            title: "Nicotinamide",
            description:
                "Niacinamide – is the bioactive form of Vitamin B3 and has been shown to provide protection against the harmful effects of the sun (UV irradiation), skin aging and environmental insults.",
        },
        {
            id: 3,
            title: "Lactobionic Acid",
            description:
                "Lactobionic Acid – brings a fresh complexion to the skin through skin renewal, maintenance of skin integrity and fortification of the natural Skin Barrier.",
        },
    ];

    return (
        <main className="flex w-full max-h-svh justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed left-0 top-0 z-[100] flex justify-center items-center w-full h-screen overflow-y-hidden backdrop-blur-[8px] ">
                <motion.div
                    onClick={() => {
                        setOpenSerum(!openSerum)
                    }}
                    layout
                    layoutId="openSerum"
                    className="flex justify-center bg-white bg-blur-[24px] p-[32px] max-[800px]:p-[24px] max-[800px]:pr-[0px] border border-black/10 max-[800px]:border-none w-auto max-[800px]:w-full max-w-[1200px] overflow-hidden cursor-pointer"
                >
                    <div className="flex max-[800px]:flex-col select-none">
                        <div className="flex flex-col justify-between space-y-[40px] pr-[40px] max-[800px]:pr-[0px] max-[800px]:pb-[8px] max-w-[650px] max-[800px]:max-w-[100%]">
                            <motion.div
                                layout
                                layoutId="hand-box"
                                className="flex justify-center items-center pt-[12px] w-full h-full"
                            >
                                <motion.img
                                    src="/B3_Serum_Gold.png"
                                    alt="B3 Serum"
                                    className="min-h-[200px] h-[20%]  pr-24 max-h-[200px] object-contain"
                                />
                            </motion.div>

                            <div className="flex flex-col">
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className={`text-[1.5rem] text-[#000] font-semibold`}
                                >
                                    B3 Serum Concentrate
                                </motion.div>
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className={`text-[1rem]  text-[#000]/80 font-normal`}
                                >
                                    Bioactive Vitamin B3 and Anti-Aging Peptide Complex
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start w-auto max-w-[760px]">
                        <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="pt-7 pb-2 text-[1.5rem] text-[#000] font-semibold"
                    >
                        Ingredients
                    </motion.div>
                    {ingredients.map((ingredient, index) => (
                            <div key={index} className="max-w-[35vw] max-[800px]:max-w-[100%]">
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className={`text-[1.125rem]  text-[#000]/90 font-medium`}
                                >
                                    {index + 1}. {ingredient.title}
                                </motion.div>
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className={`max-w-[650px] pb-4 text-[0.875rem] text-[#000]/80 font-normal`}
                                >
                                    {ingredient.description}
                                </motion.div>
                            </div>
                        ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <div className=" h-svh flex justify-center items-center">
                <motion.img
                    src="/B3_Serum_Gold.png"
                    alt="B3 Serum"
                    className="h-[10%] pr-24 max-h-[500px] object-contain"
                />
                <div className="flex flex-col">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`text-[1.5rem] text-[#000] font-semibold`}
                    >
                        B3 Serum Concentrate
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`text-[1rem]  text-[#000]/80 font-normal`}
                    >
                        Bioactive Vitamin B3 and Anti-Aging Peptide Complex
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="pt-4 pb-2 text-[1.125rem] text-[#000] font-semibold"
                    >
                        Ingredients
                    </motion.div>
                    <div className="">
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="max-w-[35vw] max-[800px]:max-w-[100%]">
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className={`text-[1rem]  text-[#000]/90 font-medium`}
                                >
                                    {index + 1}. {ingredient.title}
                                </motion.div>
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className={`max-w-[650px] pb-4 text-[0.875rem] text-[#000]/80 font-normal`}
                                >
                                    {ingredient.description}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Window