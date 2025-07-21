"use client";

import { useTheme } from "next-themes";
import Particles from "@/components/Particles";

export default function ParticlesWrapper() {
  const { resolvedTheme } = useTheme();

  const particleColors =
    resolvedTheme === "dark" ? ["#ffffff"] : ["#000000"];

  return (
    <Particles
      key={resolvedTheme} // 👈 this triggers re-mount on theme change
      particleColors={particleColors}
      particleCount={200}
      speed={0.1}
      moveParticlesOnHover={true}
      particleHoverFactor={1}
    />
  );
}
