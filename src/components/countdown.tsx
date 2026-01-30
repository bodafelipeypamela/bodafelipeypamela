"use client";

import { useState, useEffect } from "react";

type TimeLeft = {
  días: number;
  horas: number;
  minutos: number;
  segundos: number;
};

const calculateTimeLeft = (): TimeLeft | {} => {
  const difference = +new Date("2026-02-07T13:30:00") - +new Date();
  let timeLeft: TimeLeft | {} = {};

  if (difference > 0) {
    timeLeft = {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>({}); // Initially empty

  useEffect(() => {
    // Set the initial time on the client
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Run only once on mount

  const timerComponents = Object.keys(timeLeft).length > 0
    ? Object.entries(timeLeft).map(([interval, value]) => {
        return (
          <div key={interval} className="flex flex-col items-center p-2 rounded-lg min-w-[70px] md:min-w-[100px]">
            <span className="font-headline text-5xl md:text-7xl text-foreground/80">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-sm md:text-base uppercase tracking-widest text-foreground/60">
              {interval}
            </span>
          </div>
        );
      })
    : [];

  return (
    <div className="flex justify-center gap-4 md:gap-8 my-12">
      {timerComponents.length ? timerComponents : <span className="font-headline text-4xl text-foreground/80">¡El gran día ha llegado!</span>}
    </div>
  );
}
