"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-main-gradient min-h-screen flex items-center justify-center overflow-hidden">
      {!showMain && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1e1309] via-[#3a2413] to-[#0a0502]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex items-center justify-center">
            {/* rotating rings */}
            <motion.div
              className="absolute h-56 w-56 rounded-full border border-[#d9b782]/30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <motion.div
              className="absolute h-40 w-40 rounded-full border-t-2 border-[#f7e6c3]"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />

            {/* logo reveal */}
            <motion.div
              className="relative w-24 h-24 overflow-hidden rounded-2xl bg-gradient-to-br from-[#3b2617] via-[#6b4a2b] to-[#c29b6f] shadow-[0_18px_45px_rgba(10,5,2,0.85)]"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain p-3"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}

      {showMain && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          {/* <Image
            src="/logo.png"
            alt="nu"
            width={362}
            height={206}
            priority
          /> */}
          <div className="flex flex-col items-center gap-2 mt-10">
            <Link href="/drinks">
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hover:cursor-pointer nu-button-primary"
              >
                <span className="text-[30px] font-bold tracking-[0.18em] uppercase">
                  Open Menu
                </span>
              </motion.button>
            </Link>
            <p
              className="text-lg text-center text-[rgba(248,240,227,0.9)] mt-10"
              dir="rtl"
            >
              اكتشف قائمة NU المختارة بعناية من القهوة والمشروبات والحلويات.
            </p>
          </div>

          <Link href="/game">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hover:cursor-pointer nu-button-primary"
            >
              <span className="text-[30px] font-bold tracking-[0.18em] uppercase">
                Game
              </span>
            </motion.button>
          </Link>
        </motion.div>
      )}
      <footer className="absolute bottom-4 w-full text-center text-xs tracking-wide text-[rgba(248,240,227,0.55)]">
        Built and designed by{" "}
        <span className="font-semibold text-[#e2ba5b] tracking-wider">
          Hesham Saif
        </span>
      </footer>
    </main>
  );
}
