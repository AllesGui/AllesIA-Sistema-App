import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Search } from 'lucide-react';
import { useAppStore } from '../lib/store';

const Navbar: React.FC = () => {
  const { isSidebarOpen } = useAppStore();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.3 }}
      className="sticky top-0 z-40 p-4 md:p-6 bg-gray-900/50 backdrop-blur-xl border-b border-gray-800 flex items-center justify-between"
    >
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
        />
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          className="relative p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-900" />
        </motion.button>

        <motion.div
          className="flex items-center gap-3 cursor-pointer p-1 pr-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cfce7bd4?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar do usuário"
            className="w-9 h-9 rounded-full object-cover border-2 border-violet-500"
            loading="lazy"
          />
          <span className="text-sm font-medium text-gray-200 hidden md:block">Olá, Alex!</span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;