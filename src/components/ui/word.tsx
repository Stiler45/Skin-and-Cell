import { motion, useScroll, useTransform, MotionValue, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

interface ParagraphProps {
  paragraph: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.7', 'start 0.25'],
  });
  const smoothScrollYPrgrs = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  })

  const words = paragraph.split(' ');

  return (
    <p ref={container} className="flex flex-wrap text-[3.875rem] text-center max-[1450px]:text-[3rem] max-[1000px]:text-center max-[750px]:text-[1.5rem] leading-[1] w-[1350px] max-[750px]:w-[85%] max-[1000px]:w-[650px] max-[1450px]:w-[900px] text-[#000000]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} progress={smoothScrollYPrgrs} range={[start, end]}>{word}</Word>;
      })}
    </p>
  );
};

export default Paragraph;