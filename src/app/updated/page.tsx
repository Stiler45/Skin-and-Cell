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
    const [openHam, setOpenHam] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [hoveredOne, setHoveredOne] = useState(false)
    const [hoveredTwo, setHoveredTwo] = useState(false)
    const [hoveredThree, setHoveredThree] = useState(false)
    const [hoveredFour, setHoveredFour] = useState(false)
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const sectionRefOne = useRef<HTMLDivElement | null>(null);
    const sectionRefThree = useRef<HTMLDivElement | null>(null);
    const sectionRefFour = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (openHam) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [openHam]);

    // const Logo = () => {
    //     return (
    //         <svg
    //             width={move ? "95" : "112"}
    //             height={move ? "95" : "115"}
    //             viewBox="0 0 112 115"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"

    //         >
    //             <g clipPath="url(#clip0_1017_2018)">
    //                 <path
    //                     d="M111.947 115H0V0H111.947V43.8802H108.196V3.76267H3.75094V111.237H108.196V58.7189H111.947V115Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M97.3126 66.4575H96.4673C96.2031 66.4575 96.0446 66.2455 96.0446 66.0335V52.3607H82.6258C82.3616 52.3607 82.2031 52.1487 82.2031 51.9368V51.1418C82.2031 50.8769 82.4144 50.7179 82.6258 50.7179H96.0446V37.0451C96.0446 36.7801 96.256 36.6211 96.4673 36.6211H97.3126C97.5767 36.6211 97.7352 36.8331 97.7352 37.0451V50.7179H111.365C111.63 50.7179 111.788 50.9298 111.788 51.1418V51.9368C111.788 52.2017 111.577 52.3607 111.365 52.3607H97.7352V66.0335C97.7352 66.2985 97.5239 66.4575 97.3126 66.4575Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M23.7213 45.6284C22.5062 45.6284 21.3439 45.3634 20.3402 44.8335C19.2836 44.3035 18.4911 43.5616 18.0156 42.6606V40.4348H18.2798C19.3892 42.8196 21.1854 44.0915 23.6156 44.0915C26.0458 44.0915 26.4156 43.6146 27.4194 42.7136C28.4232 41.8127 28.9515 40.7528 28.9515 39.5869C28.9515 38.421 28.6345 37.4671 28.0005 36.6722C27.3666 35.8772 26.5213 35.1883 25.5703 34.6583C24.6194 34.0754 23.6685 33.5454 22.7175 32.9625C21.7666 32.3795 20.9213 31.6906 20.2345 30.8957C19.5477 30.1007 19.1779 29.0938 19.1779 28.0339C19.1779 26.974 19.6005 25.9671 20.4986 25.2252C21.3968 24.4832 22.5062 24.1123 23.8798 24.1123C25.2534 24.1123 26.4685 24.6422 27.4194 25.7551V25.8611V27.7159L27.1552 27.8219C26.2571 26.4441 25.042 25.7551 23.6685 25.7551C22.2949 25.7551 22.2949 26.0201 21.7137 26.497C21.1326 26.974 20.8685 27.557 20.8685 28.2989C20.8685 29.0408 21.1854 29.6768 21.8194 30.2597C22.5062 30.8957 23.2986 31.4786 24.1968 31.9556C25.1477 32.4855 26.0986 33.0685 27.0496 33.6514C28.0005 34.2344 28.8458 35.0293 29.5326 35.9832C30.2194 36.9371 30.5892 38.05 30.5892 39.2689C30.5892 41.0708 29.9024 42.6076 28.5288 43.8795C27.1552 45.1514 25.5175 45.7874 23.6156 45.7874L23.7213 45.6284Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M83.7892 45.1514H82.3628L82.2043 44.9924V33.2275C82.2043 31.2136 81.4647 29.4118 80.0911 27.9279C78.6647 26.4441 76.9213 25.7021 74.9137 25.7021C72.9062 25.7021 71.11 26.4441 69.5779 27.9279C68.0458 29.4118 67.2534 31.2136 67.2534 33.2275V44.9924L67.0949 45.1514H65.6685L65.51 44.9924V24.7482L65.6685 24.5892H67.0949L67.2534 24.7482V28.2459C68.8383 25.4901 71.3741 24.1123 74.9137 24.1123C78.4534 24.1123 79.6156 25.0132 81.359 26.762C83.1024 28.5109 83.9477 30.6837 83.9477 33.2275V44.9924L83.7892 45.1514Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M57.4798 45.1514H56.0534L55.8949 44.9924V24.8012L56.0534 24.6422H57.4798L57.6383 24.8012V44.9924L57.4798 45.1514Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M50.6119 45.1514H48.6043L38.6194 34.7113V44.9924L38.4609 45.1514H37.0345L36.876 44.9924V11.3934L37.0345 11.2344H38.4609L38.6194 11.3934V31.4786L46.3326 24.6952H46.4383H48.2873L48.393 24.9602L39.2534 32.9625L50.7175 44.9924L50.6119 45.2574V45.1514Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M56.793 20.0316C55.842 20.0316 55.3666 19.5547 55.3666 18.6537C55.3666 17.7528 55.842 17.2758 56.793 17.2758C57.7439 17.2758 58.2194 17.7528 58.2194 18.6537C58.2194 19.5547 57.7439 20.0316 56.793 20.0316Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M33.3182 88.7677H32.8955C30.0955 88.7677 27.454 88.0257 25.0767 86.5419C22.6465 85.058 20.7446 83.0972 19.371 80.6594C17.9974 78.2216 17.2578 75.6248 17.2578 72.8691C17.2578 68.5764 18.8427 64.7608 21.9597 61.687C25.0767 58.5603 28.8276 57.0234 33.1597 57.0234C37.4918 57.0234 38.8125 57.8184 41.454 59.3022L41.5597 59.5142V60.9981L41.1899 61.1571C38.7069 59.4612 36.0125 58.6133 33.1597 58.6133C30.3069 58.6133 25.922 60.0442 23.1748 62.7999C20.4276 65.5557 19.0012 68.9474 19.0012 72.8691C19.0012 76.7907 20.3748 80.1294 23.1748 82.9382C25.922 85.7469 29.3031 87.1248 33.1597 87.1248C37.0163 87.1248 38.7069 86.2769 41.1899 84.581L41.5597 84.74V86.2239L41.454 86.4359C38.971 87.9727 36.2767 88.7147 33.371 88.7147L33.3182 88.7677Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M58.6001 88.2117H47.7699L47.5586 87.9997V57.7393L47.7699 57.5273H58.6001L58.8114 57.7393V58.9052L58.6001 59.1172H49.302V75.1748H57.0152L57.2265 75.3868V76.5527L57.0152 76.7647H49.302V86.6748H58.6001L58.8114 86.8868V88.0527L58.6001 88.2647V88.2117Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M75.6955 88.239H65.0238L64.8125 88.027V57.7667L65.0238 57.5547H66.3446L66.5559 57.7667V86.6492H75.6955L75.9068 86.8611V88.027L75.6955 88.239Z"
    //                     fill="white"
    //                 />
    //                 <path
    //                     d="M92.7893 88.239H82.1176L81.9062 88.027V57.7667L82.1176 57.5547H83.4383L83.6496 57.7667V86.6492H92.7893L93.0006 86.8611V88.027L92.7893 88.239Z"
    //                     fill="white"
    //                 />
    //             </g>
    //             <defs>
    //                 <clipPath id="clip0_1017_2018">
    //                     <rect width="112" height="115" fill="white" />
    //                 </clipPath>
    //             </defs>
    //         </svg>
    //     )
    // }
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
    const handleScrollToSection = (sectionRef: any) => () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleNavigateToPdf = () => {
        window.location.href = "/pdf";
    };

    const handleMouseEnterTwo = () => {
        setHoveredTwo(true);
    };

    const links = [
        { onClick: handleScrollToSection(sectionRef) },
        { onClick: handleScrollToSection(sectionRefOne) },
        {
            onClick: handleNavigateToPdf,
            onMouseEnter: handleMouseEnterTwo
        },
        { onClick: handleScrollToSection(sectionRefThree) },
        { onClick: handleScrollToSection(sectionRefFour) }
    ];

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
                                            onClick={() => { links[index].onClick(), setOpenHam(!openHam) }}
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
                        {openSerum && (
                            <div className="fixed left-0 top-0 z-[100] flex justify-center items-center w-full h-screen overflow-y-hidden ">
                                <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "-100%" }} transition={{ duration: 1, bounce: 0.1, type: "spring" }} className="h-svh w-full flex">
                                    <div className=" pointer-events-none absolute w-full h-svh flex justify-end items-start p-[24px]">
                                       <div onClick={()=>{setOpenSerum(false)}} className=" cursor-pointer  pointer-events-auto">
                                            Close
                                       </div>
                                    </div>
                                    <div className='absolute h-svh w-full flex select-none pointer-events-none overflow-hidden z-[1]'>
                                        <div className='w-1/2 h-svh flex flex-col'>
                                            <div className='w-full h-3/4'>

                                            </div>
                                            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ delay: 0.45, duration: 0.8, type: "spring", bounce: 0.1 }} className='w-[100%] z-50 h-[1px] bg-[#000]/10' />
                                            <div className='bg-white w-full -translate-y-1 h-[14px]'>

                                            </div>
                                        </div>
                                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.45, duration: 0.8, type: "spring", bounce: 0.1 }} className='left-0 bg-[#000]/10 w-[1px] h-svh' />
                                    </div>
                                    <div className="w-1/2 h-svh flex-col flex justify-center items-center ">
                                        <div className='h-3/4 w-full flex justify-center items-center bg-white'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.1, duration: 0.55 }}>
                                                <Lens hovering={hovering} setHovering={setHovering}>
                                                    <div className=' p-24'>
                                                        <img
                                                            src="/B3_Face_gold.png"
                                                            alt="B3 Face"
                                                            className="h-[320px] cursor-none max-h-[450px] object-contain"
                                                        />
                                                    </div>
                                                </Lens>
                                            </motion.div>
                                        </div>
                                        <div className='h-1/4 flex justify-center bg-white items-center w-full px-24 max-[900px]:px-12'>
                                            <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 1.4, duration: 0.65 }} className='overflow-hidden'>
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
                                    <motion.div className="w-1/2 bg-white h-svh  flex justify-center items-center">
                                        <motion.div initial={{ opacity: 0, filter: "blur(4px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} exit={{ opacity: 0, filter: "blur(4px)", y: -20 }} transition={{ delay: 0.8, duration: 0.65 }} className=" px-10">
                                            <h1 className="  text-[#000] font-[400] max-[1250px]:text-[2.1rem] text-[3rem]">
                                                Facial Moisturiser
                                            </h1>
                                            <p className='text-[#000] font-light text-[1rem]'>
                                                B3 Anti-Aging Face Serum 30ml contains:
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
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                    <Carousel className="max-[1000px]:block hidden -translate-y-8">
                        <CarouselContent>
                            <CarouselItem className='p-4'>
                                <div className="flex justify-center">
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
                                <div className="flex justify-center">
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
                                <div className="flex justify-center">
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
                            <CarouselItem className='p-4'>
                                <div className="flex justify-center">
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
                                <div className="flex justify-center">
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
                                <div onClick={() => {setOpenSerum(true); console.log("clicked")}}  className="flex flex-col">
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
                                <div className="flex flex-col">
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

                                <div className="flex flex-col">
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
                                <div className="flex flex-col">
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
                                <div className="flex flex-col">
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