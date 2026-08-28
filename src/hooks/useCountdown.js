// src/hooks/useCountdown.js

import { useEffect, useState } from "react";

export default function useCountdown(target) {
  const [left, setLeft] = useState(0);
  
  useEffect(() => {
    const update = () => {
      setLeft(Math.max(0,target.getTime() - Date.now()));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);
  const totalSeconds = Math.floor(left / 1000);
  
  return {
    days: Math.floor(totalSeconds/86400),
    hours: Math.floor((totalSeconds%86400)/3600),
    mins: Math.floor((totalSeconds%3600)/60),
    secs: Math.floor(totalSeconds%60),
  };
}