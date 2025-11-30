import React from 'react';
import { Download, FileText, Calendar, Filter, ArrowUp, ArrowDown, MoreHorizontal, DownloadCloud } from 'lucide-react';

export const Reports: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      {/* Header */}
       <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Relatórios</h1>
          <p className="text-gray-500">Análises detalhadas e métricas de desempenho da equipe.</p>
        </div>
        <div className="flex gap-3">
            <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              <Calendar size={18} />
              Últimos 30 dias
            </button>
            <button className="bg-[#111827] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
              <DownloadCloud size={18} />
              Exportar Dados
            </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
         <KPICard title="Tarefas Concluídas" value="128" change="+12%" trend="up" />
         <KPICard title="Horas Trabalhadas" value="342h" change="-5%" trend="down" />
         <KPICard title="Projetos Entregues" value="8" change="+2" trend="neutral" />
         <KPICard title="Eficiência Média" value="94%" change="+1.5%" trend="up" />
      </div>

      {/* Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
             <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Visão Geral de Produtividade</h3>
                  <p className="text-sm text-gray-500">Comparativo de tarefas completadas vs planejadas</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-lg"><Filter size={18} /></button>
            </div>
            
            {/* CSS Bar Chart Placeholder */}
            <div className="h-64 flex items-end justify-around gap-3 sm:gap-6 pt-4 border-b border-gray-100 pb-2 px-2">
                 {[40, 65, 45, 80, 55, 70, 40, 60, 50, 75, 85, 65].map((h, i) => (
                    <div key={i} className="w-full bg-gray-50 rounded-t-md relative group h-full flex items-end">
                         <div 
                          style={{height: `${h}%`}} 
                          className="w-full bg-indigo-500 rounded-t-md opacity-80 group-hover:opacity-100 transition-opacity relative"
                         >
                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                              {h} Tarefas
                            </div>
                         </div>
                    </div>
                 ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
                <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
                <span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span>
            </div>
        </div>

        {/* Secondary Stats */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-bold text-gray-900">Status dos Projetos</h3>
               <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={18} /></button>
            </div>
             <div className="space-y-6 flex-1">
                <StatusRow label="Concluídos" value={35} color="bg-emerald-500" total={100} />
                <StatusRow label="Em Progresso" value={45} color="bg-cyan-500" total={100} />
                <StatusRow label="Em Revisão" value={12} color="bg-orange-400" total={100} />
                <StatusRow label="Atrasados" value={8} color="bg-red-500" total={100} />
             </div>
             <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Índice de Conclusão</p>
                <div className="flex items-baseline gap-2">
                   <p className="text-3xl font-bold text-gray-900">85%</p>
                   <span className="text-sm font-medium text-emerald-600">+4% vs mês anterior</span>
                </div>
             </div>
        </div>
      </div>

      {/* Reports Table */}
       <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Relatórios Gerados</h3>
                <p className="text-sm text-gray-500 mt-1">Histórico de exportações e documentos</p>
              </div>
              <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
                Ver todos
              </button>
          </div>
          <table className="w-full">
               <thead className="bg-gray-50/50 border-b border-gray-100">
                   <tr>
                       <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nome do Arquivo</th>
                       <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Gerado em</th>
                       <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipo</th>
                       <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tamanho</th>
                       <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                   </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                   {[
                     { name: 'Relatório Mensal - Outubro', date: '01/11/2023', size: '2.4 MB' },
                     { name: 'Relatório Financeiro Q3', date: '15/10/2023', size: '1.8 MB' },
                     { name: 'Produtividade Equipe Design', date: '10/10/2023', size: '4.2 MB' },
                     { name: 'Análise de Backlog', date: '01/10/2023', size: '856 KB' },
                   ].map((file, i) => (
                       <tr key={i} className="hover:bg-gray-50 transition-colors group">
                           <td className="py-4 px-6 text-sm font-medium text-gray-900">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center">
                                    <FileText size={16} />
                                 </div>
                                 {file.name}
                              </div>
                           </td>
                           <td className="py-4 px-6 text-sm text-gray-500">{file.date}</td>
                           <td className="py-4 px-6 text-sm text-gray-500">
                             <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                               PDF
                             </span>
                           </td>
                           <td className="py-4 px-6 text-sm text-gray-500">{file.size}</td>
                           <td className="py-4 px-6 text-right">
                               <button className="text-gray-400 hover:text-indigo-600 p-2 hover:bg-indigo-50 rounded-lg transition-colors">
                                 <Download size={18} />
                               </button>
                           </td>
                       </tr>
                   ))}
               </tbody>
          </table>
       </div>
    </div>
  );
};

const KPICard = ({ title, value, change, trend }: any) => {
    const isPositive = trend === 'up';
    const isNeutral = trend === 'neutral';
    
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-500 text-sm font-medium mb-2">{title}</p>
            <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
                <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full 
                    ${isPositive ? 'bg-emerald-50 text-emerald-600' : isNeutral ? 'bg-gray-100 text-gray-600' : 'bg-red-50 text-red-600'}`}>
                    {isPositive ? <ArrowUp size={12} /> : isNeutral ? null : <ArrowDown size={12} />}
                    {change}
                </div>
            </div>
        </div>
    );
}

const StatusRow = ({ label, value, color, total }: any) => (
    <div>
        <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            <span className="text-sm font-semibold text-gray-900">{value}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div className={`h-full rounded-full ${color}`} style={{ width: `${(value / total) * 100}%` }}></div>
        </div>
    </div>
);