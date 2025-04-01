'use client'
import Image from "next/image"
import BG_Lander_new from "../../../public/BG_Lander_New.png"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const Hero = () => {

    const [animateBack, setAnimateBack] = useState(true)
    const [opacityY, setOpacityY] = useState(true)


    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 10000);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setAnimateBack(false)
        }, 1000)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setOpacityY(false)
        }, 1500)
    }, [])

    const Logo = () => {
        return (
            <svg width="100" height="102" viewBox="0 0 100 102" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1262_239)">
<path d="M99.9528 102H0V0H99.9528V38.9198H96.6038V3.33733H3.34906V98.6627H96.6038V52.0811H99.9528V102Z" fill="black"/>
<path d="M86.889 58.9441H86.1343C85.8984 58.9441 85.7569 58.756 85.7569 58.568V46.4408H73.7758C73.5399 46.4408 73.3984 46.2528 73.3984 46.0648V45.3597C73.3984 45.1247 73.5871 44.9837 73.7758 44.9837H85.7569V32.8565C85.7569 32.6215 85.9456 32.4805 86.1343 32.4805H86.889C87.1248 32.4805 87.2664 32.6685 87.2664 32.8565V44.9837H99.4362C99.672 44.9837 99.8135 45.1717 99.8135 45.3597V46.0648C99.8135 46.2998 99.6249 46.4408 99.4362 46.4408H87.2664V58.568C87.2664 58.803 87.0777 58.9441 86.889 58.9441Z" fill="black"/>
<path d="M21.1803 40.4708C20.0954 40.4708 19.0576 40.2358 18.1614 39.7658C17.218 39.2957 16.5105 38.6377 16.0859 37.8386V35.8644H16.3218C17.3124 37.9796 18.9161 39.1077 21.0859 39.1077C23.2558 39.1077 23.5859 38.6847 24.4822 37.8856C25.3784 37.0865 25.8501 36.1464 25.8501 35.1123C25.8501 34.0782 25.5671 33.2321 25.001 32.5271C24.435 31.822 23.6803 31.2109 22.8312 30.7409C21.9822 30.2238 21.1331 29.7538 20.2841 29.2367C19.435 28.7197 18.6803 28.1086 18.0671 27.4036C17.4539 26.6985 17.1237 25.8054 17.1237 24.8653C17.1237 23.9252 17.501 23.0321 18.3029 22.3741C19.1048 21.716 20.0954 21.387 21.3218 21.387C22.5482 21.387 23.6331 21.857 24.4822 22.8441V22.9381V24.5833L24.2463 24.6773C23.4444 23.4552 22.3595 22.8441 21.1331 22.8441C19.9067 22.8441 19.9067 23.0791 19.3878 23.5022C18.869 23.9252 18.6331 24.4423 18.6331 25.1003C18.6331 25.7584 18.9161 26.3224 19.4822 26.8395C20.0954 27.4036 20.8029 27.9206 21.6048 28.3436C22.4539 28.8137 23.3029 29.3307 24.152 29.8478C25.001 30.3648 25.7558 31.0699 26.369 31.916C26.9822 32.7621 27.3124 33.7492 27.3124 34.8303C27.3124 36.4284 26.6991 37.7916 25.4727 38.9197C24.2463 40.0478 22.7841 40.6118 21.0859 40.6118L21.1803 40.4708ZM74.8124 40.0478H73.5388L73.3973 39.9068V29.4718C73.3973 27.6856 72.7369 26.0874 71.5105 24.7713C70.2369 23.4552 68.6803 22.7971 66.8878 22.7971C65.0954 22.7971 63.4916 23.4552 62.1237 24.7713C60.7558 26.0874 60.0482 27.6856 60.0482 29.4718V39.9068L59.9067 40.0478H58.6331L58.4916 39.9068V21.951L58.6331 21.81H59.9067L60.0482 21.951V25.0533C61.4633 22.6091 63.7275 21.387 66.8878 21.387C70.0482 21.387 71.0859 22.186 72.6425 23.7372C74.1991 25.2883 74.9539 27.2155 74.9539 29.4718V39.9068L74.8124 40.0478ZM51.3218 40.0478H50.0482L49.9067 39.9068V21.998L50.0482 21.857H51.3218L51.4633 21.998V39.9068L51.3218 40.0478ZM45.1897 40.0478H43.3973L34.4822 30.7879V39.9068L34.3407 40.0478H33.0671L32.9256 39.9068V10.1059L33.0671 9.96484H34.3407L34.4822 10.1059V27.9206L41.369 21.904H41.4633H43.1142L43.2086 22.139L35.0482 29.2367L45.2841 39.9068L45.1897 40.1418V40.0478ZM50.7086 17.7676C49.8595 17.7676 49.435 17.3446 49.435 16.5455C49.435 15.7464 49.8595 15.3234 50.7086 15.3234C51.5576 15.3234 51.9822 15.7464 51.9822 16.5455C51.9822 17.3446 51.5576 17.7676 50.7086 17.7676Z" fill="black"/>
<path d="M29.5271 78.7339H29.1498C26.6498 78.7339 24.2913 78.0758 22.1686 76.7597C19.9988 75.4436 18.3007 73.7044 17.0743 71.5422C15.8479 69.38 15.1875 67.0767 15.1875 64.6325C15.1875 60.8251 16.6026 57.4408 19.3856 54.7145C22.1686 51.9413 25.5177 50.5781 29.3856 50.5781C33.2535 50.5781 34.4328 51.2832 36.7913 52.5993L36.8856 52.7873V54.1035L36.5554 54.2445C34.3384 52.7403 31.9328 51.9883 29.3856 51.9883C26.8384 51.9883 22.9233 53.2574 20.4705 55.7016C18.0177 58.1459 16.7441 61.1542 16.7441 64.6325C16.7441 68.1108 17.9705 71.0721 20.4705 73.5634C22.9233 76.0546 25.9422 77.2767 29.3856 77.2767C32.829 77.2767 34.3384 76.5247 36.5554 75.0205L36.8856 75.1615V76.4777L36.7913 76.6657C34.5743 78.0288 32.1686 78.6869 29.5743 78.6869L29.5271 78.7339Z" fill="black"/>
<path d="M51.8741 78.2157H42.2043L42.0156 78.0276V51.188L42.2043 51H51.8741L52.0628 51.188V52.2221L51.8741 52.4101H43.5722V66.6525H50.459L50.6477 66.8406V67.8747L50.459 68.0627H43.5722V76.8525H51.8741L52.0628 77.0406V78.0747L51.8741 78.2627V78.2157Z" fill="black"/>
<path d="M83.0685 78.3094H73.5402L73.3516 78.1214V51.2818L73.5402 51.0938H74.7195L74.9082 51.2818V76.8993H83.0685L83.2572 77.0873V78.1214L83.0685 78.3094Z" fill="black"/>
<path d="M68.2092 78.3094H58.6809L58.4922 78.1214V51.2818L58.6809 51.0938H59.8601L60.0488 51.2818V76.8993H68.2092L68.3978 77.0873V78.1214L68.2092 78.3094Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1262_239">
<rect width="100" height="102" fill="white"/>
</clipPath>
</defs>
</svg>

        )
    }

    return (
        <main className="max-h-[200dvh] w-full">
            <motion.div className="absolute w-full z-50 top-0 h-dvh left-0 flex">
                {/* <AnimatePresence>
                    {opacityY && (
                        <motion.div
                            initial={{ opacity: 1,
                                y: 0,
                                filter: 'blur(0px)', }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                transition: {
                                    duration: 1,
                                    type: 'spring',
                                    bounce: 0,
                                    delay: 0.4
                                },
                            }}
                            exit={{ opacity: 0, filter: 'blur(4px)' }}
                            className="flex justify-center items-center w-full h-dvh absolute z-[100]"
                        >
                            <Logo />
                        </motion.div>
                    )}
                </AnimatePresence> */}
                <motion.div animate={{ y: animateBack ? "0%" : "-100%", transition: { duration: 0.45, type: 'spring', bounce: 0.2 } }} className={`h-full w-1/3   bg-white flex justify-end`}>
                    <AnimatePresence>
                        {animateBack && (
                            <motion.div
                                initial={{ height: "0%" }}
                                animate={{
                                    height: "60%",
                                    transition: {
                                        duration: 0.6,
                                        type: 'spring',
                                        bounce: 0.2,
                                    },
                                }}
                                exit={{ height: "0%" }}
                                className="w-[1px] bg-black/80">
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                <motion.div animate={{ scaleY: animateBack ? 1 : 0, transition: { duration: 0.45, delay: 0.45, } }} className="h-full flex justify-center bg-white overflow-hidden items-center w-1/3">
                </motion.div>
                <motion.div animate={{ y: animateBack ? "0%" : "100%", transition: { duration: 0.45 } }} className={`h-full w-1/3 items-end -ml-[1px] rotate-180 bg-white flex justify-start`}>
                    <AnimatePresence>
                        {animateBack && (
                            <motion.div
                                initial={{ height: "0%" }}
                                animate={{
                                    height: "80%",
                                    transition: {
                                        duration: 0.6,
                                        type: 'spring',
                                        bounce: 0.2,
                                    },
                                }}
                                exit={{ height: "0%" }}
                                className="w-[1px]  bg-black/80">
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
            <motion.img
                initial={{opacity: 0}}
                animate={{ opacity: 1, 
                    transition:{
                    duration: 0.2,
                    delay: 0.8
                }}}
                src="/BG_Lander_New.png"
                alt="Landerbackground"
                className="z-[-1] absolute w-full h-svh object-cover sm:object-center md:object-[center_top] lg:object-cover" />
        </main>
    )
}

export default Hero

//outer = 0.1s
// inner = dely 0.1, duration: 0.05
// opacity = delay: 0.2s, duration: 0.1