import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Calendar, 
  Paperclip, 
  MessageSquare, 
  CheckCircle2, 
  Circle, 
  Clock, 
  LayoutGrid,
  List,
  AlertCircle
} from 'lucide-react';

type Priority = 'Alta' | 'Média' | 'Baixa';
type Status = 'Todo' | 'In Progress' | 'Review' | 'Done';

interface Task {
  id: string;
  title: string;
  project: string;
  priority: Priority;
  status: Status;
  dueDate: string;
  comments: number;
  attachments: number;
  members: number; // Mocking member count for avatars
}

const MOCK_TASKS: Task[] = [
  { id: '1', title: 'Pesquisa de Usuários', project: 'Iconly Pro', priority: 'Alta', status: 'In Progress', dueDate: '12 Nov', comments: 3, attachments: 2, members: 3 },
  { id: '2', title: 'Wireframes da Home', project: 'Skale', priority: 'Alta', status: 'Todo', dueDate: '14 Nov', comments: 0, attachments: 1, members: 2 },
  { id: '3', title: 'Guia de Estilo V2', project: 'Localy 2.0', priority: 'Média', status: 'Done', dueDate: '10 Nov', comments: 5, attachments: 4, members: 1 },
  { id: '4', title: 'Otimização de SEO', project: 'Quotient', priority: 'Baixa', status: 'Todo', dueDate: '20 Nov', comments: 1, attachments: 0, members: 1 },
  { id: '5', title: 'Revisão de Conteúdo', project: 'Mask World', priority: 'Média', status: 'Review', dueDate: '13 Nov', comments: 8, attachments: 0, members: 2 },
  { id: '6', title: 'Integração API', project: 'Cultivate', priority: 'Alta', status: 'In Progress', dueDate: '15 Nov', comments: 2, attachments: 3, members: 4 },
  { id: '7', title: 'Exportar Assets', project: 'Iconly Animation', priority: 'Baixa', status: 'Done', dueDate: '09 Nov', comments: 0, attachments: 8, members: 1 },
];

