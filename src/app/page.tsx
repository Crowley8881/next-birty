'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Birthday Card Component - Next.js Version
 * Color Palette:
 * - Primary (Red): #C41E3A
 * - Secondary (Purple/Pink): #9B4D96
 * - Dark Background: #1B1B3A
 */

interface CardPage {
  id: number;
  title: string;
  content: string;
  emoji: string;
  bgGradient: string;
}

const cardPages: CardPage[] = [
  {
    id: 1,
    title: 'Parabéns!',
    content: 'Que seu dia seja tão especial quanto você é para todos nós!',
    emoji: '🎂',
    bgGradient: 'linear-gradient(135deg, #C41E3A 0%, #A01830 100%)',
  },
  {
    id: 2,
    title: 'Diversão',
    content: 'Que este ano traga muitas risadas, aventuras e momentos inesquecíveis!',
    emoji: '🎉',
    bgGradient: 'linear-gradient(135deg, #9B4D96 0%, #7A3A75 100%)',
  },
  {
    id: 3,
    title: 'Sucesso',
    content: 'Que todos os seus sonhos se tornem realidade e seus objetivos sejam alcançados!',
    emoji: '⭐',
    bgGradient: 'linear-gradient(135deg, #1B1B3A 0%, #0F0F1E 100%)',
  },
  {
    id: 4,
    title: 'Amor',
    content: 'Cercado de pessoas que te amam e de momentos que valem a pena viver!',
    emoji: '💝',
    bgGradient: 'linear-gradient(135deg, #C41E3A 0%, #A01830 100%)',
  },
];

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < cardPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentPage(0);
  };

  const currentCardPage = cardPages[currentPage];

  return (
    <div 
      className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, #1B1B3A 0%, #2D1B3A 50%, #1B1B3A 100%)`
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: '#C41E3A' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: '#9B4D96' }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-36 h-36 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#1B1B3A' }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 
              className="text-5xl md:text-6xl font-bold mb-2"
              style={{
                backgroundImage: `linear-gradient(to right, #C41E3A, #9B4D96)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Feliz Aniversário! 🎉
            </h1>
            <p className="text-lg font-light" style={{ color: '#9B4D96' }}>
              Abra o cartão para descobrir uma mensagem especial
            </p>
          </motion.div>
        )}

        {/* Birthday Card Container */}
        <div className="w-full flex items-center justify-center" style={{ perspective: '1200px' }}>
          <motion.div
            className="relative w-full max-w-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Closed State - Front Cover */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto">
                  {/* Card Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20 rounded-3xl" />

                  {/* Front Cover */}
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
                    className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden border-4 flex flex-col items-center justify-center p-8"
                    style={{
                      borderColor: '#9B4D96',
                      background: `linear-gradient(135deg, rgba(196, 30, 58, 0.1), rgba(155, 77, 150, 0.1), rgba(27, 27, 58, 0.1))`
                    }}
                  >
                    {/* Decorative corner elements */}
                    <div 
                      className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 rounded-tl-2xl" 
                      style={{ borderColor: '#C41E3A' }}
                    />
                    <div 
                      className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 rounded-br-2xl"
                      style={{ borderColor: '#1B1B3A' }}
                    />

                    {/* Center content */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-center"
                    >
                      <motion.div
                        className="text-7xl mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🎁
                      </motion.div>
                      <h2 
                        className="text-4xl font-bold mb-3"
                        style={{
                          backgroundImage: `linear-gradient(to right, #C41E3A, #9B4D96)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        Feliz Aniversário!
                      </h2>
                      <p className="text-lg font-light" style={{ color: '#9B4D96' }}>
                        Clique para abrir a surpresa ✨
                      </p>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                      className="absolute top-12 right-12 text-3xl"
                      animate={{ rotate: 360, y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      🎉
                    </motion.div>
                    <motion.div
                      className="absolute bottom-12 left-12 text-3xl"
                      animate={{ rotate: -360, y: [0, 20, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      🌸
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Open State - Book Pages */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {/* Book Container */}
                <div className="relative w-full max-w-4xl mx-auto">
                  {/* Left Page (Back) */}
                  <motion.div
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute left-0 top-0 w-1/2 h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div 
                      className="relative w-full aspect-[2/3] rounded-l-3xl shadow-xl border-4 border-white flex flex-col items-center justify-center p-6 overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, #2D2D4A 0%, #1B1B3A 100%)' }}
                    >
                      <div className="absolute inset-0 opacity-5" />
                      <div className="relative z-10 text-center">
                        <p className="text-sm mb-2" style={{ color: '#9B4D96' }}>Página {currentPage + 1} de {cardPages.length}</p>
                        <p className="italic" style={{ color: '#9B4D96' }}>← Deslize para ler →</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Page (Front) */}
                  <motion.div
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative w-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div 
                      className="relative w-full aspect-[2/3] rounded-r-3xl shadow-xl border-4 border-white flex flex-col items-center justify-center p-8 overflow-hidden"
                      style={{ background: currentCardPage.bgGradient }}
                    >
                      {/* Decorative background pattern */}
                      <div className="absolute inset-0 opacity-10" />

                      {/* Content */}
                      <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 text-center flex flex-col items-center justify-center h-full gap-6"
                      >
                        <motion.div
                          className="text-6xl"
                          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {currentCardPage.emoji}
                        </motion.div>

                        <h3 className="text-4xl font-bold text-white drop-shadow-lg">
                          {currentCardPage.title}
                        </h3>

                        <p className="text-lg text-white/95 font-light leading-relaxed max-w-sm drop-shadow-md">
                          {currentCardPage.content}
                        </p>
                      </motion.div>

                      {/* Decorative corners */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
                    </div>
                  </motion.div>
                </div>

                {/* Navigation Controls */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center justify-center gap-6 mt-8"
                >
                  {/* Previous Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="px-6 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    style={{
                      background: `linear-gradient(to right, #C41E3A, #A01830)`
                    }}
                  >
                    ← Anterior
                  </motion.button>

                  {/* Page Indicator */}
                  <div className="flex gap-2">
                    {cardPages.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`h-3 rounded-full transition-all ${
                          index === currentPage ? 'w-8' : 'w-3'
                        }`}
                        style={{
                          background: index === currentPage 
                            ? `linear-gradient(to right, #C41E3A, #9B4D96)`
                            : '#9B4D96'
                        }}
                        animate={{ scale: index === currentPage ? 1.2 : 1 }}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextPage}
                    disabled={currentPage === cardPages.length - 1}
                    className="px-6 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    style={{
                      background: `linear-gradient(to right, #9B4D96, #7A3A75)`
                    }}
                  >
                    Próxima →
                  </motion.button>
                </motion.div>

                {/* Close Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex justify-center mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="px-8 py-3 bg-white font-semibold rounded-full shadow-lg hover:shadow-xl border-2 transition-all"
                    style={{
                      borderColor: '#C41E3A',
                      color: '#C41E3A'
                    }}
                  >
                    Fechar Cartão
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Hint text */}
        {!isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-sm mt-8 text-center"
            style={{ color: '#9B4D96' }}
          >
            Clique ou passe o mouse para abrir o cartão ✨
          </motion.p>
        )}
      </div>
    </div>
  );
}
