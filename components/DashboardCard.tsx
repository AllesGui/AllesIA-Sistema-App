import React from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon, ArrowUp, ArrowDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: LucideIcon;
  gradient: string; // Ex: "from-blue-500 to-indigo-600"
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  gradient,
}) => {
  const ChangeIcon = changeType === 'increase' ? ArrowUp : ArrowDown;
  const changeColor =
    changeType === 'increase'
      ? 'text-emerald-400'
      : changeType === 'decrease'
      ? 'text-red-400'
      : 'text-gray-400';

  return (
    <motion.div
      className={twMerge(
        "relative p-6 rounded-2xl overflow-hidden shadow-xl border border-white/10",
        "bg-gradient-to-br", gradient
      )}
      whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Fundo de gradiente do cartão */}
      <div className="absolute inset-0 opacity-20" />

      <div className="relative z-10 flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
        <Icon size={24} className="text-white opacity-80" />
      </div>
      <div className="relative z-10">
        <p className="text-4xl font-bold text-white mb-2">{value}</p>
        <div className="flex items-center gap-2">
          <ChangeIcon size={18} className={changeColor} />
          <span className={clsx("text-sm font-medium", changeColor)}>{change}</span>
          <span className="text-sm text-white/80">desde o último mês</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;