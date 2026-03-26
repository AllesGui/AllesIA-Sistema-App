import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sidebarItems } from '../lib/config';
import { useAppStore } from '../lib/store';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useAppStore();

  const sidebarVariants = {
    open: { width: '16rem', transition: { duration: 0.3 } }, // 256px
    closed: { width: '5rem', transition: { duration: 0.3 } }, // 80px
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  return (
    <motion.aside
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="fixed top-0 left-0 h-screen bg-gray-900 shadow-xl border-r border-gray-800 flex flex-col z-50"
    >
      <div className="flex items-center justify-between p-4 h-20 border-b border-gray-800">
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 tracking-tight"
            >
              System.IA
            </motion.h1>
          )}
        </AnimatePresence>
        <motion.button
          onClick={toggleSidebar}
          className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </motion.button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => (
          <Link to={item.path} key={item.id}>
            <motion.div
              className={twMerge(
                "flex items-center gap-4 p-3 rounded-xl transition-all duration-200",
                "hover:bg-gray-800 hover:text-gray-50",
                location.pathname === item.path
                  ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30"
                  : "text-gray-400"
              )}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon size={20} />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="whitespace-nowrap font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800 text-sm text-gray-500">
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              © {new Date().getFullYear()} AllesIA.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
};

export default Sidebar;