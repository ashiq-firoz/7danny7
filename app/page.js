"use client";

import Hero from "./components/Hero";
import Trending from "./components/Trending";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";

export default function Home() {
  return (
    <>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <Hero/>
    </motion.div>
    </AuroraBackground> 
    <Trending/>
    </>
  );
}