// app/page.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ConfettiBirthdayCard() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animation: `fall ${2 + Math.random() * 2}s linear forwards`,
              }}
            >
              {['🎉', '🎈', '🎁', '⭐', '🎊'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-16 max-w-2xl text-center relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4">Feliz Aniversário!</h1>
        <p className="text-2xl text-white/90 mb-8">
          Esperamos que seja um dia especial e inesquecível!
        </p>
        <button
          onClick={() => setShowConfetti(!showConfetti)}
          className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:scale-110 transition"
        >
          Celebrar! 🎉
        </button>
      </div>
    </div>
  );
}