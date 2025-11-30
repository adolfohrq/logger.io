import React from 'react';
import { ProjectStatus } from '../types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let styles = '';

  switch (status) {
    case ProjectStatus.CONCLUIDO:
      styles = 'bg-emerald-50 text-emerald-600';
      break;
    case ProjectStatus.EM_PROGRESSO:
      styles = 'bg-cyan-50 text-cyan-700';
      break;
    case ProjectStatus.PAUSADO:
      styles = 'bg-orange-50 text-orange-700';
      break;
    case ProjectStatus.BACKLOG:
      styles = 'bg-pink-50 text-pink-700';
      break;
    default:
      styles = 'bg-gray-100 text-gray-600';
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles}`}>
      {status}
    </span>
  );
};
