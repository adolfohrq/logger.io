import React from 'react';
import { 
  Home, 
  Folder, 
  LayoutGrid, 
  CheckSquare, 
  FileText, 
  LifeBuoy, 
  Settings, 
  LogOut,
  ChevronDown,
  Command
} from 'lucide-react';
import { ViewState } from '../App';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 z-30">
      {/* Header / Logo */}
      <div className="h-20 flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
             <Command size={18} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 text-sm leading-tight">Agência Piqo</span>
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Workspace</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
        <div className="space-y-6">
          
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Menu Principal
            </div>
            <nav className="space-y-0.5">
              <NavItem 
                icon={<Home size={18} />} 
                label="Início" 
                active={currentView === 'home'} 
                onClick={() => onNavigate('home')}
              />
              <NavItem 
                icon={<Folder size={18} />} 
                label="Arquivos" 
                active={currentView === 'files'}
                onClick={() => onNavigate('files')}
              />
              <NavItem 
                icon={<LayoutGrid size={18} />} 
                label="Projetos" 
                active={currentView === 'projects'} 
                hasSubmenu 
                onClick={() => onNavigate('projects')}
              />
              <NavItem 
                icon={<CheckSquare size={18} />} 
                label="Tarefas" 
                active={currentView === 'tasks'}
                onClick={() => onNavigate('tasks')}
              />
              <NavItem 
                icon={<FileText size={18} />} 
                label="Relatórios" 
                active={currentView === 'reports'}
                onClick={() => onNavigate('reports')}
              />
            </nav>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Sistema
            </div>
            <nav className="space-y-0.5">
              <NavItem icon={<Settings size={18} />} label="Configurações" />
              <NavItem icon={<LifeBuoy size={18} />} label="Suporte" />
            </nav>
          </div>

        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="https://picsum.photos/id/64/100/100" 
                alt="User" 
                className="w-9 h-9 rounded-full object-cover border border-gray-200"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">Mahdi Gharib</span>
              <span className="text-xs text-gray-500">mahdi@piqo.design</span>
            </div>
          </div>
          <LogOut size={16} className="text-gray-400 group-hover:text-gray-600" />
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, hasSubmenu, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 group relative
        ${active 
          ? 'bg-gray-100 text-gray-900 font-medium' 
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
        }
      `}
    >
      {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-500 rounded-r-full"></div>}
      <div className="flex items-center gap-3">
        <span className={`transition-colors ${active ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
          {icon}
        </span>
        <span className="text-sm">{label}</span>
      </div>
      {hasSubmenu && (
        <ChevronDown size={14} className={`text-gray-300 transition-transform duration-200 ${active ? 'rotate-180 text-gray-600' : 'group-hover:text-gray-500'}`} />
      )}
    </button>
  );
};