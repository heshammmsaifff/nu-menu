"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaTrophy, FaClock } from "react-icons/fa";

export default function CatchTheFood() {
  const containerRef = useRef(null);
  const basketRef = useRef(null);
  const lastTimeRef = useRef(null);
  const foodIntervalRef = useRef(null);
  const gameStateRef = useRef("loading");

  const foods = ["🍔", "🍕", "🍟", "🌭", "🍩"];

  const [gameState, setGameState] = useState("loading");
  // loading | ready | playing | gameover

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  // =============================
  // Load High Score
  // =============================
  useEffect(() => {
    const saved = localStorage.getItem("catch-food-highscore");
    if (saved) setHighScore(Number(saved));

    const t = setTimeout(() => {
      setGameState("ready");
      gameStateRef.current = "ready";
    }, 1500);

    return () => clearTimeout(t);
  }, []);

  // =============================
  // Basket movement (mouse + touch)
  // =============================
  useEffect(() => {
    const move = (e) => {
      if (!basketRef.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      basketRef.current.style.left = x - 30 + "px";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
    };
  }, []);

  useEffect(() => {
    if (gameState === "ready") {
      const saved = localStorage.getItem("catch-food-highscore");
      if (saved) setHighScore(Number(saved));
    }
  }, [gameState]);

  // =============================
  // Start Game
  // =============================
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameState("playing");
    gameStateRef.current = "playing";

    lastTimeRef.current = performance.now();
    foodIntervalRef.current = setInterval(dropFood, 800);
    requestAnimationFrame(gameLoop);
  };

  // =============================
  // Game Loop (Real Time)
  // =============================
  const gameLoop = (now) => {
    if (gameStateRef.current !== "playing") return;

    const delta = now - lastTimeRef.current;
    lastTimeRef.current = now;

    setTimeLeft((prev) => {
      const next = Math.max(0, prev - delta / 1000);
      if (next <= 0) endGame();
      return next;
    });

    requestAnimationFrame(gameLoop);
  };

  // =============================
  // Drop Food
  // =============================
  const dropFood = () => {
    if (!containerRef.current || !basketRef.current) return;

    const food = document.createElement("div");
    food.innerText = foods[Math.floor(Math.random() * foods.length)];
    food.className = "absolute text-4xl select-none pointer-events-none";

    food.style.left =
      Math.random() * (containerRef.current.offsetWidth - 40) + "px";
    food.style.top = "-40px";

    containerRef.current.appendChild(food);

    let y = -40;
    const speed = 4 + (30 - timeLeft) * 0.25;

    const fall = setInterval(() => {
      if (!basketRef.current) return;

      y += speed;
      food.style.top = y + "px";

      const foodRect = food.getBoundingClientRect();
      const basketRect = basketRef.current.getBoundingClientRect();

      if (
        foodRect.bottom >= basketRect.top &&
        foodRect.left >= basketRect.left &&
        foodRect.right <= basketRect.right
      ) {
        setScore((s) => s + 1);
        food.remove();
        clearInterval(fall);
      }

      if (y > containerRef.current.offsetHeight) {
        food.remove();
        clearInterval(fall);
      }
    }, 16);
  };

  // =============================
  // End Game
  // =============================
  const endGame = () => {
    clearInterval(foodIntervalRef.current);
    setGameState("gameover");
    gameStateRef.current = "gameover";

    if (score > highScore) {
      localStorage.setItem("catch-food-highscore", score);
      setHighScore(score);
    }
  };

  // =============================
  // UI States
  // =============================
  if (gameState === "loading") {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-black text-xl">
        🍔 Loading Game...
      </div>
    );
  }

  if (gameState === "ready") {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 text-black">
        <h1 className="text-3xl font-bold">Catch The Food 🍔</h1>

        <button
          onClick={startGame}
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          <FaPlay /> Start Game
        </button>

        {/* <div className="flex items-center gap-2 opacity-80">
          <FaTrophy /> High Score: {highScore}
        </div> */}
      </div>
    );
  }

  if (gameState === "gameover") {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 text-black">
        <h2 className="text-2xl font-bold">⏱️ Game Over</h2>
        <p>Score: {score}</p>

        <button
          onClick={() => {
            setGameState("ready");
            gameStateRef.current = "ready";
          }}
          className="bg-white px-6 py-2 rounded-lg font-semibold shadow"
        >
          Play Again
        </button>
      </div>
    );
  }

  // =============================
  // Playing UI
  // =============================
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-[95%] max-w-[420px] h-[70vh]
                   border-2 border-black/20 rounded-xl
                   overflow-hidden touch-none"
      >
        {/* HUD */}
        <div className="absolute top-4 left-4 text-black flex items-center gap-2">
          <FaTrophy /> {score}
        </div>

        <div className="absolute top-4 right-4 text-black flex items-center gap-2">
          <FaClock /> {Math.ceil(timeLeft)}
        </div>

        {/* Basket */}
        <div
          ref={basketRef}
          className="absolute bottom-4 text-5xl select-none"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          🧺
        </div>
      </div>
    </div>
  );
}
