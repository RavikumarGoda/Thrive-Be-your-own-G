
import React, { useState, useEffect } from 'react';

const phrases = [
  "Make Moves",
  "Stay Different", 
  "Be Your Own G!"
];

export const TypingAnimation = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isTyping, currentPhraseIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[80px]">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary">
        {currentText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
          |
        </span>
      </h1>
    </div>
  );
};
