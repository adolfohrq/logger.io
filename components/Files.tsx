import React from 'react';
import { 
  Folder, 
  FileText, 
  Image as ImageIcon, 
  Music, 
  Video, 
  MoreVertical, 
  Download, 
  Trash2, 
  HardDrive, 
  UploadCloud,
  Search,
  Filter,
  File
} from 'lucide-react';

interface FileData {
  id: string;
  name: string;
  type: 'image' | 'document' | 'video' | 'audio' | 'archive';
  size: string;
  date: string;
  folder: string;
}

const MOCK_FILES: FileData[] = [
  { id: '1', name: 'Brand_Guidelines_v2.pdf', type: 'document', size: '4.2 MB', date: 'Hoje, 10:30', folder: 'Documentos' },
  { id: '2', name: 'Homepage_Hero_Banner.png', type: 'image', size: '2.8 MB', date: 'Hoje, 09:15', folder: 'Design Assets' },
  { id: '3', name: 'Project_Demo_Walkthrough.mp4', type: 'video', size: '124.5 MB', date: 'Ontem', folder: 'Mídia' },
  { id: '4', name: 'Client_Meeting_Notes.docx', type: 'document', size: '24 KB', date: '23 Out, 2023', folder: 'Documentos' },
  { id: '5', name: 'Financial_Report_Q3.xlsx', type: 'document', size: '1.2 MB', date: '21 Out, 2023', folder: 'Financeiro' },
  { id: '6', name: 'Logo_Animation_Final.mov', type: 'video', size: '85.0 MB', date: '20 Out, 2023', folder: 'Mídia' },
];

export const Files: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10">
      
      {/* Page Title Section */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Gerenciador de Arquivos</h1>
          <p className="text-gray-500">Organize e acesse os recursos do seu projeto.</p>
        </div>
        <button className="bg-[#111827] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
          <UploadCloud size={18} />
          Upload de Arquivo
        </button>
      </div>

      {/* Storage Overview Card */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
              <HardDrive size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Armazenamento</h3>
              <p className="text-sm text-gray-500">45.5 GB de 100 GB usados</p>
            </div>
          </div>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Fazer Upgrade</button>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden flex mb-2">
          <div className="h-full bg-indigo-500 w-[30%]" title="Documentos"></div>
          <div className="h-full bg-emerald-400 w-[15%]" title="Imagens"></div>
          <div className="h-full bg-orange-400 w-[10%]" title="Vídeos"></div>
        </div>
        <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-500"></div>Documentos</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-400"></div>Imagens</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-400"></div>Vídeos</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-200"></div>Livre</div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                  type="text" 
                  placeholder="Pesquisar arquivos ou pastas..." 
                  className="w-full bg-white border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm text-gray-700 focus:ring-2 focus:ring-gray-100 focus:border-gray-300 transition-colors placeholder:text-gray-400"
              />
          </div>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
                <Filter size={18} />
                Filtrar
            </button>
          </div>
      </div>

      {/* Folders Grid */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Pastas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <FolderCard name="Design Assets" count={124} size="2.4 GB" color="text-indigo-600" bg="bg-indigo-50" />
        <FolderCard name="Documentos" count={85} size="450 MB" color="text-blue-600" bg="bg-blue-50" />
        <FolderCard name="Mídia & Vídeo" count={32} size="14.2 GB" color="text-orange-600" bg="bg-orange-50" />
        <FolderCard name="Financeiro" count={12} size="120 MB" color="text-emerald-600" bg="bg-emerald-50" />
      </div>

      {/* Recent Files Table */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Arquivos Recentes</h3>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                  <tr>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/2">Nome</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tamanho</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Pasta</th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Data</th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                  {MOCK_FILES.map((file) => (
                      <tr key={file.id} className="hover:bg-gray-50/80 transition-colors group">
                          <td className="py-3 px-6 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                  <FileIcon type={file.type} />
                                  <span className="font-medium text-sm text-gray-900">{file.name}</span>
                              </div>
                          </td>
                          <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-500">
                              {file.size}
                          </td>
                          <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-500">
                             <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-700">
                               <Folder size={12} className="text-gray-400" />
                               {file.folder}
                             </span>
                          </td>
                          <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-500">
                              {file.date}
                          </td>
                          <td className="py-3 px-6 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Download">
                                  <Download size={16} />
                                </button>
                                <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                                  <Trash2 size={16} />
                                </button>
                                <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                  <MoreVertical size={16} />
                                </button>
                              </div>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
};

const FolderCard = ({ name, count, size, color, bg }: any) => (
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${bg} ${color} group-hover:scale-110 transition-transform`}>
        <Folder size={24} fill="currentColor" fillOpacity={0.2} />
      </div>
      <button className="text-gray-300 hover:text-gray-500">
        <MoreVertical size={18} />
      </button>
    </div>
    <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
    <div className="flex items-center justify-between text-xs text-gray-500">
      <span>{count} arquivos</span>
      <span>{size}</span>
    </div>
  </div>
);

const FileIcon = ({ type }: { type: FileData['type'] }) => {
  switch (type) {
    case 'image':
      return <div className="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center"><ImageIcon size={16} /></div>;
    case 'video':
      return <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center"><Video size={16} /></div>;
    case 'audio':
      return <div className="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center"><Music size={16} /></div>;
    case 'document':
      return <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><FileText size={16} /></div>;
    default:
      return <div className="w-8 h-8 rounded bg-gray-100 text-gray-600 flex items-center justify-center"><File size={16} /></div>;
  }
};