import { type LucideIcon } from 'lucide-react';

// Tipo para itens da barra lateral
export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

// Tipo para dados do cartão do dashboard
export interface DashboardCardData {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: LucideIcon;
  gradient: string; // Ex: "from-blue-500 to-indigo-600"
}

// Tipo para dados do gráfico
export interface ChartDataPoint {
  name: string;
  value: number;
}