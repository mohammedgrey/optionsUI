import React from "react";
import useAppearOnScroll from "../hooks/AppearOnScroll";

export default function AppearOnScroll({ children }: any) {
  const { appearOnScrollRef, visible } = useAppearOnScroll();
  return (
    <div
      ref={appearOnScrollRef}
      style={{
        opacity: visible ? "1" : "0",
        transform: visible ? "scale(1)" : "scale(0)",
        transition: "opacity 500ms ease-in, transform 500ms linear",
        transformOrigin: "left",
      }}
    >
      {children}
    </div>
  );
}
