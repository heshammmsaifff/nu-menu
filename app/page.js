"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Copy,
  MessageCircle,
  PhoneCall,
  X,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "01067674340";

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsModalOpen(false);
    }, 1500);
  };

  return (
    <main className="bg-main-gradient min-h-screen flex items-center justify-center overflow-hidden relative font-sans">
      {/* ===== IMPROVED SPLASH SCREEN ===== */}
      <AnimatePresence>
        {!showMain && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0502]"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3a2413] via-transparent to-transparent opacity-40" />

            <div className="relative flex items-center justify-center">
              {/* Layered Rotating Rings */}
              <motion.div
                className="absolute h-64 w-64 rounded-full border-[0.5px] border-[#d9b782]/20"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              />
              <motion.div
                className="absolute h-52 w-52 rounded-full border-t border-b border-[#f7e6c3]/40"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
              <motion.div
                className="absolute h-44 w-44 rounded-full border-r border-[#e2ba5b]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />

              {/* Logo Reveal with Shadow Pulse */}
              <motion.div
                className="relative w-28 h-28 overflow-hidden rounded-3xl bg-gradient-to-br from-[#3b2617] to-[#1a0f08] flex items-center justify-center shadow-[0_0_50px_rgba(226,186,91,0.2)] border border-[#d9b782]/20"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className="w-full h-full relative"
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{ delay: 0.5, duration: 1.2, ease: "anticipate" }}
                >
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== MAIN CONTENT ===== */}
      {showMain && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-10 text-center z-10 px-6"
        >
          {/* MENU SECTION */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/drinks">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="nu-button-primary group relative overflow-hidden"
              >
                <span className="relative z-10 text-[26px] md:text-[30px] font-bold tracking-[0.18em] uppercase">
                  Open Menu
                </span>
              </motion.button>
            </Link>

            <p
              className="max-w-md text-base md:text-lg leading-relaxed text-black/80 font-medium"
              dir="rtl"
            >
              اكتشف قائمة NU المختارة بعناية من القهوة والمشروبات والحلويات،
              تجربة بسيطة بطعم فاخر.
            </p>
          </div>

          {/* GAME SECTION */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/game">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="nu-button-primary bg-opacity-80"
              >
                <span className="text-[20px] md:text-[24px] font-semibold tracking-[0.14em] uppercase">
                  Play a Game
                </span>
              </motion.button>
            </Link>

            <p
              className="max-w-sm text-sm md:text-base text-white/90 drop-shadow-md"
              dir="rtl"
            >
              لعبة خفيفة وسريعة 🍔 امسك أكبر عدد من الأكلات خلال 30 ثانية
            </p>
          </div>

          {/* CONTACT BUTTON */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 bg-[#1e1309] text-white backdrop-blur-md border border-[#e2ba5b]/40 px-8 py-3 rounded-2xl hover:bg-[#e2ba5b] hover:text-[#1e1309] transition-all duration-300"
          >
            <Phone size={20} className="group-hover:animate-pulse" />
            <span className="text-lg font-bold tracking-[0.1em]">
              {phoneNumber}
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* ===== CONTACT MODAL ===== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-[320px] bg-gradient-to-b from-[#2a1b10] to-[#160d07] border border-[#d9b782]/30 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-[#d9b782]/50 hover:text-[#e2ba5b]"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#e2ba5b]/10 rounded-full flex items-center justify-center mb-4 border border-[#e2ba5b]/20">
                  <PhoneCall className="text-[#e2ba5b]" size={28} />
                </div>
                <h3 className="text-[#f7e6c3] text-2xl font-bold mb-8 tracking-tighter">
                  {phoneNumber}
                </h3>

                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-[#e2ba5b]/20 border border-white/10 transition-all group"
                  >
                    <span className="text-white font-medium">
                      {copied ? "تم النسخ!" : "نسخ الرقم"}
                    </span>
                    {copied ? (
                      <CheckCircle2 size={20} className="text-green-500" />
                    ) : (
                      <Copy size={18} className="text-[#e2ba5b]" />
                    )}
                  </button>

                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-[#e2ba5b]/20 border border-white/10 transition-all"
                  >
                    <span className="text-white font-medium">اتصال هاتفي</span>
                    <PhoneCall size={18} className="text-[#e2ba5b]" />
                  </a>

                  <a
                    href={`https://wa.me/201067674340`}
                    target="_blank"
                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-[#25D366]/10 border border-white/10 transition-all"
                  >
                    <span className="text-white font-medium">واتساب</span>
                    <MessageCircle size={18} className="text-[#25D366]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="absolute bottom-4 w-full text-center text-xs tracking-wide text-[rgba(248,240,227,0.4)]">
        Built and designed by{" "}
        <span className="font-semibold text-[#e2ba5b] tracking-wider opacity-80">
          Hesham Saif
        </span>
      </footer>
    </main>
  );
}
