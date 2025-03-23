'use client'
import Image from "next/image"
import B3_Face_Gold from "../../../public/B3_Face_gold.png"
import B3_Body_Slim from "../../../public/2_B3_Body_slim-200ml.png"
import B3_Eye_Gold from "../../../public/B3_Eye_gold.png"
import B3_Serum_Gold from "../../../public/B3_Serum_gold.png"
import BG_Lander_new from "../../../public/BG_Lander_New.png"
import { delay, motion } from "framer-motion"
import { useEffect, useState } from "react"

const Updated = () => {

    const [move, setMoved] = useState(false)

    // useEffect(() => {
    //     setTimeout((resolve) => {
            
    //     }, 3000);
    //     setMoved(true)
    // }, [])

    const Logo = () => {
        return (
            <svg
                width="82"
                height="84"
                viewBox="0 0 112 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"

            >
                <g clipPath="url(#clip0_1017_2018)">
                    <path
                        d="M111.947 115H0V0H111.947V43.8802H108.196V3.76267H3.75094V111.237H108.196V58.7189H111.947V115Z"
                        fill="white"
                    />
                    <path
                        d="M97.3126 66.4575H96.4673C96.2031 66.4575 96.0446 66.2455 96.0446 66.0335V52.3607H82.6258C82.3616 52.3607 82.2031 52.1487 82.2031 51.9368V51.1418C82.2031 50.8769 82.4144 50.7179 82.6258 50.7179H96.0446V37.0451C96.0446 36.7801 96.256 36.6211 96.4673 36.6211H97.3126C97.5767 36.6211 97.7352 36.8331 97.7352 37.0451V50.7179H111.365C111.63 50.7179 111.788 50.9298 111.788 51.1418V51.9368C111.788 52.2017 111.577 52.3607 111.365 52.3607H97.7352V66.0335C97.7352 66.2985 97.5239 66.4575 97.3126 66.4575Z"
                        fill="white"
                    />
                    <path
                        d="M23.7213 45.6284C22.5062 45.6284 21.3439 45.3634 20.3402 44.8335C19.2836 44.3035 18.4911 43.5616 18.0156 42.6606V40.4348H18.2798C19.3892 42.8196 21.1854 44.0915 23.6156 44.0915C26.0458 44.0915 26.4156 43.6146 27.4194 42.7136C28.4232 41.8127 28.9515 40.7528 28.9515 39.5869C28.9515 38.421 28.6345 37.4671 28.0005 36.6722C27.3666 35.8772 26.5213 35.1883 25.5703 34.6583C24.6194 34.0754 23.6685 33.5454 22.7175 32.9625C21.7666 32.3795 20.9213 31.6906 20.2345 30.8957C19.5477 30.1007 19.1779 29.0938 19.1779 28.0339C19.1779 26.974 19.6005 25.9671 20.4986 25.2252C21.3968 24.4832 22.5062 24.1123 23.8798 24.1123C25.2534 24.1123 26.4685 24.6422 27.4194 25.7551V25.8611V27.7159L27.1552 27.8219C26.2571 26.4441 25.042 25.7551 23.6685 25.7551C22.2949 25.7551 22.2949 26.0201 21.7137 26.497C21.1326 26.974 20.8685 27.557 20.8685 28.2989C20.8685 29.0408 21.1854 29.6768 21.8194 30.2597C22.5062 30.8957 23.2986 31.4786 24.1968 31.9556C25.1477 32.4855 26.0986 33.0685 27.0496 33.6514C28.0005 34.2344 28.8458 35.0293 29.5326 35.9832C30.2194 36.9371 30.5892 38.05 30.5892 39.2689C30.5892 41.0708 29.9024 42.6076 28.5288 43.8795C27.1552 45.1514 25.5175 45.7874 23.6156 45.7874L23.7213 45.6284Z"
                        fill="white"
                    />
                    <path
                        d="M83.7892 45.1514H82.3628L82.2043 44.9924V33.2275C82.2043 31.2136 81.4647 29.4118 80.0911 27.9279C78.6647 26.4441 76.9213 25.7021 74.9137 25.7021C72.9062 25.7021 71.11 26.4441 69.5779 27.9279C68.0458 29.4118 67.2534 31.2136 67.2534 33.2275V44.9924L67.0949 45.1514H65.6685L65.51 44.9924V24.7482L65.6685 24.5892H67.0949L67.2534 24.7482V28.2459C68.8383 25.4901 71.3741 24.1123 74.9137 24.1123C78.4534 24.1123 79.6156 25.0132 81.359 26.762C83.1024 28.5109 83.9477 30.6837 83.9477 33.2275V44.9924L83.7892 45.1514Z"
                        fill="white"
                    />
                    <path
                        d="M57.4798 45.1514H56.0534L55.8949 44.9924V24.8012L56.0534 24.6422H57.4798L57.6383 24.8012V44.9924L57.4798 45.1514Z"
                        fill="white"
                    />
                    <path
                        d="M50.6119 45.1514H48.6043L38.6194 34.7113V44.9924L38.4609 45.1514H37.0345L36.876 44.9924V11.3934L37.0345 11.2344H38.4609L38.6194 11.3934V31.4786L46.3326 24.6952H46.4383H48.2873L48.393 24.9602L39.2534 32.9625L50.7175 44.9924L50.6119 45.2574V45.1514Z"
                        fill="white"
                    />
                    <path
                        d="M56.793 20.0316C55.842 20.0316 55.3666 19.5547 55.3666 18.6537C55.3666 17.7528 55.842 17.2758 56.793 17.2758C57.7439 17.2758 58.2194 17.7528 58.2194 18.6537C58.2194 19.5547 57.7439 20.0316 56.793 20.0316Z"
                        fill="white"
                    />
                    <path
                        d="M33.3182 88.7677H32.8955C30.0955 88.7677 27.454 88.0257 25.0767 86.5419C22.6465 85.058 20.7446 83.0972 19.371 80.6594C17.9974 78.2216 17.2578 75.6248 17.2578 72.8691C17.2578 68.5764 18.8427 64.7608 21.9597 61.687C25.0767 58.5603 28.8276 57.0234 33.1597 57.0234C37.4918 57.0234 38.8125 57.8184 41.454 59.3022L41.5597 59.5142V60.9981L41.1899 61.1571C38.7069 59.4612 36.0125 58.6133 33.1597 58.6133C30.3069 58.6133 25.922 60.0442 23.1748 62.7999C20.4276 65.5557 19.0012 68.9474 19.0012 72.8691C19.0012 76.7907 20.3748 80.1294 23.1748 82.9382C25.922 85.7469 29.3031 87.1248 33.1597 87.1248C37.0163 87.1248 38.7069 86.2769 41.1899 84.581L41.5597 84.74V86.2239L41.454 86.4359C38.971 87.9727 36.2767 88.7147 33.371 88.7147L33.3182 88.7677Z"
                        fill="white"
                    />
                    <path
                        d="M58.6001 88.2117H47.7699L47.5586 87.9997V57.7393L47.7699 57.5273H58.6001L58.8114 57.7393V58.9052L58.6001 59.1172H49.302V75.1748H57.0152L57.2265 75.3868V76.5527L57.0152 76.7647H49.302V86.6748H58.6001L58.8114 86.8868V88.0527L58.6001 88.2647V88.2117Z"
                        fill="white"
                    />
                    <path
                        d="M75.6955 88.239H65.0238L64.8125 88.027V57.7667L65.0238 57.5547H66.3446L66.5559 57.7667V86.6492H75.6955L75.9068 86.8611V88.027L75.6955 88.239Z"
                        fill="white"
                    />
                    <path
                        d="M92.7893 88.239H82.1176L81.9062 88.027V57.7667L82.1176 57.5547H83.4383L83.6496 57.7667V86.6492H92.7893L93.0006 86.8611V88.027L92.7893 88.239Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1017_2018">
                        <rect width="112" height="115" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
    const Swisscross = () => {
        return (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1100_817)">
                    <path d="M0 0H18V18H0V0Z" fill="#DA291C" />
                    <path d="M7.3125 3.375H10.6875V7.3125H14.625V10.6875H10.6875V14.625H7.3125V10.6875H3.375V7.3125H7.3125V3.375Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_1100_817">
                        <rect width="18" height="18" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
    const Hamburger = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
        )
    }
    const initialAnimation = {
        initial: { opacity: 0, y: 40, filter: 'blur(4px)' },
        animate: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                type: 'spring',
                bounce: 0.2,
                delay: 1.15
            },
        },
        initialLogo: { opacity: 0, y: 40, filter: 'blur(4px)' },
        animateLogo: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                type: 'spring',
                bounce: 0.2,
                delay: 0.8
            },
        },
        initialFirst: { opacity: 0, y: 40, filter: 'blur(4px)' },
        animateFirst: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                type: 'spring',
                bounce: 0.2,
                delay: 0.4
            },
        },
        initialSecond: { opacity: 0, y: 40, filter: 'blur(4px)' },
        animateSecond: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                type: 'spring',
                bounce: 0.2,
                delay: 0.5
            },
        },
    }

    return (
        <main className="w-full">
            <section className=" max-h-svh flex-col">
                <Image
                    src={BG_Lander_new}
                    alt="Landerbackground"
                    className="z-[-1] absolute w-full h-svh object-cover sm:object-center md:object-[center_top] lg:object-cover" />

                <nav className="flex items-center justify-between w-full left-0 z-[40]">
                    <div className="max-[1450px]:block hidden">
                        <Hamburger />
                    </div>
                    <motion.div
                        variants={initialAnimation}
                        initial="initial"
                        animate="animate"
                        className="flex pl-12 max-[1450px]:hidden">
                        <div className="py-12 cursor-pointer font-normal text-[1.1rem] text-[#fff]">
                            Products
                        </div>
                        <div className="py-12 cursor-pointer pl-10 font-normal text-[1.1rem] text-[#fff]">
                            Bioacitve Technology
                        </div>
                        <div className="py-12 cursor-pointer pl-10 font-normal text-[1.1rem] text-[#fff]">
                            Coming soon
                        </div>
                    </motion.div>
                    <div className={`absolute select-none max-[1450px]:pt-40 w-full flex justify-center pt-12`}>
                        <motion.div
                            variants={initialAnimation}
                            initial="initialLogo"
                            animate="animateLogo"
                            layout
                            layoutId="logo"
                        >
                            <Logo />
                        </motion.div>
                    </div>
                    <motion.div
                        variants={initialAnimation}
                        initial="initial"
                        animate="animate"
                        className="flex pr-12 z-[40] max-[1450px]:hidden">
                        <div className="py-12 cursor-pointer pr-10  font-normal text-[1.1rem] text-[#fff]">
                            Contact
                        </div>
                        <div className="py-12 cursor-pointer font-normal text-[1.1rem] text-[#fff]">
                            About Us
                        </div>
                    </motion.div>
                </nav>

                <div className="absolute w-full flex h-svh -top-6 pl-32 items-center">
                    <div className="flex flex-col">
                        <motion.h1 variants={initialAnimation} initial="initialFirst" animate="animateFirst" className=" text-[3.875rem] font-semibold break-before-auto text-[#fff]">
                            Innovative Bioactive Skincare
                        </motion.h1>
                        <motion.div variants={initialAnimation} initial="initialSecond" animate="animateSecond" className="flex flex-row items-center space-x-3">
                            <Swisscross />
                            <div className="flex">
                                <p className="text-[1.25rem]  text-[#fff] font-normal">
                                    Made in Switzerland
                                </p>
                                <p className="text-[1.25rem] pl-2 text-[#fff]/70 font-normal">
                                    with the highest cosmetic standards.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </section>
            <section>
                
            </section>
        </main>
    )
}

export default Updated

// top headings = .875rem
// header = 3.875rem
// little text = 1.25rem
// products = 7.5rem