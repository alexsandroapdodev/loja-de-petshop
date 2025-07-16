"use client";
import { useEffect } from "react";
import AOS from "aos"; // Corrigido: letra maiúscula
import "aos/dist/aos.css";

export function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return null;
}
