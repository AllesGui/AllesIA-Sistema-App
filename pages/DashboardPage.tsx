import React from 'react';
import { motion } from 'framer-motion';
import DashboardCard from '../components/DashboardCard';
import ChartCard from '../components/ChartCard';
import { dashboardCardsData, salesChartData } from '../lib/config';

const DashboardPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-4xl font-extrabold text-white tracking-tight mb-6">
        Visão Geral do Dashboard
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCardsData.map((card) => (
          <motion.div key={card.id} variants={itemVariants}>
            <DashboardCard {...card} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <ChartCard
            title="Vendas Anuais"
            data={salesChartData}
            dataKey="value"
            color="#8884d8" // Violeta
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ChartCard
            title="Receita Mensal"
            data={salesChartData.map(d => ({ ...d, value: d.value * 0.75 }))} // Dados de exemplo
            dataKey="value"
            color="#34d399" // Verde esmeralda
          />
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
        <h3 className="text-xl font-semibold text-gray-100 mb-4 tracking-tight">Atividades Recentes</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="font-medium">Novo pedido #1023</span> - R$ 250 (há 2 horas)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-violet-500 rounded-full" />
            <span className="font-medium">Novo usuário registrado</span> - Maria Silva (há 4 horas)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            <span className="font-medium">Item em estoque baixo</span> - Laptop X1 (há 1 dia)
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;