import React from 'react';
import { Bell, Search, ChevronRight, HelpCircle } from 'lucide-react';
import { ViewState } from '../App';

interface HeaderProps {
  currentView: ViewState;
}

export const Header: React.FC<HeaderProps> = ({ currentView }) => {
  
  const getPageTitle = () => {
    switch (currentView) {
      case 'home': return 'Início';
      case 'projects': return 'Projetos';
      case 'files': return 'Arquivos';
      case 'reports': return 'Relatórios';
      case 'tasks': return 'Tarefas';
      default: return 'Início';
    }
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-20">
      {/* Left: Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500">
        <span className="hover:text-gray-900 cursor-pointer transition-colors">Agência Piqo</span>
        <ChevronRight size={16} className="mx-2 text-gray-400" />
        <span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
          {getPageTitle()}
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block group">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-gray-600 transition-colors" />
           <input 
             type="text" 
             placeholder="Busca global..." 
             className="bg-gray-50 border-none text-sm rounded-full pl-9 pr-4 py-1.5 w-64 focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all outline-none placeholder:text-gray-400"
           />
        </div>
        
        <div className="h-6 w-px bg-gray-200 mx-1"></div>

        <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <HelpCircle size={20} />
        </button>
      </div>
    </header>
  );
};