import { useEffect, useState } from "react";

interface AnimatedTextProps {
  words: string[];
  className?: string;
  speed?: number;
  onWordChange?: (index: number) => void;
}

const AnimatedText = ({ words, className = "", speed = 1200, onWordChange }: AnimatedTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), speed);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          setTypingSpeed(40 + Math.random() * 40);
        }, typingSpeed);
      }
    } else if (displayText === "") {
      setIsDeleting(false);
      const nextIndex = (currentWordIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);
      onWordChange?.(nextIndex);
      setTypingSpeed(80);
    } else {
      timer = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
        setTypingSpeed(25 + Math.random() * 30);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, words, speed, typingSpeed]);

  return (
    <span className={`${className} text-blue-500 font-semibold`}>
      {displayText}
    </span>
  );
};

export default AnimatedText;
