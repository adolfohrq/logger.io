import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle2, MoreHorizontal, ArrowUpRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bom dia, Mahdi! 👋</h1>
        <p className="text-gray-500">Aqui está o resumo do que está acontecendo nos seus projetos hoje.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Projetos Totais" 
          value="7" 
          change="+2" 
          trend="up"
          icon={<div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl"><TrendingUp size={24} /></div>}
        />
        <StatCard 
          title="Tarefas Pendentes" 
          value="12" 
          change="-4" 
          trend="down"
          icon={<div className="p-3 bg-orange-100 text-orange-600 rounded-xl"><Clock size={24} /></div>}
        />
        <StatCard 
          title="Membros Ativos" 
          value="24" 
          change="+3" 
          trend="up"
          icon={<div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><Users size={24} /></div>}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2/3) - Activity Chart */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Produtividade Semanal</h3>
                <p className="text-sm text-gray-500">Tarefas completadas nos últimos 7 dias</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            {/* Mock Chart */}
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              <ChartBar height="40%" day="Seg" />
              <ChartBar height="65%" day="Ter" active />
              <ChartBar height="45%" day="Qua" />
              <ChartBar height="80%" day="Qui" />
              <ChartBar height="55%" day="Sex" />
              <ChartBar height="30%" day="Sáb" />
              <ChartBar height="20%" day="Dom" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Projetos Recentes</h3>
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">Ver todos</button>
            </div>
            <div className="divide-y divide-gray-100">
              <ProjectListItem name="Iconly Pro" status="Concluído" date="Hoje, 09:40" />
              <ProjectListItem name="Skale Website" status="Em Progresso" date="Ontem, 16:20" />
              <ProjectListItem name="Localy 2.0" status="Pausado" date="23 Out, 2023" />
            </div>
          </div>
        </div>

        {/* Right Column (1/3) - Upcoming Tasks */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Tarefas para hoje</h3>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors">
                <ArrowUpRight size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <TaskItem title="Revisar wireframes" project="Iconly Pro" time="10:00 AM" />
              <TaskItem title="Daily com equipe" project="Skale" time="11:30 AM" />
              <TaskItem title="Atualizar documentação" project="Localy" time="02:00 PM" />
              <TaskItem title="Exportar assets finais" project="Quotient" time="04:45 PM" />
              
              <div className="pt-4 mt-4 border-t border-gray-100 text-center">
                 <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all">
                   + Adicionar nova tarefa
                 </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Sub-components for styling
const StatCard = ({ title, value, change, trend, icon }: any) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
      <div className={`text-xs font-semibold flex items-center gap-1 ${trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
        <span>{change} este mês</span>
      </div>
    </div>
    {icon}
  </div>
);

const ChartBar = ({ height, day, active }: any) => (
  <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
    <div className="relative w-full bg-gray-100 rounded-lg h-full overflow-hidden flex items-end">
      <div 
        className={`w-full rounded-t-lg transition-all duration-500 ${active ? 'bg-indigo-600' : 'bg-indigo-200 group-hover:bg-indigo-300'}`}
        style={{ height: height }}
      ></div>
      {/* Tooltip on hover */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {height}
      </div>
    </div>
    <span className={`text-xs font-medium ${active ? 'text-indigo-600' : 'text-gray-400'}`}>{day}</span>
  </div>
);

const ProjectListItem = ({ name, status, date }: any) => (
  <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
        <Clock size={18} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
      status === 'Concluído' ? 'bg-emerald-50 text-emerald-600' : 
      status === 'Em Progresso' ? 'bg-cyan-50 text-cyan-600' : 
      'bg-orange-50 text-orange-600'
    }`}>
      {status}
    </span>
  </div>
);

const TaskItem = ({ title, project, time }: any) => (
  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
    <button className="mt-0.5 text-gray-300 hover:text-indigo-600 transition-colors">
      <CheckCircle2 size={20} />
    </button>
    <div className="flex-1">
      <h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">{title}</h4>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded uppercase tracking-wide">{project}</span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <Clock size={10} /> {time}
        </span>
      </div>
    </div>
  </div>
);
