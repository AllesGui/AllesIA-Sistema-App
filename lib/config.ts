import {
  Home, Settings, Users, LineChart, DollarSign, ArrowUp, ArrowDown, CreditCard, Wallet,
} from 'lucide-react';
import { SidebarItem, DashboardCardData, ChartDataPoint } from '../types';

// Configuração dos itens da barra lateral
export const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
  { id: 'users', label: 'Usuários', icon: Users, path: '/users' },
  { id: 'settings', label: 'Configurações', icon: Settings, path: '/settings' },
];

// Dados mock para os cartões do dashboard
export const dashboardCardsData: DashboardCardData[] = [
  {
    id: 'revenue',
    title: 'Receita Total',
    value: 'R$ 12.450',
    change: '+12%',
    changeType: 'increase',
    icon: DollarSign,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'sales',
    title: 'Vendas',
    value: 'R$ 8.200',
    change: '+8%',
    changeType: 'increase',
    icon: CreditCard,
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    id: 'customers',
    title: 'Novos Clientes',
    value: '245',
    change: '+5%',
    changeType: 'increase',
    icon: Users,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'expenses',
    title: 'Despesas',
    value: 'R$ 3.100',
    change: '-3%',
    changeType: 'decrease',
    icon: Wallet,
    gradient: 'from-rose-500 to-red-600',
  },
];

// Dados mock para o gráfico de vendas
export const salesChartData: ChartDataPoint[] = [
  { name: 'Jan', value: 4000 },
  { name: 'Fev', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Abr', value: 2780 },
  { name: 'Mai', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
  { name: 'Ago', value: 4200 },
  { name: 'Set', value: 3800 },
  { name: 'Out', value: 4500 },
  { name: 'Nov', value: 3000 },
  { name: 'Dez', value: 5000 },
];