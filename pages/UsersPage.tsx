import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Administrador' | 'Editor' | 'Visualizador';
  status: 'Ativo' | 'Inativo';
}

const users: User[] = [
  { id: '1', name: 'João Silva', email: 'joao.silva@example.com', role: 'Administrador', status: 'Ativo' },
  { id: '2', name: 'Maria Souza', email: 'maria.souza@example.com', role: 'Editor', status: 'Ativo' },
  { id: '3', name: 'Pedro Santos', email: 'pedro.santos@example.com', role: 'Visualizador', status: 'Inativo' },
  { id: '4', name: 'Ana Oliveira', email: 'ana.oliveira@example.com', role: 'Editor', status: 'Ativo' },
  { id: '5', name: 'Carlos Pereira', email: 'carlos.pereira@example.com', role: 'Visualizador', status: 'Ativo' },
  { id: '6', name: 'Sofia Mendes', email: 'sofia.mendes@example.com', role: 'Administrador', status: 'Ativo' },
  { id: '7', name: 'Lucas Rocha', email: 'lucas.rocha@example.com', role: 'Visualizador', status: 'Inativo' },
];

const UsersPage: React.FC = () => {
  const handleAddUser = () => {
    toast.info('Funcionalidade de adicionar usuário em desenvolvimento!', {
      style: {
        background: '#1f2937', // bg-gray-800
        color: '#e5e7eb', // text-gray-100
      },
      iconTheme: {
        primary: '#fcd34d', // yellow-300
        secondary: '#1f2937',
      },
    });
  };

  const handleEditUser = (user: User) => {
    toast(`Editando usuário: ${user.name}`, {
      icon: '✍️',
      style: {
        background: '#1f2937',
        color: '#e5e7eb',
      },
    });
  };

  const handleDeleteUser = (user: User) => {
    toast.error(`Usuário ${user.name} excluído! (Simulado)`, {
      style: {
        background: '#1f2937',
        color: '#e5e7eb',
      },
      iconTheme: {
        primary: '#ef4444', // red-500
        secondary: '#e5e7eb',
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-4xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
          Gerenciamento de Usuários
        </h2>
        <motion.button
          onClick={handleAddUser}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <UserPlus size={20} />
          Adicionar Usuário
        </motion.button>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar usuários..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Cargo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={twMerge(
                        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold",
                        user.status === 'Ativo' ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                      )}
                    >
                      {user.status === 'Ativo' ? <CheckCircle size={14} /> : <XCircle size={14} />}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-3">
                      <motion.button
                        onClick={() => handleEditUser(user)}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors p-2 rounded-full hover:bg-gray-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Edit size={18} />
                      </motion.button>
                      <motion.button
                        onClick={() => handleDeleteUser(user)}
                        className="text-red-400 hover:text-red-300 transition-colors p-2 rounded-full hover:bg-gray-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default UsersPage;