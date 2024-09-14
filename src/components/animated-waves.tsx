import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnimatedOceanWaveGraphCard() {
  return (
    <div className="relative w-full h-[300px]  overflow-hidden">
      <svg
        className="absolute  w-[200%] h-full"
        preserveAspectRatio="none"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[0.2, 0.3, 0.4].map((opacity, index) => (
          <path
            key={index}
            d="M0 50 C40 30, 60 70, 100 50 C140 30, 160 70, 200 50 V100 H0 Z"
            fill={`hsl(var(--primary) / ${opacity})`}
            className={`animate-wave-${index + 1}`}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-100 0"
              dur={`${20 + index * 4}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-1/2" />
    </div>
  );
}
