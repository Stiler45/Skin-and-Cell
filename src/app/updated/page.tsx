/* 'use client'
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
} from '../../components/ui/carousel';

const Updated = () => {

    const [scrolled, setScrolled] = useState(false)
    const [openHand, setOpenHand] = useState(false)
    const [move, setMoved] = useState(false)
    const [openFace, setOpenFace] = useState(false)
    const [openSerum, setOpenSerum] = useState(false)
    const [openBody, setOpenBody] = useState(false)
    const [openEye, setOpenEye] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setMoved(!move)
        }, 1000);
    });

    const ingredients = [
        {
            id: 1,
            title: "Ceramides",
            description:
                "Key structural components of the skin, replenishing and providing a healthier-looking skin.",
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
            title: "Nicotinamide",
            description:
                "Nicotinamide (Niacinamide) – the bioactive form of Vitamin B3, shown to provide protection against the harmful effects of the sun (UV irradiation), skin aging, and environmental insult.",
        },
    ];
    const Logo2 = () => {
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
    const Logo = () => {
        return (
            <svg
                width={move ? "95" : "112"}
                height={move ? "95" : "115"}
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
    const PDF = () => {
        return (
            <svg width="319" height="442" viewBox="0 0 319 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1158_270" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="319" height="442">
                    <path d="M318.6 0H0V442H318.6V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1158_270)">
                    <g filter="url(#filter0_ii_1158_270)">
                        <path d="M0 16.5351C0 7.40949 7.38638 0.0117188 16.4979 0.0117188H205.577C209.953 0.0117188 214.149 1.75256 217.243 4.8513L312.753 100.509C315.847 103.607 317.585 107.81 317.585 112.192V425.488C317.585 434.614 310.199 442.012 301.087 442.012H16.4979C7.38636 442.012 0 434.614 0 425.488V16.5351Z" fill="#121212" />
                    </g>
                    <mask id="mask1_1158_270" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="182" y="-17" width="154" height="152">
                        <path d="M335.12 -16.5352H182.9V134.738H335.12V-16.5352Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_1158_270)">
                        <g filter="url(#filter1_di_1158_270)">
                            <path d="M212.161 88.8273C212.161 97.9528 219.537 105.348 228.649 105.348C247.644 105.348 277.978 105.348 291.557 105.348C319.398 105.348 316.833 108.148 316.833 108.148C316.833 108.148 317.417 105.188 313.293 101.057C309.593 97.3512 231.119 18.9989 215.032 2.88626C213.164 1.01591 208.554 0.0117188 205.913 0.0117188C205.913 0.0117188 212.161 0.0117188 212.161 52.6799C212.161 63.6552 212.161 77.9141 212.161 88.8273Z" fill="url(#paint0_linear_1158_270)" />
                        </g>
                    </g>
                </g>
                <defs>
                    <filter id="filter0_ii_1158_270" x="0" y="0.0117188" width="317.585" height="486.74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="0.873832" />
                        <feGaussianBlur stdDeviation="0.699065" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.33 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1158_270" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="50.6822" />
                        <feGaussianBlur stdDeviation="22.3701" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0" />
                        <feBlend mode="normal" in2="effect1_innerShadow_1158_270" result="effect2_innerShadow_1158_270" />
                    </filter>
                    <filter id="filter1_di_1158_270" x="184.941" y="-13.9696" width="145.935" height="143.09" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-3.49533" dy="3.49533" />
                        <feGaussianBlur stdDeviation="8.73832" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1158_270" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1158_270" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-1.74766" dy="0.873832" />
                        <feGaussianBlur stdDeviation="1.31075" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.23 0" />
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1158_270" />
                    </filter>
                    <linearGradient id="paint0_linear_1158_270" x1="266.81" y1="50.6145" x2="207.947" y2="109.388" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3E3E3E" />
                        <stop offset="1" stop-color="#1A1A1A" />
                    </linearGradient>
                </defs>
            </svg>

        )
    }
    const Footer = () => {
        return (
            <svg width="40%" height="276" viewBox="0 0 1510 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.0156 274.439C36.216 274.439 26.8424 272.325 18.7471 268.096C10.2257 263.867 3.83463 257.947 0 250.758V232.998H2.13035C11.0778 252.027 25.5642 262.176 45.1635 262.176C64.7627 262.176 67.7452 258.37 75.8405 251.181C83.9358 243.993 88.1965 235.535 88.1965 226.232C88.1965 216.929 85.6401 209.318 80.5273 202.975C75.4144 196.632 68.5973 191.135 60.9281 186.906C53.2588 182.254 45.5895 178.026 37.9203 173.374C30.251 168.723 23.4339 163.226 17.895 156.883C12.356 150.54 9.37355 142.505 9.37355 134.048C9.37355 125.591 12.7821 117.556 20.0253 111.636C27.2685 105.716 36.216 102.756 47.2938 102.756C58.3716 102.756 68.1712 106.985 75.8405 115.865V116.711V131.511L73.7102 132.357C66.467 121.362 56.6673 115.865 45.5895 115.865C34.5117 115.865 34.5117 117.979 29.8249 121.785C25.1381 125.591 23.0078 130.242 23.0078 136.162C23.0078 142.082 25.5642 147.157 30.6771 151.808C36.216 156.883 42.607 161.534 49.8502 165.34C57.5195 169.569 65.1888 174.22 72.858 178.872C80.5273 183.523 87.3444 189.866 92.8833 197.478C98.4222 205.089 101.405 213.969 101.405 223.695C101.405 238.073 95.8658 250.336 84.788 260.484C73.7102 270.633 60.502 275.707 45.1635 275.707L46.0156 274.439ZM530.457 270.633H518.953L517.675 269.365V175.489C517.675 159.42 511.71 145.042 500.633 133.202C489.129 121.362 475.068 115.442 458.878 115.442C442.687 115.442 428.201 121.362 415.845 133.202C403.488 145.042 397.097 159.42 397.097 175.489V269.365L395.819 270.633H384.315L383.037 269.365V107.83L384.315 106.562H395.819L397.097 107.83V135.739C409.88 113.75 430.331 102.756 458.878 102.756C487.424 102.756 496.798 109.945 510.858 123.899C524.919 137.854 531.736 155.191 531.736 175.489V269.365L530.457 270.633ZM318.274 270.633H306.771L305.492 269.365V108.253L306.771 106.985H318.274L319.553 108.253V269.365L318.274 270.633ZM262.885 270.633H246.695L166.167 187.329V269.365L164.889 270.633H153.385L152.107 269.365V1.26859L153.385 0H164.889L166.167 1.26859V161.534L228.374 107.408H229.226H244.138L244.99 109.522L171.28 173.374L263.737 269.365L262.885 271.479V270.633ZM312.736 70.1955C305.066 70.1955 301.232 66.3897 301.232 59.201C301.232 52.0123 305.066 48.2065 312.736 48.2065C320.405 48.2065 324.239 52.0123 324.239 59.201C324.239 66.3897 320.405 70.1955 312.736 70.1955Z" fill="url(#paint0_linear_1014_1389)" />
                <path d="M1024.84 275.999H1021.43C998.854 275.999 977.556 270.072 958.388 258.218C938.795 246.364 923.46 230.699 912.386 211.225C901.311 191.75 895.348 171.006 895.348 148.991C895.348 114.699 908.126 84.2168 933.257 59.6619C958.388 34.6837 988.631 22.4062 1023.56 22.4062C1058.49 22.4062 1069.14 28.7567 1090.43 40.6107L1091.29 42.3042V54.1583L1088.3 55.4283C1068.28 41.8808 1046.56 35.1071 1023.56 35.1071C1000.56 35.1071 965.204 46.5378 943.054 68.5525C920.905 90.5672 909.404 117.662 909.404 148.991C909.404 180.32 920.479 206.991 943.054 229.429C965.204 251.867 992.464 262.875 1023.56 262.875C1054.65 262.875 1068.28 256.101 1088.3 242.554L1091.29 243.824V255.678L1090.43 257.371C1070.41 269.649 1048.69 275.576 1025.26 275.576L1024.84 275.999Z" fill="url(#paint1_linear_1014_1389)" />
                <path d="M1231.42 272.188H1144.1L1142.39 270.495V28.7559L1144.1 27.0625H1231.42L1233.12 28.7559V38.0699L1231.42 39.7633H1156.45V168.041H1218.64L1220.34 169.735V179.049L1218.64 180.742H1156.45V259.911H1231.42L1233.12 261.604V270.918L1231.42 272.611V272.188Z" fill="url(#paint2_linear_1014_1389)" />
                <path d="M1508.3 272.188H1422.25L1420.55 270.495V28.7559L1422.25 27.0625H1432.9L1434.61 28.7559V259.487H1508.3L1510 261.181V270.495L1508.3 272.188Z" fill="url(#paint3_linear_1014_1389)" />
                <path d="M1374.12 272.188H1288.08L1286.38 270.495V28.7559L1288.08 27.0625H1298.73L1300.44 28.7559V259.487H1374.12L1375.83 261.181V270.495L1374.12 272.188Z" fill="url(#paint4_linear_1014_1389)" />
                <path d="M716.098 275.706H709.284C707.154 275.706 705.876 274.01 705.876 272.315V162.934H597.7C595.571 162.934 594.293 161.238 594.293 159.543V153.183C594.293 151.063 595.996 149.792 597.7 149.792H705.876V40.4112C705.876 38.2914 707.58 37.0195 709.284 37.0195H716.098C718.227 37.0195 719.505 38.7154 719.505 40.4112V149.792H829.385C831.514 149.792 832.792 151.487 832.792 153.183V159.543C832.792 161.662 831.088 162.934 829.385 162.934H719.505V272.315C719.505 274.434 717.801 275.706 716.098 275.706Z" fill="url(#paint5_linear_1014_1389)" />
                <defs>
                    <linearGradient id="paint0_linear_1014_1389" x1="265.868" y1="0" x2="265.868" y2="275.707" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6F6F6F" stopOpacity="0.9" />
                        <stop offset="1" stopColor="white" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1014_1389" x1="993.316" y1="22.4062" x2="993.316" y2="275.999" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6F6F6F" stopOpacity="0.9" />
                        <stop offset="1" stopColor="white" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1014_1389" x1="1187.76" y1="27.0625" x2="1187.76" y2="272.611" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6F6F6F" stopOpacity="0.9" />
                        <stop offset="1" stopColor="white" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1014_1389" x1="1465.28" y1="27.0625" x2="1465.28" y2="272.188" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6F6F6F" stopOpacity="0.9" />
                        <stop offset="1" stopColor="white" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1014_1389" x1="1331.1" y1="27.0625" x2="1331.1" y2="272.188" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6F6F6F" stopOpacity="0.9" />
                        <stop offset="1" stopColor="white" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_1014_1389" x1="713.542" y1="37.0195" x2="713.542" y2="275.706" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6F6F6F" stopOpacity="0.9" />
                        <stop offset="1" stopColor="white" stopOpacity="0.9" />
                    </linearGradient>
                </defs>
            </svg>
        )
    }

    return (
        <main className="w-full">
            <section className="h-svh max-h-svh flex-col ">
                <Image
                    src={BG_Lander_new}
                    alt="Landerbackground"
                    className="z-[-1] absolute w-full h-svh object-cover sm:object-center md:object-[center_top] lg:object-cover" />
                <div className="top-[-5%] absolute flex justify-center items-center w-full h-svh">
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                type: 'spring',
                                bounce: 0.2,
                                delay: 1.2
                            },
                        }}
                        className="z-[50] flex flex-col">
                        <div className="font-medium text-[#fff] text-[5rem] text-center">
                            New Bioactive Skincare
                        </div>
                        <div className="flex items-center px-[4px]">
                            <Swisscross />
                            <div className="pl-[8px] font-normal text-[#fff] text-[20px]">
                                From The Glarner Alps in Switzerland
                            </div>
                            <div className="pl-[4px] font-normal text-[#BFBFBF] text-[20px]">
                                made with the highest cosmetic standards.
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={`flex ${move ? "justify-start" : "justify-center"} ${move ? "pt-[64px]" : undefined} flex-col max-[900px]:flex-col items-center space-x-[32px]  h-full`}>
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
                </div>

            </section>
            <section className="flex  justify-center">
                <div className="">
                    <h1 className="pt-16 pb-16 text-[7.5rem] font-semibold text-[#000]">
                        Products
                    </h1>
                    <AnimatePresence>
                        {openSerum && (
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
                                                    layout
                                                    src="/B3_Serum_Gold.png"
                                                    alt="B3 Serum"
                                                    layoutId="Serum-same"
                                                    className="h-[320px] max-h-[500px] object-contain"
                                                />
                                            </motion.div>

                                            <div className="flex flex-col">
                                                <motion.div
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    layout
                                                    className={`text-[1.25rem] text-[#000] font-semibold`}
                                                >
                                                    B3 Eye Concentrate
                                                </motion.div>
                                                <motion.div
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    layout
                                                    className={`text-[0.875rem]  text-[#000]/80 font-normal`}
                                                >
                                                    Infused with Peptides which is Anti Aging
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-start w-auto max-w-[760px]">
                                            <motion.div
                                                layout
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                layoutId="hand-ingredients"
                                                className=" pb-3 text-[1.5rem] text-[#000] font-semibold"
                                            >
                                                Ingredients
                                            </motion.div>
                                            {ingredients.map((ingredient, index) => (
                                                <div key={index} className="max-w-[35vw] max-[800px]:max-w-[100%]">
                                                    <motion.div
                                                        layout
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        layoutId={`hand-text-${index}`}
                                                        className={`text-[1.25rem]  text-[#000]/90 font-medium`}
                                                    >
                                                        {index + 1}. {ingredient.title}
                                                    </motion.div>
                                                    <motion.div
                                                        layout
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        layoutId={`hand-desc-${index}`}
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
                        )}
                    </AnimatePresence>
                    <Carousel className="max-w-[1350px] max-[1900px]:max-w-[1072px] max-[1200px]:max-w-[696px]">
                        <CarouselContent className='-ml-4'>
                            <CarouselItem className='basis-1/3 max-[850px]:basis-0 max-[1200px]:basis-1/2 pl-4'>
                                <div className="flex flex-col">
                                    <motion.div onClick={() => { setOpenSerum(true) }} layout layoutId="openSerum" className=" flex justify-center items-center w-[25rem] relative cursor-pointer p-16 h-[30rem] max-[1900px]:w-[20rem] bg-[#fff] border border-[#000]/10">
                                        <motion.img
                                            layout
                                            src="/B3_Serum_Gold.png"
                                            alt="B3 Serum"
                                            layoutId="Serum-same"
                                            className="h-[350px] max-h-[450px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className={`text-[1.25rem] ${openSerum ? "hidden" : "block"} text-[#000] font-semibold`}>B3 Serum Concentrate</motion.h1>
                                        <motion.p className={`text-[0.875rem] ${openSerum ? "hidden" : "block"} text-[#000]/80 font-normal`}>Infused with Peptides which is Anti Aging</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='basis-1/3 max-[850px]:basis-0 max-[1200px]:basis-1/2 pl-4'>
                                <div className="flex flex-col">
                                    <motion.div className=" flex justify-center items-center w-[25rem] relative cursor-pointer max-[1900px]:w-[20rem] p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            layout
                                            src="/B3_Eye_Gold.png"
                                            alt="B3 Eye"
                                            layoutId="Eye-same"
                                            className="h-[350px] max-h-[450px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Eye Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Peptides which is Anti Aging</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='basis-1/3 max-[850px]:basis-0 max-[1200px]:basis-1/2 pl-4'>
                                <div className="flex flex-col">
                                    <motion.div className="flex justify-center items-center w-[25rem] relative cursor-pointer max-[1900px]:w-[20rem] p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            layout
                                            src="/2_B3_Body_slim-200ml.png"
                                            alt="B3 Body"
                                            layoutId="Body-same"
                                            className="h-[350px] max-h-[450px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Body Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Peptides which is Anti Aging</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='basis-1/3 max-[850px]:basis-0 max-[1200px]:basis-1/2 pl-4'>
                                <div className="flex flex-col">
                                    <motion.div className="flex justify-center items-center w-[25rem] relative cursor-pointer max-[1900px]:w-[20rem] p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            layout
                                            src="/B3_Face_gold.png"
                                            alt="B3 Face"
                                            layoutId="Face-same"
                                            className="h-[350px] max-h-[450px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Face Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Peptides which is Anti Aging</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNavigation
                            className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
                            classNameButton='bg-black *:stroke-zinc-50 '
                            alwaysShow
                        />
                    </Carousel>
                </div>
            </section>
            <section className="h-svh flex justify-center py-24">

                <div className="w-full  flex justify-center ">
                    <div className="flex justify-center items-center ">

                        <div className="flex flex-col items-center ">
                            <p className="uppercase text-[#000] text-[0.875rem]">
                                Research
                            </p>
                            <h1 className="text-[3.875rem] font-semibold text-[#000] pb-8">
                                Bioactive Techonology, Perfected. <br />
                            </h1>
                            <div className=" flex justify-center items-center">
                                <p className="uppercase cursor-pointer text-[#fff] bg-black py-4 px-7 text-[1.25rem]">
                                    Read our Paper
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className=" flex justify-center">
                <div className="w-[1350px] max-[1900px]:w-[1072px] max-[1200px]:w-[696px] flex justify-between">
                    <div className="w-1/2 flex ">
                    <div className="flex-col justify-center">
                        <p className=" uppercase text-[#000] text-[0.875rem]">
                            Contact/About Us
                        </p>
                        <h1 className="text-[7.5rem] -ml-2 leading-[1] pb-2  font-semibold text-[#000]">
                            Reach out
                        </h1>
                        <p className="text-[1.25rem]  mt-4 text-[#000]/80 font-normal">
                            Skin and Cell AG was founded in Switzerland in 2021 as a new skin science company born out of the experience of a group of eminent oncologists, dermatologists, epidemiologists and skin formulation experts. Led by Dr. Simon Ward who has spent much of his career researching and teaching oncology and dermatology at Oxford University’s medical school in the United Kingdom, Skin and Cell wants to help repair and maintain good skin health, vibrance and longevity through bringing science backed skin formulations to people around the world.
                        </p>
                        <div className="flex mt-12 space-x-2">
                            <p className="text-[1.25rem] text-center cursor-text p-4 border bg-black text-[#fff] font-normal">
                                Support@Skinandcell.com
                            </p>
                            <p onClick={() => window.location.href = 'mailto:your.email@example.com'} className="text-[1.25rem] cursor-pointer text-center p-4 border border-black text-[#000]/80 font-normal">
                                Open Mail
                            </p>
                            </div>

                        </div>
                        <div className="w-full h-full"/>
                    </div>
                    <div className="w-1/2 flex items-center">
                        <Image
                            src={Lindenpark}
                            alt="Landerbackground"
                            className="z-[-1] border border-black/10  w-full h-[550px] object-cover sm:object-center md:object-[center_top] lg:object-cover" />
                    </div>
                </div>

            </section>
            <section className="w-full h-svh">

            </section>
        </main>
    )
}

export default Updated
 */
// top headings = .875rem
// header = 3.875rem | 2.25rem
// little text = 1.25rem
// products = 7.5rem
//
{/*<div className={`flex ${move ? "justify-start" : "justify-center"} ${move ? "pt-[64px]" : undefined} flex-col max-[900px]:flex-col items-center space-x-[32px]  h-full`}>
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
</div>
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
</nav>*/}