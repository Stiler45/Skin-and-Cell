 {/* Space Top */}
 <div className="w-full h-[64px]" />
 {/* Space Top */}

 {/* Textbox */}
 <div className="flex justify-center items-center">

     <motion.div
         className="flex space-x-[18px]"
         initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
         animate={{
             opacity: 1,
             y: 0,
             filter: 'blur(0px)',
             transition: {
                 duration: 1.2,
                 type: 'spring',
                 bounce: 0.3,
             },
         }}>
         <TextLander />
     </motion.div>

 </div>
 {/* Textbox */}
 {/* Spacer Text - Image */}
 <div className="h-[40px]" />
 {/* Spacer Text - Image */}
 {/* Image Container */}
 <div className="flex justify-center items-center h-[100%-] bg-red-400">
     
 </div>
 {/* Image Container */}
 {/* Spacer Bottom */}
 <div className="w-full h-[40px]"/>
 {/* Spacer Bottom */}
 {/* Bottom Text */}
     <div>
         <BottomText/>
     </div>
 {/* Bottom Text */}

 {/* Spacer Bottom */}
     <div className="w-full h-[48px]"/>
 {/* Spacer Bottom */}