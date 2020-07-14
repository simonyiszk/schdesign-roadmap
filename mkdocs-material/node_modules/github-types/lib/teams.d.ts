import { Organization } from './orgs';

export interface Team extends TeamEntity {
  parent?: TeamEntity;
}

interface TeamEntity {
  id: number;
  node_id: string;
  url: string;
  html_url: string;
  name: string;
  slug: string;
  description: string;
  privacy: string;
  permission: string;
  members_url: string;
  repositories_url: string;
  members_count: number;
  repos_count: number;
  created_at: Date;
  updated_at: Date;
  organization: Organization;
}
