import { motion } from 'motion/react';

interface CurvedTextProps {
  text: string;
  radius?: number;
  className?: string;
}

export function CurvedText({ text, radius = 200, className }: CurvedTextProps) {
  const letters = text.split('');
  const anglePerChar = 360 / letters.length; 

  return (
    <div 
      className={`relative flex justify-center items-center ${className}`} 
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
        {letters.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 font-display font-bold uppercase"
            style={{
              position: 'absolute',
              height: '1em',
              width: '1em',
              textAlign: 'center',
              lineHeight: '1em',
              marginLeft: '-0.5em',
              marginTop: '-0.5em',
              transform: `rotate(${i * anglePerChar}deg) translateY(-${radius}px)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee({ text, className }: { text: string; className?: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        className={`flex ${className}`}
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
      </motion.div>
    </div>
  );
}
