"use client";
import { useState, useEffect } from "react";
import Squares from "./Squares";

export default function SquaresWrapper(props: any) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <Squares {...props} /> : null;
}
