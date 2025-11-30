import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProjectTable } from './components/ProjectTable';
import { Home } from './components/Home';
import { Files } from './components/Files';
import { Reports } from './components/Reports';
import { Tasks } from './components/Tasks';

// Define available views
export type ViewState = 'home' | 'projects' | 'files' | 'reports' | 'tasks';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('projects');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'projects':
        return <ProjectTable />;
      case 'files':
        return <Files />;
      case 'reports':
        return <Reports />;
      case 'tasks':
        return <Tasks />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden">
      {/* Sidebar - Fixed width */}
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      
      {/* Main Content Area - Flexible width */}
      <div className="flex-1 flex flex-col ml-72">
        <Header currentView={currentView} />
        
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;