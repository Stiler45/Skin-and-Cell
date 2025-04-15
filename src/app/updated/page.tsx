'use client'
import Image from "next/image"
import BG_Lander_new from "../../../public/BG_Lander_New.png"
import Lindenpark from "../../../public/Lindenpark.png"
import { motion, AnimatePresence } from "framer-motion"
import { TextEffect } from "@/components/ui/text-effect"
import { useEffect, useState, useRef } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from '../../components/ui/carousel';
import Word from '../../components/ui/word'
import { TransitionPanel } from '@/components/ui/transition-panel';
import { Lens } from '@/components/ui/lens';

const Updated = () => {

    const [openSerum, setOpenSerum] = useState(false)
    const [openFace, setOpenFace] = useState(false)
    const [openEye, setOpenEye] = useState(false)
    const [openBody, setOpenBody] = useState(false)
    const [openHand, setOpenHand] = useState(false)
    const [openHam, setOpenHam] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [hoveredOne, setHoveredOne] = useState(false)
    const [hoveredTwo, setHoveredTwo] = useState(false)
    const [hoveredThree, setHoveredThree] = useState(false)
    const [hoveredFour, setHoveredFour] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null);
    const sectionRefOne = useRef<HTMLDivElement>(null);
    const sectionRefThree = useRef<HTMLDivElement>(null);
    const sectionRefFour = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const shouldLockScroll = openHam || openSerum || openEye || openHand || openFace || openBody;
      
        if (shouldLockScroll) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      
        return () => {
          document.body.style.overflow = "";
        };
      }, [openHam, openSerum, openEye, openHand, openFace, openBody]);
      

    const items = [
        "Products",
        "Bioactive Technology",
        "Coming Products",
        "About Us",
        "Contact"
    ];
    const Menu: React.FC<{ className?: string }> = ({ className }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={className} width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>)
    }
    const Close: React.FC<{ className?: string }> = ({ className }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={className} width="28" height="28" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        )
    }
    

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

    const paragraph = "Skin and Cell AG was founded in Switzerland in 2021 as a new skin science company born out of the experience of a group of eminent oncologists, dermatologists, epidemiologists and skin formulation experts."

    return (
        <main className="w-full overflow-x-hidden">
            <section className="h-svh max-h-svh flex-col -z-10 ">
                <Image
                    src={BG_Lander_new}
                    priority
                    alt="Landerbackground"
                    className="z-[-1] absolute w-full h-svh object-cover sm:object-center md:object-[center_top] lg:object-cover" />
                <div className="top-[-1%] absolute flex justify-center  items-center w-full h-svh">
                    <motion.div

                        className="z-[50] flex flex-col max-[600px]:justify-between">
                        <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.35} className="  text-[#fff] text-center font-[400] max-[800px]:text-[3rem] max-[500px]:text-[2.1rem] text-[3.875rem]">
                            New Bioactive Skincare
                        </TextEffect>
                        <div className="flex  justify-start items-center px-[4px]">
                            <div className="flex items-center">
                                <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.35} className="font-normal text-[#fff] text-center  text-[1.25rem] max-[800px]:text-[1rem] max-[500px]:text-[0.875rem]">
                                    From The Glarner Alps in Switzerland made with the highest cosmetic standards.
                                </TextEffect>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, filter: "blur(6px)", y: 15 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} transition={{ delay: 1.15, duration: 0.5 }} className="flex w-full top-4 h-[115px] items-center absolute justify-between px-12">
                        <div className="space-x-6 min-[1000px]:flex hidden">
                            <motion.div onClick={() => { sectionRef.current?.scrollIntoView({ behavior: "smooth" }); }} onMouseEnter={() => (setHovered(true))} onMouseLeave={() => { setHovered(false) }} className="flex flex-col pl-[8px]">
                                <p className=" cursor-pointer font-normal text-[#fff] max-[800px]:text-[14px] text-[20px] ">
                                    Products
                                </p>
                                <div className={`h-[1px] ${hovered ? "w-full" : "w-[0px]"} transition-all duration-300 bg-white`} />
                            </motion.div>

                            <motion.div onClick={() => { sectionRefOne.current?.scrollIntoView({ behavior: "smooth" }); }} onMouseEnter={() => (setHoveredOne(true))} onMouseLeave={() => { setHoveredOne(false) }} className="flex flex-col pl-[8px]">
                                <p className=" cursor-pointer font-normal text-[#fff] max-[800px]:text-[14px] text-[20px] ">
                                    Bioactive Technology
                                </p>
                                <div className={`h-[1px] ${hoveredOne ? "w-full" : "w-[0px]"} transition-all duration-300 bg-white`} />
                            </motion.div>

                            <motion.div onClick={() => { window.location.href = '/pdf'; }} onMouseEnter={() => (setHoveredTwo(true))} onMouseLeave={() => { setHoveredTwo(false) }} className="flex flex-col pl-[8px]">
                                <p className=" cursor-pointer font-normal text-[#fff] max-[800px]:text-[14px] text-[20px] ">
                                    Coming Products
                                </p>
                                <div className={`h-[1px] ${hoveredTwo ? "w-full" : "w-[0px]"} transition-all duration-300 bg-white`} />
                            </motion.div>

                        </div>
                        <div className="space-x-6 min-[1000px]:flex hidden">
                            <motion.div onClick={() => { sectionRefThree.current?.scrollIntoView({ behavior: "smooth" }); }} onMouseEnter={() => (setHoveredThree(true))} onMouseLeave={() => { setHoveredThree(false) }} className="flex flex-col pl-[8px]">
                                <p className=" cursor-pointer font-normal text-[#fff] max-[800px]:text-[14px] text-[20px] ">
                                    About Us
                                </p>
                                <div className={`h-[1px] ${hoveredThree ? "w-full" : "w-[0px]"} transition-all duration-300 bg-white`} />
                            </motion.div>

                            <motion.div onClick={() => { sectionRefFour.current?.scrollIntoView({ behavior: "smooth" }); }} onMouseEnter={() => (setHoveredFour(true))} onMouseLeave={() => { setHoveredFour(false) }} className="flex flex-col pl-[8px]">
                                <p className=" cursor-pointer font-normal text-[#fff] max-[800px]:text-[14px] text-[20px] ">
                                    Contact
                                </p>
                                <div className={`h-[1px] ${hoveredFour ? "w-full" : "w-[0px]"} transition-all duration-300 bg-white`} />
                            </motion.div>

                        </div>
                        <div className="min-[1000px]:hidden flex justify-center items-center w-full">
                            <div onClick={() => { setOpenHam(true) }} className="cursor-pointer p-4 bg-white/10 backdrop-blur-3xl border border-[#fff]/10">
                                <Menu className="" />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <AnimatePresence>
                    {openHam && (
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ mass: 1, stiffness: 300, damping: 30, duration: 0.4 }}
                            className="absolute overflow-x-hidden left-0 top-0 z-[100] flex justify-center items-center w-full h-screen overflow-y-hidden"
                        >
                            <div className="w-full bg-[#fff] backdrop-blur-md h-full flex flex-col justify-start p-8">
                                <div onClick={() => setOpenHam(false)} className="cursor-pointer flex justify-center p-4">
                                    <Close className="backdrop-blur-3xl" />
                                </div>
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                                    }}
                                    className="flex flex-col py-8 space-y-16 items-center justify-center h-svh"
                                >
                                    {items.map((item, index) => (
                                        <motion.p
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 15, },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.15, stiffness: 300, mass: 3 } }
                                            }}
                                            className="font-medium text-[#000] cursor-pointer leading-[1] text-[32px]"
                                        >
                                            {item}
                                        </motion.p>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* <div className={`flex ${move ? "justify-start" : "justify-center"} ${move ? "pt-11" : ""} flex-col max-[900px]:flex-col items-center space-x-[32px]  h-full`}>
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 1.2,
                                type: 'spring',
                                bounce: 0.2,
                            },
                        }}
                        layoutId="moveToTop"
                        layout>
                        <Logo />
                    </motion.div>
                </div> */}
            </section>
            <section ref={sectionRefThree} className=" flex justify-center min-h-svh px-10  items-center">
                <div className="flex flex-col max-[750px]:items-center py-24">
                    <p className="w-[85%] text-start  uppercase text-[#000] text-[0.875rem]">
                        About Us
                    </p>
                    <Word paragraph={paragraph} />
                </div>
            </section>
            <section ref={sectionRef} className="flex  justify-center">
                <div ref={sectionRef} className="max-[1000px]:flex max-[1000px]:items-center flex-col">
                    <p className="uppercase pt-16  text-[#000] text-[0.875rem]">
                        Products
                    </p>
                    <motion.h1
                        className="pb-16 text-[3.875rem] max-[1450px]:text-[3rem] max-[750px]:text-[2.25rem] max-[100px]:pb-0 max-[1000px]:text-center w-full font-semibold  text-[#000]">
                        Replenish your Skin.
                    </motion.h1>
                    <AnimatePresence>
                        {openFace && (
                            <div className="fixed left-0 top-0 z-[100] flex justify-center items-center max-[720px]:flex-col w-full h-screen max-[720px]:overflow-y-scroll overflow-y-hidden">
                                <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "-100%" }} transition={{ duration: 1, bounce: 0.1, type: "spring" }} className="h-svh w-full flex  max-[720px]:overflow-y-scroll">
                                    <div className=" pointer-events-none absolute w-full h-svh flex justify-end items-start p-[24px] max-[720px]:p-[18px]  ">
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 1 }} onClick={() => { setOpenFace(false) }} className=" cursor-pointer  pointer-events-auto z-50 max-[720px]:text-[000]/60">
                                            Close
                                        </motion.div>
                                    </div>
                                    <div className="hidden max-[720px]:flex w-full h-auto min-h-auto overflow-y-scroll max-[720px]:flex-col bg-white">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" pt-16 px-10 flex justify-center items-center">
                                            <div>
                                                <h1 className="  text-[#000] font-[400] w-full text-center max-[1250px]:text-[2.1rem] text-[3rem]">
                                                    Facial Moisturiser
                                                </h1>
                                                <p className='text-[#000] font-light text-[1rem] w-full text-center max-[720px]:text-[0.875rem]'>
                                                    B3 Face Cream 50ml contains:
                                                </p>
                                                <div className="pt-7">
                                                    <div className="flex gap-4 flex-wrap justify-center">
                                                        {Ingredients_Face.map((item, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setActiveIndex(index)}
                                                                className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
                                                                    ? ' text-[#fff] bg-black transition-all duration-100'
                                                                    : 'text-[#000]/80 transition-all duration-100'
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }} className="w-full flex justify-center items-center h-full">
                                            <motion.img
                                                layout
                                                layoutId="imgmobile"
                                                src="/B3_Face_gold.png"
                                                alt="B3 Face"
                                                className="max-h-[320px] h-[80%] cursor-crosshair object-contain"
                                            />
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className=' pb-8 px-10 bottom-0 pt-4 flex items-end'>
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
                                        </motion.div>
                                    </div>
                                    <div className='absolute h-svh max-[720px]:flex-col  w-full flex select-none pointer-events-none overflow-hidden z-[1] max-[720px]:hidden'>
                                        <div className='w-1/2 h-svh flex flex-col'>
                                            <div className='w-full h-3/4'>

                                            </div>
                                            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='w-[100%] z-50 h-[1px] bg-[#000]/10' />
                                            <div className='bg-white w-full -translate-y-1 h-[14px]'>

                                            </div>
                                        </div>
                                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='left-0 bg-[#000]/10 w-[1px] h-svh' />
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden h-svh flex-col flex justify-center items-center">
                                        <div className='h-3/4 w-full flex justify-center items-center bg-white'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }}>
                                                <Lens hovering={hovering} setHovering={setHovering}>
                                                    <div className=' p-24'>
                                                        <img
                                                            src="/B3_Face_gold.png"
                                                            alt="B3 Face"
                                                            className="h-[320px] cursor-crosshair max-h-[450px] object-contain"
                                                        />
                                                    </div>
                                                </Lens>
                                            </motion.div>
                                        </div>
                                        <div className='h-1/4 flex justify-center bg-white items-center w-full px-24 max-[900px]:px-12'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className='overflow-hidden'>
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
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden bg-white h-svh flex justify-center items-center">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" px-10">
                                            <h1 className="  text-[#000] font-[400] max-[1250px]:text-[2.1rem] text-[3rem]">
                                                Facial Moisturiser
                                            </h1>
                                            <p className='text-[#000] font-light text-[1rem] max-[720px]:text-[0.875rem]'>
                                                B3 Anti-Aging Face Serum 30ml contains:
                                            </p>
                                            <div className="pt-7">
                                                <div className="flex gap-4 flex-wrap">
                                                    {Ingredients_Face.map((item, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setActiveIndex(index)}
                                                            className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
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
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {openSerum && (
                            <div className="fixed left-0 top-0 z-[100] flex justify-center items-center max-[720px]:flex-col w-full h-screen max-[720px]:overflow-y-scroll overflow-y-hidden">
                                <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "-100%" }} transition={{ duration: 1, bounce: 0.1, type: "spring" }} className="h-svh w-full flex  max-[720px]:overflow-y-scroll">
                                    <div className=" pointer-events-none absolute w-full h-svh flex justify-end items-start p-[24px] max-[720px]:p-[18px]  ">
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 1 }} onClick={() => { setOpenSerum(false) }} className=" cursor-pointer  pointer-events-auto z-50 max-[720px]:text-[000]/60">
                                            Close
                                        </motion.div>
                                    </div>
                                    <div className="hidden max-[720px]:flex w-full h-auto min-h-auto overflow-y-scroll max-[720px]:flex-col bg-white">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" pt-16 px-10 flex justify-center items-center">
                                            <div>
                                                <h1 className="  text-[#000] font-[400] w-full text-center max-[1250px]:text-[2.1rem] text-[3rem]">
                                                    Face Serum
                                                </h1>
                                                <p className='text-[#000] font-light text-[1rem] w-full text-center max-[720px]:text-[0.875rem]'>
                                                    B3 Anti-Aging Face Serum 30ml contains:
                                                </p>
                                                <div className="pt-7">
                                                    <div className="flex gap-4 flex-wrap justify-center">
                                                        {Ingredients_Serum.map((item, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setActiveIndex(index)}
                                                                className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
                                                                    ? ' text-[#fff] bg-black transition-all duration-100'
                                                                    : 'text-[#000]/80 transition-all duration-100'
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }} className="w-full flex justify-center items-center h-full">
                                            <motion.img
                                                layout
                                                layoutId="imgmobile"
                                                src="/B3_Serum_gold.png"
                                                alt="B3 Serum"
                                                className="max-h-[320px] h-[80%] cursor-crosshair object-contain"
                                            />
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className=' pb-8 px-10 bottom-0 pt-4 flex items-end'>
                                                <TransitionPanel
                                                    activeIndex={activeIndex}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    variants={{
                                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                                    }}
                                                >
                                                    {Ingredients_Serum.map((item, index) => (
                                                        <div key={index} className=''>
                                                            <p className='text-[#000] font-[400]'>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </TransitionPanel>
                                        </motion.div>
                                    </div>
                                    <div className='absolute h-svh max-[720px]:flex-col  w-full flex select-none pointer-events-none overflow-hidden z-[1] max-[720px]:hidden'>
                                        <div className='w-1/2 h-svh flex flex-col'>
                                            <div className='w-full h-3/4'>

                                            </div>
                                            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='w-[100%] z-50 h-[1px] bg-[#000]/10' />
                                            <div className='bg-white w-full -translate-y-1 h-[14px]'>

                                            </div>
                                        </div>
                                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='left-0 bg-[#000]/10 w-[1px] h-svh' />
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden h-svh flex-col flex justify-center items-center">
                                        <div className='h-3/4 w-full flex justify-center items-center bg-white'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }}>
                                                <Lens hovering={hovering} setHovering={setHovering}>
                                                    <div className=' p-24'>
                                                        <img
                                                            src="/B3_Serum_gold.png"
                                                            alt="B3 Serum"
                                                            className="h-[320px] cursor-crosshair max-h-[450px] object-contain"
                                                        />
                                                    </div>
                                                </Lens>
                                            </motion.div>
                                        </div>
                                        <div className='h-1/4 flex justify-center bg-white items-center w-full px-24 max-[900px]:px-12'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className='overflow-hidden'>
                                                <TransitionPanel
                                                    activeIndex={activeIndex}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    variants={{
                                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                                    }}
                                                >
                                                    {Ingredients_Serum.map((item, index) => (
                                                        <div key={index} className=''>
                                                            <p className='text-[#000] font-[400]'>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </TransitionPanel>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden bg-white h-svh flex justify-center items-center">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" px-10">
                                            <h1 className="  text-[#000] font-[400] max-[1250px]:text-[2.1rem] text-[3rem]">
                                                Face Serum
                                            </h1>
                                            <p className='text-[#000] font-light text-[1rem] max-[720px]:text-[0.875rem]'>
                                                B3 Anti-Aging Face Serum 30ml contains:
                                            </p>
                                            <div className="pt-7">
                                                <div className="flex gap-4 flex-wrap">
                                                    {Ingredients_Serum.map((item, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setActiveIndex(index)}
                                                            className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
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
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {openEye && (
                            <div className="fixed left-0 top-0 z-[100] flex justify-center items-center max-[720px]:flex-col w-full h-screen max-[720px]:overflow-y-scroll overflow-y-hidden">
                                <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "-100%" }} transition={{ duration: 1, bounce: 0.1, type: "spring" }} className="h-svh w-full flex  max-[720px]:overflow-y-scroll">
                                    <div className=" pointer-events-none absolute w-full h-svh flex justify-end items-start p-[24px] max-[720px]:p-[18px]  ">
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 1 }} onClick={() => { setOpenEye(false) }} className=" cursor-pointer  pointer-events-auto z-50 max-[720px]:text-[000]/60">
                                            Close
                                        </motion.div>
                                    </div>
                                    <div className="hidden max-[720px]:flex w-full h-auto min-h-auto overflow-y-scroll max-[720px]:flex-col bg-white">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" pt-16 px-10 flex justify-center items-center">
                                            <div>
                                                <h1 className="  text-[#000] font-[400] w-full text-center max-[1250px]:text-[2.1rem] text-[3rem]">
                                                    Under Eye Concentrate
                                                </h1>
                                                <p className='text-[#000] font-light text-[1rem] w-full text-center max-[720px]:text-[0.875rem]'>
                                                    Under Eye Cream 15ml contains:
                                                </p>
                                                <div className="pt-7">
                                                    <div className="flex gap-4 flex-wrap justify-center">
                                                        {Ingredients_Eye.map((item, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setActiveIndex(index)}
                                                                className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
                                                                    ? ' text-[#fff] bg-black transition-all duration-100'
                                                                    : 'text-[#000]/80 transition-all duration-100'
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }} className="w-full flex justify-center items-center h-full">
                                            <motion.img
                                                layout
                                                layoutId="imgmobile"
                                                src="/B3_Eye_gold.png"
                                                alt="B3 Face"
                                                className="max-h-[320px] h-[80%] cursor-crosshair object-contain"
                                            />
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className=' pb-8 px-10 bottom-0 pt-4 flex items-end'>
                                                <TransitionPanel
                                                    activeIndex={activeIndex}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    variants={{
                                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                                    }}
                                                >
                                                    {Ingredients_Eye.map((item, index) => (
                                                        <div key={index} className=''>
                                                            <p className='text-[#000] font-[400]'>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </TransitionPanel>
                                        </motion.div>
                                    </div>
                                    <div className='absolute h-svh max-[720px]:flex-col  w-full flex select-none pointer-events-none overflow-hidden z-[1] max-[720px]:hidden'>
                                        <div className='w-1/2 h-svh flex flex-col'>
                                            <div className='w-full h-3/4'>

                                            </div>
                                            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='w-[100%] z-50 h-[1px] bg-[#000]/10' />
                                            <div className='bg-white w-full -translate-y-1 h-[14px]'>

                                            </div>
                                        </div>
                                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='left-0 bg-[#000]/10 w-[1px] h-svh' />
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden h-svh flex-col flex justify-center items-center">
                                        <div className='h-3/4 w-full flex justify-center items-center bg-white'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }}>
                                                <Lens hovering={hovering} setHovering={setHovering}>
                                                    <div className=' p-24'>
                                                        <img
                                                            src="/B3_Eye_gold.png"
                                                            alt="B3 Face"
                                                            className="h-[320px] cursor-crosshair max-h-[450px] object-contain"
                                                        />
                                                    </div>
                                                </Lens>
                                            </motion.div>
                                        </div>
                                        <div className='h-1/4 flex justify-center bg-white items-center w-full px-24 max-[900px]:px-12'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className='overflow-hidden'>
                                                <TransitionPanel
                                                    activeIndex={activeIndex}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    variants={{
                                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                                    }}
                                                >
                                                    {Ingredients_Eye.map((item, index) => (
                                                        <div key={index} className=''>
                                                            <p className='text-[#000] font-[400]'>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </TransitionPanel>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden bg-white h-svh flex justify-center items-center">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" px-10">
                                            <h1 className="  text-[#000] font-[400] max-[1250px]:text-[2.1rem] text-[3rem]">
                                                Under Eye Concentrate
                                            </h1>
                                            <p className='text-[#000] font-light text-[1rem] max-[720px]:text-[0.875rem]'>
                                                Under Eye Cream 15ml contains:
                                            </p>
                                            <div className="pt-7">
                                                <div className="flex gap-4 flex-wrap">
                                                    {Ingredients_Eye.map((item, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setActiveIndex(index)}
                                                            className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
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
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {openBody && (
                            <div className="fixed left-0 top-0 z-[100] flex justify-center items-center max-[720px]:flex-col w-full h-screen max-[720px]:overflow-y-scroll overflow-y-hidden">
                                <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "-100%" }} transition={{ duration: 1, bounce: 0.1, type: "spring" }} className="h-svh w-full flex  max-[720px]:overflow-y-scroll">
                                    <div className=" pointer-events-none absolute w-full h-svh flex justify-end items-start p-[24px] max-[720px]:p-[18px]  ">
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 1 }} onClick={() => { setOpenBody(false) }} className=" cursor-pointer  pointer-events-auto z-50 max-[720px]:text-[000]/60">
                                            Close
                                        </motion.div>
                                    </div>
                                    <div className="hidden max-[720px]:flex w-full h-auto min-h-auto overflow-y-scroll max-[720px]:flex-col bg-white">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" pt-16 px-10 flex justify-center items-center">
                                            <div>
                                                <h1 className="  text-[#000] font-[400] w-full text-center max-[1250px]:text-[2.1rem] text-[3rem]">
                                                    Body
                                                </h1>
                                                <p className='text-[#000] font-light text-[1rem] w-full text-center max-[720px]:text-[0.875rem]'>
                                                    Body Cream 200ml contains:
                                                </p>
                                                <div className="pt-7">
                                                    <div className="flex gap-4 flex-wrap justify-center">
                                                        {Ingredients_Body.map((item, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setActiveIndex(index)}
                                                                className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
                                                                    ? ' text-[#fff] bg-black transition-all duration-100'
                                                                    : 'text-[#000]/80 transition-all duration-100'
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }} className="w-full flex justify-center items-center h-full">
                                            <motion.img
                                                layout
                                                layoutId="imgmobile"
                                                src="/2_B3_Body_slim-200ml.png"
                                                alt="B3 Face"
                                                className="max-h-[320px] h-[80%] cursor-crosshair object-contain"
                                            />
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className=' pb-8 px-10 bottom-0 pt-4 flex items-end'>
                                                <TransitionPanel
                                                    activeIndex={activeIndex}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    variants={{
                                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                                    }}
                                                >
                                                    {Ingredients_Body.map((item, index) => (
                                                        <div key={index} className=''>
                                                            <p className='text-[#000] font-[400]'>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </TransitionPanel>
                                        </motion.div>
                                    </div>
                                    <div className='absolute h-svh max-[720px]:flex-col  w-full flex select-none pointer-events-none overflow-hidden z-[1] max-[720px]:hidden'>
                                        <div className='w-1/2 h-svh flex flex-col'>
                                            <div className='w-full h-3/4'>

                                            </div>
                                            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='w-[100%] z-50 h-[1px] bg-[#000]/10' />
                                            <div className='bg-white w-full -translate-y-1 h-[14px]'>

                                            </div>
                                        </div>
                                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='left-0 bg-[#000]/10 w-[1px] h-svh' />
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden h-svh flex-col flex justify-center items-center">
                                        <div className='h-3/4 w-full flex justify-center items-center bg-white'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }}>
                                                <Lens hovering={hovering} setHovering={setHovering}>
                                                    <div className=' p-24'>
                                                        <img
                                                            src="/2_B3_Body_slim-200ml.png"
                                                            alt="B3 Face"
                                                            className="h-[320px] cursor-crosshair max-h-[450px] object-contain"
                                                        />
                                                    </div>
                                                </Lens>
                                            </motion.div>
                                        </div>
                                        <div className='h-1/4 flex justify-center bg-white items-center w-full px-24 max-[900px]:px-12'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className='overflow-hidden'>
                                                <TransitionPanel
                                                    activeIndex={activeIndex}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    variants={{
                                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                                    }}
                                                >
                                                    {Ingredients_Body.map((item, index) => (
                                                        <div key={index} className=''>
                                                            <p className='text-[#000] font-[400]'>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </TransitionPanel>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden bg-white h-svh flex justify-center items-center">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" px-10">
                                            <h1 className="  text-[#000] font-[400] max-[1250px]:text-[2.1rem] text-[3rem]">
                                                Body
                                            </h1>
                                            <p className='text-[#000] font-light text-[1rem] max-[720px]:text-[0.875rem]'>
                                                Body Cream 200ml contains:
                                            </p>
                                            <div className="pt-7">
                                                <div className="flex gap-4 flex-wrap">
                                                    {Ingredients_Body.map((item, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setActiveIndex(index)}
                                                            className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
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
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {openHand && (
                            <div className="fixed left-0 top-0 z-[100] flex justify-center items-center max-[720px]:flex-col w-full h-screen max-[720px]:overflow-y-scroll overflow-y-hidden">
                                <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "-100%" }} transition={{ duration: 1, bounce: 0.1, type: "spring" }} className="h-svh w-full flex  max-[720px]:overflow-y-scroll">
                                    <div className=" pointer-events-none absolute w-full h-svh flex justify-end items-start p-[24px] max-[720px]:p-[18px]  ">
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 1 }} onClick={() => { setOpenBody(false) }} className=" cursor-pointer  pointer-events-auto z-50 max-[720px]:text-[000]/60">
                                            Close
                                        </motion.div>
                                    </div>
                                    <div className="hidden max-[720px]:flex w-full h-auto min-h-auto overflow-y-scroll max-[720px]:flex-col bg-white">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" pt-16 px-10 flex justify-center items-center">
                                            <div>
                                                <h1 className="  text-[#000] font-[400] w-full text-center max-[1250px]:text-[2.1rem] text-[3rem]">
                                                    Hand
                                                </h1>
                                                <p className='text-[#000] font-light text-[1rem] w-full text-center max-[720px]:text-[0.875rem]'>
                                                    B3 Hand Cream 30ml contains:
                                                </p>
                                                <div className="pt-7">
                                                    <div className="flex gap-4 flex-wrap justify-center">
                                                        {Ingredients_Hand.map((item, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setActiveIndex(index)}
                                                                className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
                                                                    ? ' text-[#fff] bg-black transition-all duration-100'
                                                                    : 'text-[#000]/80 transition-all duration-100'
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }} className="w-full flex justify-center items-center h-full">
                                            <motion.img
                                                layout
                                                layoutId="imgmobile"
                                                src="/B3_Hand_Gold.png"
                                                alt="B3 Face"
                                                className="max-h-[320px] h-[80%] cursor-crosshair object-contain"
                                            />
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className=' pb-8 px-10 bottom-0 pt-4 flex items-end'>
                                                <TransitionPanel
                                                    activeIndex={activeIndex}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    variants={{
                                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                                    }}
                                                >
                                                    {Ingredients_Hand.map((item, index) => (
                                                        <div key={index} className=''>
                                                            <p className='text-[#000] font-[400]'>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </TransitionPanel>
                                        </motion.div>
                                    </div>
                                    <div className='absolute h-svh max-[720px]:flex-col  w-full flex select-none pointer-events-none overflow-hidden z-[1] max-[720px]:hidden'>
                                        <div className='w-1/2 h-svh flex flex-col'>
                                            <div className='w-full h-3/4'>

                                            </div>
                                            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='w-[100%] z-50 h-[1px] bg-[#000]/10' />
                                            <div className='bg-white w-full -translate-y-1 h-[14px]'>

                                            </div>
                                        </div>
                                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.1 }} className='left-0 bg-[#000]/10 w-[1px] h-svh' />
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden h-svh flex-col flex justify-center items-center">
                                        <div className='h-3/4 w-full flex justify-center items-center bg-white'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.55, duration: 0.65 }}>
                                                <Lens hovering={hovering} setHovering={setHovering}>
                                                    <div className=' p-24'>
                                                        <img
                                                            src="/B3_Hand_Gold.png"
                                                            alt="B3 Face"
                                                            className="h-[320px] cursor-crosshair max-h-[450px] object-contain"
                                                        />
                                                    </div>
                                                </Lens>
                                            </motion.div>
                                        </div>
                                        <div className='h-1/4 flex justify-center bg-white items-center w-full px-24 max-[900px]:px-12'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.7, duration: 0.65 }} className='overflow-hidden'>
                                                <TransitionPanel
                                                    activeIndex={activeIndex}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    variants={{
                                                        enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                                                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                                                        exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                                                    }}
                                                >
                                                    {Ingredients_Hand.map((item, index) => (
                                                        <div key={index} className=''>
                                                            <p className='text-[#000] font-[400]'>{item.description}</p>
                                                        </div>
                                                    ))}
                                                </TransitionPanel>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 max-[720px]:hidden bg-white h-svh flex justify-center items-center">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className=" px-10">
                                            <h1 className="  text-[#000] font-[400] max-[1250px]:text-[2.1rem] text-[3rem]">
                                                Hand
                                            </h1>
                                            <p className='text-[#000] font-light text-[1rem] max-[720px]:text-[0.875rem]'>
                                                B3 Hand Cream 30ml contains:
                                            </p>
                                            <div className="pt-7">
                                                <div className="flex gap-4 flex-wrap">
                                                    {Ingredients_Hand.map((item, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setActiveIndex(index)}
                                                            className={`px-[16px] py-[8px] max-[1000px]:px-[12px] border border-[#000]/10 text-[0.875rem] ${activeIndex === index
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
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                    <Carousel className="max-[1000px]:block hidden -translate-y-8">
                        <CarouselContent>
                            <CarouselItem className='p-4'>
                                <div onClick={() => { setOpenFace(true); }} className="flex justify-center">
                                    <div className="flex flex-col">
                                        <motion.div className="flex justify-center items-center w-[25rem] max-[450px]:w-[20rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                            <motion.img
                                                src="/B3_Face_gold.png"
                                                alt="B3 Face"
                                                className="h-[320px] max-h-[450px] object-contain"
                                            />
                                        </motion.div>
                                        <div className="pt-6">
                                            <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Face Concentrate</motion.h1>
                                            <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Glucosamine & Vitamin B3</motion.p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='p-4'>
                                <div onClick={() => { setOpenEye(true); }} className="flex justify-center">
                                    <div className="flex flex-col">
                                        <motion.div className=" flex justify-center items-center w-[25rem] max-[450px]:w-[20rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                            <motion.img
                                                src="/B3_Eye_gold.png"
                                                alt="B3 Eye"
                                                className="h-[320px] max-h-[450px] object-contain"
                                            />
                                        </motion.div>
                                        <div className="pt-6">
                                            <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Eye Concentrate</motion.h1>
                                            <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Ceramides & Vitamin B3</motion.p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='p-4'>
                                <div onClick={() => { setOpenSerum(true); }}  className="flex justify-center">
                                    <div className="flex flex-col">
                                        <motion.div
                                            layout layoutId="openSerum-" className=" flex justify-center items-center w-[25rem] max-[450px]:w-[20rem] max-[750px]:w-[22rem] relative cursor-pointer p-16 h-[30rem] bg-[#fff] border border-[#000]/10">
                                            <motion.img
                                                src="/B3_Serum_gold.png"
                                                alt="B3 Serum"
                                                className="h-[320px] max-h-[450px] object-contain"
                                            />
                                        </motion.div>
                                        <div className="pt-6">
                                            <motion.h1 className={`text-[1.25rem]  text-[#000] font-semibold`}>B3 Serum Concentrate</motion.h1>
                                            <motion.p className={`text-[0.875rem]  text-[#000]/80 font-normal`}>Infused with anti-aging Peptides</motion.p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem  className='p-4'>
                                <div onClick={() => { setOpenBody(true); }} className="flex justify-center">
                                    <div className="flex flex-col">
                                        <motion.div className="flex justify-center items-center w-[25rem] max-[450px]:w-[20rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                            <motion.img
                                                src="/2_B3_Body_slim-200ml.png"
                                                alt="B3 Body"
                                                className="h-[320px] max-h-[450px] object-contain"
                                            />
                                        </motion.div>
                                        <div className="pt-6">
                                            <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Body Concentrate</motion.h1>
                                            <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with silk-protein & Vitamin B3</motion.p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='p-4'>
                                <div  onClick={() => { setOpenHand(true); }}  className="flex justify-center">
                                    <div className="flex flex-col">
                                        <motion.div className="flex justify-center items-center w-[25rem] max-[450px]:w-[20rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                            <motion.img
                                                src="/B3_Hand_Gold.png"
                                                alt="B3 Face"
                                                className="h-[320px] max-h-[450px] object-contain"
                                            />
                                        </motion.div>
                                        <div className="pt-6">
                                            <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Hand Concentrate</motion.h1>
                                            <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Glucosamine & Vitamin B3</motion.p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNavigation alwaysShow />
                    </Carousel>
                    <Carousel className="min-[1600px]:w-[1350px] min-[1000px]:block min-[1000px]:w-[900px] hidden ">
                        <CarouselContent className='min-[750px]:-ml-4 min-[750px]:space-x-4'>
                            <CarouselItem className='min-[1600px]:basis-1/3  min-[1000px]:basis-1/2  pl-4'>
                                <div onClick={() => { setOpenFace(true); }} className="flex flex-col">
                                    <motion.div className="flex justify-center items-center w-[25rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            src="/B3_Face_gold.png"
                                            alt="B3 Face"
                                            className="min-h-[300px] h-[300px] max-h-[320px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Face Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Glucosamine & Vitamin B3</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='min-[1600px]:basis-1/3 min-[1000px]:basis-1/2  w-full flex justify-center'>
                                <div  onClick={() => { setOpenEye(true); }}  className="flex flex-col">
                                    <motion.div className=" flex justify-center items-center w-[25rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            src="/B3_Eye_gold.png"
                                            alt="B3 Eye"
                                            className="min-h-[300px] h-[300px] max-h-[320px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Eye Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Ceramides & Vitamin B3</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='min-[1600px]:basis-1/3 min-[1000px]:basis-1/2 basis'>
                                <div  onClick={() => { setOpenSerum(true); }}  className="flex flex-col">
                                    <motion.div
                                        layout layoutId="openSerum" className=" flex justify-center items-center w-[25rem] max-[750px]:w-[22rem] relative cursor-pointer p-16 h-[30rem] bg-[#fff] border border-[#000]/10">
                                        <motion.img
                                            src="/B3_Serum_gold.png"
                                            alt="B3 Serum"
                                            className="min-h-[300px] h-[300px] max-h-[320px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className={`text-[1.25rem] text-[#000] font-semibold`}>B3 Serum Concentrate</motion.h1>
                                        <motion.p className={`text-[0.875rem] text-[#000]/80 font-normal`}>Infused with anti-aging Peptides</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='min-[1600px]:basis-1/3 min-[1000px]:basis-1/2 '>
                                <div  onClick={() => { setOpenBody(true); }}  className="flex flex-col">
                                    <motion.div className="flex justify-center items-center w-[25rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            src="/2_B3_Body_slim-200ml.png"
                                            alt="B3 Body"
                                            className="min-h-[300px] h-[300px] max-h-[320px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Body Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal ">Infused with silk-protein & Vitamin B3</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='min-[1600px]:basis-1/3  min-[1000px]:basis-1/2'>
                                <div onClick={() => { setOpenHand(true); }} className="flex flex-col">
                                    <motion.div className="flex justify-center items-center w-[25rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            src="/B3_Hand_Gold.png"
                                            alt="B3 Hand"
                                            className="min-h-[300px] h-[300px] max-h-[320px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Hand Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Glucosamine & Vitamin B3</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNavigation
                            className='absolute -bottom-20 left-auto block top-auto w-full max-[1000px]:hidden justify-end space-x-2'
                            classNameButton='bg-black *:stroke-zinc-50'
                            alwaysShow
                        />
                    </Carousel>
                </div>
            </section>
            <section ref={sectionRefOne} className="h-svh flex justify-center py-24">

                <div className="w-full flex justify-center ">
                    <div className="flex justify-center items-center w-[1450px] max-[1450px]:w-[900px] max-[1000px]:w-[80%] ">

                        <div className="flex flex-col items-center ">
                            <p className="uppercase text-[#000] text-[0.875rem]">
                                Research
                            </p>
                            <h1 className="text-[3.875rem] max-[1450px]:text-[3rem] max-[750px]:text-[2.5rem] text-center font-semibold text-[#000] pb-8">
                                Bioactive Techonology, Perfected. <br />
                            </h1>
                            <div className=" flex justify-center items-center">
                                <a href="/pdf">
                                    <p className="uppercase cursor-pointer text-[#fff] bg-black py-4 px-7 text-[1.25rem] max-[750px]:text-[1rem]">
                                        Read our Paper
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section ref={sectionRefFour} className=" flex justify-center pb-[10.5rem] px-10  items-center">
                <div className="min-[1600px]:w-[1350px] min-[650px]:w-[900px] max-[500px]:translate-x-4  justify-center flex">

                    <div className="w-1/2 max-[980px]:hidden flex justify-start pr-24">
                        <Image
                            src={Lindenpark}
                            alt="Landerbackground"
                            className="z-[-1] border border-black/10  w-full h-[550px] object-cover sm:object-center md:object-[center_top] lg:object-cover" />
                    </div>
                    <div className="w-1/2 max-[980px]:w-[60vw] max-[1000px]:ml-2 justify-end flex items-center ">

                        <div className="flex-col justify-center">
                            <p className=" uppercase text-[#000] text-[0.875rem]">
                                Contact
                            </p>
                            <h1 className="text-[3.875rem] max-[1450px]:text-[3rem] max-[750px]:text-[2.5rem] leading-[1] pb-2 max-[1000px]:pb-0  font-semibold text-[#000]">
                                Reach out
                            </h1>
                            <p className="text-[1.25rem] max-[1000px]:text-[1.1rem]  mt-4 text-[#000]/80 font-normal">
                                Skin and Cell AG was founded in Switzerland in 2021 as a new skin science company born out of the experience of a group of eminent oncologists, dermatologists, epidemiologists and skin formulation experts. Led by Dr. Simon Ward who has spent much of his career researching and teaching oncology and dermatology at Oxford University’s medical school in the United Kingdom, Skin and Cell wants to help repair and maintain good skin health, vibrance and longevity through bringing science backed skin formulations to people around the world.
                            </p>
                            <div className="flex mt-12 space-x-2">
                                <p className="text-[1.25rem] max-[1000px]:text-[1.1rem] items-center flex text-center cursor-text p-4 border bg-black text-[#fff] font-normal">
                                    Support@Skinandcell.com
                                </p>
                                <p onClick={() => window.location.href = 'mailto:your.email@example.com'} className="text-[1.25rem] max-[1000px]:text-[1.1rem] cursor-pointer text-center p-4 border border-black text-[#000]/80 font-normal">
                                    Open Mail
                                </p>
                            </div>

                        </div>
                        <div className="w-full h-full" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Updated