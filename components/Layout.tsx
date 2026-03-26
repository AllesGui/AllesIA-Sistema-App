import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useAppStore } from '../lib/store';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Layout: React.FC = () => {
  const { isSidebarOpen } = useAppStore();

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100">
      <Sidebar />
      
      <div 
        className={twMerge(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          isSidebarOpen ? "ml-64" : "ml-20" // Ajuste conforme a largura da sidebar
        )}
      >
        <Navbar />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <Outlet /> {/* Renderiza o conteúdo da rota aninhada */}
        </main>
      </div>
    </div>
  );
};

export default Layout;