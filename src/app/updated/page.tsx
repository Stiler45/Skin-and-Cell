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
} from '../../components/ui/carousel';
import Word from '../../components/ui/word'

const Updated = () => {

    const [scrolled, setScrolled] = useState(false)
    const [openHand, setOpenHand] = useState(false)
    const [move, setMoved] = useState(false)
    const [openFace, setOpenFace] = useState(false)
    const [openSerum, setOpenSerum] = useState(false)
    const [openBody, setOpenBody] = useState(false)
    const [openEye, setOpenEye] = useState(false)

    useEffect(() => {
        // Clear the timeout when component unmounts to avoid memory leaks
        const timer = setTimeout(() => {
          setMoved(true);
        }, 1000);
      
        return () => clearTimeout(timer);
      }, []); // Empty dependency array means this runs once on mount

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
            <svg width="80%" height="210" viewBox="0 0 1152 210" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1059 208.812C27.6297 208.812 20.4785 207.203 14.3024 203.986C7.80132 200.769 2.92549 196.264 0 190.795V177.281H1.62527C8.45143 191.76 19.5033 199.482 34.4558 199.482C49.4083 199.482 51.6837 196.586 57.8598 191.116C64.0358 185.647 67.2864 179.212 67.2864 172.133C67.2864 165.055 65.336 159.264 61.4354 154.437C57.5347 149.611 52.3338 145.429 46.4829 142.211C40.6319 138.672 34.7809 135.454 28.9299 131.915C23.0789 128.376 17.878 124.193 13.6523 119.367C9.42659 114.541 7.15121 108.428 7.15121 101.993C7.15121 95.5581 9.75165 89.445 15.2776 84.9406C20.8035 80.4361 27.6297 78.1839 36.0811 78.1839C44.5325 78.1839 52.0088 81.4014 57.8598 88.158V88.8015V100.063L56.2345 100.706C50.7086 92.3407 43.2323 88.158 34.7809 88.158C26.3294 88.158 26.3294 89.7667 22.7538 92.6624C19.1782 95.5581 17.553 99.0973 17.553 103.602C17.553 108.106 19.5033 111.967 23.404 115.506C27.6297 119.367 32.5055 122.906 38.0314 125.802C43.8824 129.02 49.7334 132.559 55.5844 136.098C61.4354 139.637 66.6363 144.463 70.862 150.255C75.0877 156.046 77.3631 162.803 77.3631 170.203C77.3631 181.142 73.1374 190.473 64.6859 198.195C56.2345 205.917 46.1578 209.777 34.4558 209.777L35.1059 208.812ZM404.693 205.916H395.917L394.942 204.951V133.524C394.942 121.298 390.391 110.358 381.94 101.35C373.163 92.3407 362.436 87.8363 350.084 87.8363C337.732 87.8363 326.68 92.3407 317.254 101.35C307.827 110.358 302.951 121.298 302.951 133.524V204.951L301.976 205.916H293.2L292.224 204.951V82.0449L293.2 81.0796H301.976L302.951 82.0449V103.28C312.703 86.5493 328.305 78.1839 350.084 78.1839C371.863 78.1839 379.014 83.6536 389.741 94.2711C400.468 104.889 405.668 118.08 405.668 133.524V204.951L404.693 205.916ZM242.816 205.916H234.04L233.064 204.951V82.3666L234.04 81.4014H242.816L243.791 82.3666V204.951L242.816 205.916ZM200.559 205.916H188.207L126.771 142.533V204.951L125.796 205.916H117.02L116.045 204.951V0.965231L117.02 0H125.796L126.771 0.965231V122.906L174.229 81.7231H174.88H186.256L186.907 83.3318L130.672 131.915L201.209 204.951L200.559 206.56V205.916ZM238.59 53.4096C232.739 53.4096 229.814 50.5139 229.814 45.0442C229.814 39.5746 232.739 36.6789 238.59 36.6789C244.441 36.6789 247.367 39.5746 247.367 45.0442C247.367 50.5139 244.441 53.4096 238.59 53.4096Z" fill="url(#paint0_linear_1067_173)"/>
<path d="M781.863 210.002H779.264C762.04 210.002 745.792 205.492 731.169 196.473C716.221 187.453 704.522 175.535 696.073 160.717C687.624 145.899 683.074 130.116 683.074 113.365C683.074 87.2733 692.823 64.0806 711.996 45.3975C731.169 26.3923 754.241 17.0508 780.888 17.0508C807.535 17.0508 815.659 21.8826 831.908 30.902L832.558 32.1905V41.2099L830.283 42.1763C815.01 31.8684 798.436 26.7144 780.888 26.7144C763.34 26.7144 736.368 35.4117 719.47 52.1621C702.572 68.9124 693.798 89.5282 693.798 113.365C693.798 137.202 702.247 157.496 719.47 174.568C736.368 191.641 757.166 200.016 780.888 200.016C804.611 200.016 815.01 194.862 830.283 184.554L832.558 185.52V194.54L831.908 195.828C816.634 205.17 800.061 209.68 782.188 209.68L781.863 210.002Z" fill="url(#paint1_linear_1067_173)"/>
<path d="M939.468 207.102H872.851L871.551 205.814V21.8822L872.851 20.5938H939.468L940.768 21.8822V28.9689L939.468 30.2574H882.275V127.86H929.719L931.019 129.149V136.236L929.719 137.524H882.275V197.761H939.468L940.768 199.049V206.136L939.468 207.424V207.102Z" fill="url(#paint2_linear_1067_173)"/>
<path d="M1150.7 207.102H1085.06L1083.76 205.814V21.8822L1085.06 20.5938H1093.18L1094.48 21.8822V197.439H1150.7L1152 198.727V205.814L1150.7 207.102Z" fill="url(#paint3_linear_1067_173)"/>
<path d="M1048.34 207.102H982.696L981.396 205.814V21.8822L982.696 20.5938H990.82L992.12 21.8822V197.439H1048.34L1049.64 198.727V205.814L1048.34 207.102Z" fill="url(#paint4_linear_1067_173)"/>
<path d="M546.321 209.777H541.122C539.498 209.777 538.523 208.487 538.523 207.197V123.973H455.994C454.369 123.973 453.395 122.682 453.395 121.392V116.553C453.395 114.94 454.694 113.973 455.994 113.973H538.523V30.7486C538.523 29.1357 539.823 28.168 541.122 28.168H546.321C547.946 28.168 548.92 29.4583 548.92 30.7486V113.973H632.749C634.374 113.973 635.349 115.263 635.349 116.553V121.392C635.349 123.005 634.049 123.973 632.749 123.973H548.92V207.197C548.92 208.81 547.621 209.777 546.321 209.777Z" fill="url(#paint5_linear_1067_173)"/>
<defs>
<linearGradient id="paint0_linear_1067_173" x1="202.834" y1="0" x2="202.834" y2="209.777" gradientUnits="userSpaceOnUse">
<stop stop-color="#999999" stop-opacity="0.6"/>
<stop offset="0.835" stop-color="white" stop-opacity="0.9"/>
<stop offset="1" stop-color="white" stop-opacity="0.9"/>
</linearGradient>
<linearGradient id="paint1_linear_1067_173" x1="757.816" y1="17.0508" x2="757.816" y2="210.002" gradientUnits="userSpaceOnUse">
<stop stop-color="#999999" stop-opacity="0.6"/>
<stop offset="0.835" stop-color="white" stop-opacity="0.9"/>
<stop offset="1" stop-color="white" stop-opacity="0.9"/>
</linearGradient>
<linearGradient id="paint2_linear_1067_173" x1="906.159" y1="20.5937" x2="906.159" y2="207.424" gradientUnits="userSpaceOnUse">
<stop stop-color="#999999" stop-opacity="0.6"/>
<stop offset="0.835" stop-color="white" stop-opacity="0.9"/>
<stop offset="1" stop-color="white" stop-opacity="0.9"/>
</linearGradient>
<linearGradient id="paint3_linear_1067_173" x1="1117.88" y1="20.5937" x2="1117.88" y2="207.102" gradientUnits="userSpaceOnUse">
<stop stop-color="#999999" stop-opacity="0.6"/>
<stop offset="0.835" stop-color="white" stop-opacity="0.9"/>
<stop offset="1" stop-color="white" stop-opacity="0.9"/>
</linearGradient>
<linearGradient id="paint4_linear_1067_173" x1="1015.52" y1="20.5937" x2="1015.52" y2="207.102" gradientUnits="userSpaceOnUse">
<stop stop-color="#999999" stop-opacity="0.6"/>
<stop offset="0.835" stop-color="white" stop-opacity="0.9"/>
<stop offset="1" stop-color="white" stop-opacity="0.9"/>
</linearGradient>
<linearGradient id="paint5_linear_1067_173" x1="544.372" y1="28.168" x2="544.372" y2="209.777" gradientUnits="userSpaceOnUse">
<stop stop-color="#999999" stop-opacity="0.6"/>
<stop offset="0.835" stop-color="white" stop-opacity="0.9"/>
<stop offset="1" stop-color="white" stop-opacity="0.9"/>
</linearGradient>
</defs>
</svg>

        )
    }
    const paragraph = "Skin and Cell AG was founded in Switzerland in 2021 as a new skin science company born out of the experience of a group of eminent oncologists, dermatologists, epidemiologists and skin formulation experts."
    const words = paragraph.split(" ")

    return (
        <main className="w-full ">
            <section className="h-svh max-h-svh flex-col ">
                <Image
                    src={BG_Lander_new}
                    alt="Landerbackground"
                    className="z-[-1] absolute w-full h-svh object-cover sm:object-center md:object-[center_top] lg:object-cover" />
                <div className="top-[-2%] absolute flex justify-center items-center w-full h-svh">
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
                        className="z-[50] flex flex-col max-[600px]:justify-between">
                        <div className="font-normal max-[800px]:text-[40px] max-[400px]:text-[32px] text-[#fff] text-[3.875rem] text-center">
                            Innovative Bioactive Skincare
                        </div>
                        <div className="flex max-[650px]:flex-col justify-center items-center px-[4px]">
                            <div className="flex items-center">
                                <Swisscross />
                                <div className="pl-[8px] font-normal text-[#fff] max-[800px]:text-[16px] text-[20px]">
                                    From The Glarner Alps in Switzerland
                                </div>
                            </div>

                            <div className="min-[800px]:pl-2 font-normal max-[800px]:text-[16px] text-[#939192] text-[20px]">
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
            <section className=" flex justify-center h-svh px-10  items-center">
                <Word paragraph={paragraph}/>
            </section>
            <section className="flex  justify-center">
                <div className="max-[1000px]:flex max-[1000px]:items-center flex-col">
                    <motion.h1
                    className="pb-16  pt-16  text-[3.875rem] font-semibold  text-[#000]"
                    initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                type: 'spring',
                                bounce: 0.2,
                            },
                        }}
                    >
                        Products
                    </motion.h1>
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
                    <Carousel className="min-[1600px]:w-[1350px] min-[650px]:w-[900px]">
                        <CarouselContent className='-ml-4 space-x-4'>
                            <CarouselItem className='min-[1600px]:basis-1/3 min-[1000px]:basis-1/2 max-[1000px]:ml-[27.5%]  pl-4'>
                                <div className="flex flex-col">
                                    <motion.div 
                                    onClick={() => { setOpenSerum(true) }} layout layoutId="openSerum" className=" flex justify-center items-center  w-[25rem] relative cursor-pointer p-16 h-[30rem] bg-[#fff] border border-[#000]/10">
                                        <motion.img
                                            layout
                                            src="/B3_Serum_Gold.png"
                                            alt="B3 Serum"
                                            layoutId="Serum-same"
                                            className="h-[320px] max-h-[450px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className={`text-[1.25rem] ${openSerum ? "hidden" : "block"} text-[#000] font-semibold`}>B3 Serum Concentrate</motion.h1>
                                        <motion.p className={`text-[0.875rem] ${openSerum ? "hidden" : "block"} text-[#000]/80 font-normal`}>Infused with Peptides which is Anti Aging</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='min-[1600px]:basis-1/3 pl-4 min-[1000px]:basis-1/2'>
                                <div className="flex flex-col">
                                    <motion.div className=" flex justify-center items-center w-[25rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            layout
                                            src="/B3_Eye_Gold.png"
                                            alt="B3 Eye"
                                            layoutId="Eye-same"
                                            className="h-[320px] max-h-[450px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Eye Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Peptides which is Anti Aging</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='min-[1600px]:basis-1/3 pl-4 min-[1000px]:basis-1/2'>
                                <div className="flex flex-col">
                                    <motion.div className="flex justify-center items-center w-[25rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            layout
                                            src="/2_B3_Body_slim-200ml.png"
                                            alt="B3 Body"
                                            layoutId="Body-same"
                                            className="h-[320px] max-h-[450px] object-contain"
                                        />
                                    </motion.div>
                                    <div className="pt-6">
                                        <motion.h1 className="text-[1.25rem] text-[#000] font-semibold">B3 Body Concentrate</motion.h1>
                                        <motion.p className="text-[0.875rem] text-[#000]/80 font-normal">Infused with Peptides which is Anti Aging</motion.p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='min-[1600px]:basis-1/3 pl-4 min-[1000px]:basis-1/2'>
                                <div className="flex flex-col">
                                    <motion.div className="flex justify-center items-center w-[25rem] relative cursor-pointer p-16 bg-[#fff] h-[30rem] border border-[#000]/10">
                                        <motion.img
                                            layout
                                            src="/B3_Face_gold.png"
                                            alt="B3 Face"
                                            layoutId="Face-same"
                                            className="h-[320px] max-h-[450px] object-contain"
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
                    <div className="flex justify-center items-center  ">

                        <div className="flex flex-col items-center ">
                            <p className="uppercase text-[#000] text-[0.875rem]">
                                Research
                            </p>
                            <h1 className="text-[3.875rem] text-center font-semibold text-[#000] pb-8">
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
                <div className="min-[1600px]:w-[1350px] min-[650px]:w-[900px] flex">

                    <div className="w-1/2 max-[980px]:hidden flex justify-start pr-24">
                        <Image
                            src={Lindenpark}
                            alt="Landerbackground"
                            className="z-[-1] border border-black/10  w-full h-[550px] object-cover sm:object-center md:object-[center_top] lg:object-cover" />
                    </div>
                    <div className="w-1/2 max-[980px]:w-full justify-center flex items-center ">
                        <div className="flex-col justify-center">
                            <p className=" uppercase text-[#000] text-[0.875rem]">
                                Contact/About Us
                            </p>
                            <h1 className="text-[3.875rem] leading-[1] pb-2  font-semibold text-[#000]">
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
                        <div className="w-full h-full" />
                    </div>
                </div>
            </section>
            <section className="w-full pb-4 pt-48 flex justify-center">
                        <div className="text-[1rem]">
                            © Copyright Skin and Cell 2025
                        </div>
            </section>
        </main>
    )
}

export default Updated

// top headings = .875rem
// header = 3.875rem | 2.25rem
// little text = 1.25rem
// products = 7.5rem
//
