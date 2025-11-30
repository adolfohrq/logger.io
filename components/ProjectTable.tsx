import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Plus } from 'lucide-react';
import { Project, ProjectStatus } from '../types';
import { StatusBadge } from './StatusBadge';

const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Iconly Pro',
    website: 'iconly.pro',
    status: ProjectStatus.CONCLUIDO,
    description: 'Design de Ícones - Design de ícones em vários estilos.',
    progress: 100,
    members: [],
    extraMembersCount: 3
  },
  {
    id: '2',
    name: 'Skale',
    website: 'skale.space',
    status: ProjectStatus.EM_PROGRESSO,
    description: 'Design de Website - Redesenhar o website skale.',
    progress: 90,
    members: [],
    extraMembersCount: 2
  },
  {
    id: '3',
    name: 'Localy 2.0',
    website: 'Localy.io',
    status: ProjectStatus.PAUSADO,
    description: 'Kit de Mapas - Minimal maps in 5 styles.',
    progress: 50,
    members: []
  },
  {
    id: '4',
    name: 'Iconly Animation',
    website: 'iconly.pro',
    status: ProjectStatus.EM_PROGRESSO,
    description: 'Ícones Animados - Ícones Iconly animados.',
    progress: 80,
    members: []
  },
  {
    id: '5',
    name: 'Cultivate',
    website: 'cultivate.io',
    status: ProjectStatus.PAUSADO,
    description: 'Integrações de aplicativos web - Connect web apps seamlessly',
    progress: 20,
    members: []
  },
  {
    id: '6',
    name: 'Quotient',
    website: 'quotient.co',
    status: ProjectStatus.BACKLOG,
    description: 'CRM de Vendas - Web-based sales doc management',
    progress: 0,
    members: [],
    extraMembersCount: 6
  },
  {
    id: '7',
    name: 'Mask World',
    website: 'maskworld.io',
    status: ProjectStatus.EM_PROGRESSO,
    description: 'Projeto NFT - Uma grande coleção da arte de Jordi.',
    progress: 40,
    members: []
  },
];

export const ProjectTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'table' | 'kanban'>('table');

  return (
    <div className="max-w-7xl mx-auto pb-10">
      
      {/* Page Title Section */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Projetos</h1>
          <p className="text-gray-500">Visualize e Gerencie os projetos da sua equipe.</p>
        </div>
        <button className="bg-[#111827] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
          <Plus size={18} />
          Adicionar projeto
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab('table')}
          className={`pb-3 text-sm font-medium transition-all relative ${activeTab === 'table' ? 'text-gray-900 border-b-2 border-gray-900 -mb-px' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Visualização em Tabela
        </button>
        <button 
          onClick={() => setActiveTab('kanban')}
          className={`pb-3 text-sm font-medium transition-all relative ${activeTab === 'kanban' ? 'text-gray-900 border-b-2 border-gray-900 -mb-px' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Visualização em Kanban
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
          <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                  type="text" 
                  placeholder="Procurar por projetos" 
                  className="w-full bg-white border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm text-gray-700 focus:ring-2 focus:ring-gray-100 focus:border-gray-300 transition-colors placeholder:text-gray-400"
              />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
              <Filter size={18} />
              Filtros
          </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 pb-2">
              <h3 className="text-lg font-semibold text-gray-900">Todos os Projetos</h3>
          </div>
          <table className="w-full">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                  <tr>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/3">
                          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                              Nome
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                      </th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/6">Status</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/3">Sobre</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/6">Progresso</th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-16"></th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                  {MOCK_PROJECTS.map((project) => (
                      <tr key={project.id} className="hover:bg-gray-50/80 transition-colors group">
                          <td className="py-4 px-6 whitespace-nowrap">
                              <div className="flex items-center gap-4">
                                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold shadow-sm
                                      ${project.id === '1' ? 'bg-indigo-600' : ''}
                                      ${project.id === '2' ? 'bg-blue-500' : ''}
                                      ${project.id === '3' ? 'bg-orange-400' : ''}
                                      ${project.id === '4' ? 'bg-sky-600' : ''}
                                      ${project.id === '5' ? 'bg-purple-500' : ''}
                                      ${project.id === '6' ? 'bg-purple-700' : ''}
                                      ${project.id === '7' ? 'bg-emerald-400' : ''}
                                  `}>
                                      {/* Simple icon placeholder logic based on IDs to simulate logos */}
                                      {project.id === '1' && <span className="text-xl">C</span>}
                                      {project.id === '2' && <div className="w-5 h-5 rounded-full bg-white opacity-40"></div>}
                                      {project.id === '3' && <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"></div>}
                                      {project.id === '4' && <div className="w-5 h-5 rounded-full border-[3px] border-white"></div>}
                                      {project.id === '5' && <div className="rotate-45 w-4 h-4 bg-white"></div>}
                                      {project.id === '6' && <span className="text-xl">Q</span>}
                                      {project.id === '7' && <span className="text-xl">⚡</span>}
                                  </div>
                                  <div>
                                      <div className="font-semibold text-sm text-gray-900 mb-0.5">{project.name}</div>
                                      <div className="text-xs text-gray-500">{project.website}</div>
                                  </div>
                              </div>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                              <StatusBadge status={project.status} />
                          </td>
                          <td className="py-4 px-6">
                              <div>
                                  <div className="font-medium text-sm text-gray-900 mb-0.5">{project.description.split(' - ')[0]}</div>
                                  <div className="text-xs text-gray-500 truncate max-w-[280px]">{project.description.split(' - ')[1]}</div>
                              </div>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                  <div className="flex-1 w-24 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                      <div 
                                          className={`h-full rounded-full transition-all duration-500 ${
                                              project.progress === 100 ? 'bg-emerald-500' :
                                              project.status === ProjectStatus.PAUSADO ? 'bg-orange-400' :
                                              project.status === ProjectStatus.BACKLOG ? 'bg-pink-500' :
                                              'bg-emerald-500'
                                          }`}
                                          style={{ width: `${project.progress}%` }}
                                      ></div>
                                  </div>
                                  <span className="text-xs font-semibold text-gray-700 min-w-[30px]">{project.progress}%</span>
                              </div>
                          </td>
                          <td className="py-4 px-6 text-right whitespace-nowrap">
                              <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                  <MoreVertical size={18} />
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