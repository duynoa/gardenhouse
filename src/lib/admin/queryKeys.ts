import { ListContactsParams, ListProjectsParams } from './api/services';

export const queryKeys = {
  contacts: {
    all: ['contacts'] as const,
    list: (params: ListContactsParams) => ['contacts', 'list', params] as const,
  },
  projects: {
    all: ['projects'] as const,
    list: (params: ListProjectsParams) => ['projects', 'list', params] as const,
  },
} as const;
