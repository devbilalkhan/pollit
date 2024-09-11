import React from "react";

export default function Logo() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="95" fill="#3c46f1" />{" "}
      {/* Hot pink background */}
      <path
        d="M60 80 L100 120 L140 80"
        stroke="#7FFA8A" /* Cyan chevrons */
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 100 L100 140 L140 100"
        stroke="#7FFA8A" /* Cyan chevrons */
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lime green circle */}
    </svg>
  );
}
