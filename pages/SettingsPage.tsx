import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const SettingsPage: React.FC = () => {
  const handleSaveSettings = () => {
    toast.success('Configurações salvas com sucesso!', {
      style: {
        background: '#1f2937', // bg-gray-800
        color: '#e5e7eb', // text-gray-100
      },
      iconTheme: {
        primary: '#8b5cf6', // violet-500
        secondary: '#e5e7eb',
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 p-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10"
    >
      <h2 className="text-4xl font-extrabold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
        Configurações do Sistema
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Seção de Informações Gerais */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-100 mb-3">Geral</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="appName" className="block text-sm font-medium text-gray-300 mb-1">
                Nome da Aplicação
              </label>
              <input
                type="text"
                id="appName"
                defaultValue="System.IA Dashboard"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-1">
                Idioma
              </label>
              <select
                id="language"
                defaultValue="pt-BR"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors"
              >
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Seção de Notificações */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-100 mb-3">Notificações</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700">
              <label htmlFor="emailNotifications" className="text-gray-200 cursor-pointer">
                Notificações por Email
              </label>
              <input
                type="checkbox"
                id="emailNotifications"
                defaultChecked
                className="h-5 w-5 rounded form-checkbox text-violet-600 bg-gray-700 border-gray-600 focus:ring-violet-500"
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700">
              <label htmlFor="pushNotifications" className="text-gray-200 cursor-pointer">
                Notificações Push
              </label>
              <input
                type="checkbox"
                id="pushNotifications"
                defaultChecked={false}
                className="h-5 w-5 rounded form-checkbox text-violet-600 bg-gray-700 border-gray-600 focus:ring-violet-500"
              />
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={handleSaveSettings}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Salvar Configurações
      </motion.button>
    </motion.div>
  );
};

export default SettingsPage;