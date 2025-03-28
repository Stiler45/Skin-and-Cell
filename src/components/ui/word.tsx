import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface ParagraphProps {
  paragraph: string;
}

interface WordProps {
  children: string;
  progress: any;
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

  const words = paragraph.split(' ');

  return (
    <p ref={container} className="flex flex-wrap text-[3.875rem] text-center max-[1300px]:text-[3rem] max-[750px]:text-[2rem]  leading-[1] w-[1350px] text-[#000]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
      })}
    </p>
  );
};

export default Paragraph;
