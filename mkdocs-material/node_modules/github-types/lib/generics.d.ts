export interface GitHubEntity {
  login: string;
  name?: string;
  company?: string;
  blog?: string;
  email?: string;
  url?: string;
  readonly id?: number;
  readonly node_id?: string;
  readonly repos_url?: string;
  readonly events_url?: string;
  readonly avatar_url?: string;
  readonly html_url?: string;
  readonly location?: string;
  readonly created_at?: Date;
  readonly updated_at?: Date;
  readonly public_repos?: number;
  readonly public_gists?: number;
  readonly followers?: number;
  readonly following?: number;
  readonly private_gists?: number;
  readonly total_private_repos?: number;
  readonly owned_private_repos?: number;
  readonly disk_usage?: number;
  readonly collaborators?: number;
  readonly plan?: Plan;
}

export enum GitHubEntityType {
  user = 'User',
  organization = 'Organization',
}

export interface Plan {
  readonly name: string;
  readonly space: number;
  readonly private_repos: number;
  readonly collaborators?: number;
  readonly filled_seats?: number;
  readonly seats?: number;
}
