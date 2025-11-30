export enum ProjectStatus {
  CONCLUIDO = 'Concluído',
  EM_PROGRESSO = 'Em Progresso',
  PAUSADO = 'Pausado',
  BACKLOG = 'Backlog',
}

export interface Member {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Project {
  id: string;
  name: string;
  website: string;
  status: ProjectStatus;
  description: string;
  members: Member[];
  extraMembersCount?: number;
  progress: number;
}
