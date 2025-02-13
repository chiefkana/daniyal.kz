import { useState, useEffect } from "react";

export default function CartIcon() {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsAnimating(true);
      setCount(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 300);
    };

    document.addEventListener("add-to-cart", handler);
    return () => document.removeEventListener("add-to-cart", handler);
  }, []);

  return (
    <div className={`relative ${isAnimating ? "animate-bump" : ""}`}>
      <svg
        className="h-6 w-6 text-primary-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-xs text-background-50">
          {count}
        </span>
      )}
    </div>
  );
}
