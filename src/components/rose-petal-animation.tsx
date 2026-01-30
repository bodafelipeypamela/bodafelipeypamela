"use client";

import React, { useEffect, useState } from 'react';

// Define the shape of a petal
interface Petal {
  id: number;
  style: React.CSSProperties;
}

// Function to create a new petal
const createPetal = (id: number): Petal => {
  const size = Math.random() * 15 + 10; // 10px to 25px
  return {
    id,
    style: {
      position: 'absolute',
      top: '-30px',
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size * 0.66}px`,
      backgroundColor: `hsl(340, 100%, ${Math.random() * 15 + 75}%)`, // Shades of pink
      borderRadius: '150px 0',
      opacity: Math.random() * 0.5 + 0.4, // 0.4 to 0.9
      animationName: 'fall',
      animationDuration: `${Math.random() * 8 + 7}s`, // 7s to 15s
      animationDelay: `${Math.random() * 10}s`,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      transform: `rotate(${Math.random() * 360}deg)`,
      willChange: 'transform, opacity, top',
    },
  };
};


export function RosePetalAnimation() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalCount = 30; // Number of petals
    const newPetals = Array.from({ length: petalCount }, (_, i) => createPetal(i));
    setPetals(newPetals);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-hidden" aria-hidden="true">
      {petals.map(petal => (
        <div key={petal.id} style={petal.style} />
      ))}
    </div>
  );
}