export const Tasks: React.FC = () => {
  const [viewMode, setViewMode] = useState<'board' | 'list'>('board');

  return (
    <div className="max-w-7xl mx-auto pb-10">
      
      {/* Page Title & Actions */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Tarefas</h1>
          <p className="text-gray-500">Gerencie o fluxo de trabalho e acompanhe o progresso diário.</p>
        </div>
        <button className="bg-[#111827] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
          <Plus size={18} />
          Nova Tarefa
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* View Switcher */}
        <div className="bg-gray-100 p-1 rounded-lg flex items-center gap-1">
          <button 
            onClick={() => setViewMode('board')}
            className={`p-2 rounded-md transition-all ${viewMode === 'board' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <LayoutGrid size={18} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <List size={18} />
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
             <input 
                 type="text" 
                 placeholder="Buscar tarefas..." 
                 className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-sm text-gray-700 focus:ring-2 focus:ring-gray-100 focus:border-gray-300 transition-colors"
             />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
             <Filter size={16} />
             Filtros
          </button>
        </div>
      </div>

      {/* Content Content */}
      {viewMode === 'board' ? (
        <div className="flex gap-6 overflow-x-auto pb-4 items-start">
           <KanbanColumn title="A Fazer" status="Todo" color="bg-gray-200" tasks={MOCK_TASKS.filter(t => t.status === 'Todo')} />
           <KanbanColumn title="Em Progresso" status="In Progress" color="bg-blue-400" tasks={MOCK_TASKS.filter(t => t.status === 'In Progress')} />
           <KanbanColumn title="Revisão" status="Review" color="bg-orange-400" tasks={MOCK_TASKS.filter(t => t.status === 'Review')} />
           <KanbanColumn title="Concluído" status="Done" color="bg-emerald-400" tasks={MOCK_TASKS.filter(t => t.status === 'Done')} />
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-5"></th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tarefa</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Projeto</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Prioridade</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Entrega</th>
                <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_TASKS.map(task => (
                <TaskRow key={task.id} task={task} />
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

/* --- Sub-components for Kanban --- */

const KanbanColumn: React.FC<{ title: string, status: string, color: string, tasks: Task[] }> = ({ title, status, color, tasks }) => (
  <div className="min-w-[300px] flex-1">
    <div className="flex items-center justify-between mb-4 px-1">
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full ${color}`}></span>
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-medium">{tasks.length}</span>
      </div>
      <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
    </div>
    
    <div className="space-y-3">
      {tasks.map(task => (
        <KanbanCard key={task.id} task={task} />
      ))}
      {tasks.length === 0 && (
         <div className="h-24 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Sem tarefas
         </div>
      )}
    </div>
  </div>
);

const KanbanCard: React.FC<{ task: Task }> = ({ task }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative">
    <div className="flex justify-between items-start mb-2">
      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">{task.project}</span>
      <button className="text-gray-300 hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal size={16} />
      </button>
    </div>
    
    <h4 className="text-sm font-semibold text-gray-900 mb-3 leading-snug">{task.title}</h4>
    
    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
      <div className="flex -space-x-2">
        {[...Array(task.members)].map((_, i) => (
          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[8px] overflow-hidden">
             <img src={`https://picsum.photos/seed/${task.id + i}/100`} alt="Avatar" />
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-3 text-gray-400">
        {(task.comments > 0) && (
          <div className="flex items-center gap-1 text-xs">
            <MessageSquare size={14} />
            <span>{task.comments}</span>
          </div>
        )}
        {(task.attachments > 0) && (
          <div className="flex items-center gap-1 text-xs">
            <Paperclip size={14} />
            <span>{task.attachments}</span>
          </div>
        )}
        <PriorityBadge priority={task.priority} iconOnly />
      </div>
    </div>
  </div>
);

/* --- Sub-components for List View --- */

const TaskRow: React.FC<{ task: Task }> = ({ task }) => (
  <tr className="hover:bg-gray-50 transition-colors group">
    <td className="py-4 px-6">
      <button className="text-gray-300 hover:text-indigo-600 transition-colors">
        {task.status === 'Done' ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Circle size={18} />}
      </button>
    </td>
    <td className="py-4 px-6">
       <span className={`text-sm font-medium ${task.status === 'Done' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>{task.title}</span>
    </td>
    <td className="py-4 px-6 text-sm text-gray-500">{task.project}</td>
    <td className="py-4 px-6">
       <StatusBadge status={task.status} />
    </td>
    <td className="py-4 px-6">
       <PriorityBadge priority={task.priority} />
    </td>
    <td className="py-4 px-6 text-sm text-gray-500">
       <div className="flex items-center gap-1.5">
          <Calendar size={14} className="text-gray-400" />
          {task.dueDate}
       </div>
    </td>
    <td className="py-4 px-6 text-right">
      <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal size={18} />
      </button>
    </td>
  </tr>
);

const PriorityBadge: React.FC<{ priority: Priority, iconOnly?: boolean }> = ({ priority, iconOnly }) => {
  const colors = {
    'Alta': 'text-red-600 bg-red-50',
    'Média': 'text-orange-600 bg-orange-50',
    'Baixa': 'text-blue-600 bg-blue-50'
  };
  
  if (iconOnly) {
     return <AlertCircle size={14} className={priority === 'Alta' ? 'text-red-500' : priority === 'Média' ? 'text-orange-400' : 'text-blue-400'} />;
  }

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[priority]}`}>
      {priority}
    </span>
  );
};

const StatusBadge: React.FC<{ status: Status }> = ({ status }) => {
    switch (status) {
        case 'Todo': return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">A Fazer</span>;
        case 'In Progress': return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">Em Progresso</span>;
        case 'Review': return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-600">Revisão</span>;
        case 'Done': return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">Concluído</span>;
        default: return null;
    }
}