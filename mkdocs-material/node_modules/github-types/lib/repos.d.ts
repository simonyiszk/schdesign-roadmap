import { GitHubEntityType } from './generics';

interface RepositoryEntity {
  readonly id?: number;
  readonly node_id?: string;
  name: string;
  full_name?: string;
  owner: Owner;
  private: boolean;
  html_url?: string;
  description: string;
  fork?: boolean;
  url?: string;
  readonly archive_url?: string;
  readonly assignees_url?: string;
  readonly blobs_url?: string;
  readonly branches_url?: string;
  readonly collaborators_url?: string;
  readonly comments_url?: string;
  readonly commits_url?: string;
  readonly compare_url?: string;
  readonly contents_url?: string;
  readonly contributors_url?: string;
  readonly deployments_url?: string;
  readonly downloads_url?: string;
  readonly events_url?: string;
  readonly forks_url?: string;
  readonly git_commits_url?: string;
  readonly git_refs_url?: string;
  readonly git_tags_url?: string;
  readonly git_url?: string;
  readonly issue_comment_url?: string;
  readonly issue_events_url?: string;
  readonly issues_url?: string;
  readonly keys_url?: string;
  readonly labels_url?: string;
  readonly languages_url?: string;
  readonly merges_url?: string;
  readonly milestones_url?: string;
  readonly notifications_url?: string;
  readonly pulls_url?: string;
  readonly releases_url?: string;
  readonly ssh_url?: string;
  readonly stargazers_url?: string;
  readonly statuses_url?: string;
  readonly subscribers_url?: string;
  readonly subscription_url?: string;
  readonly tags_url?: string;
  readonly teams_url?: string;
  readonly trees_url?: string;
  readonly clone_url?: string;
  readonly mirror_url?: string;
  readonly hooks_url?: string;
  readonly svn_url?: string;
  homepage: string;
  language?: string;
  readonly forks_count?: number;
  readonly stargazers_count?: number;
  readonly watchers_count?: number;
  readonly size?: number;
  default_branch?: string;
  open_issues_count?: number;
  is_template: boolean;
  topics?: string[];
  has_issues?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  has_downloads?: boolean;
  readonly archived?: boolean;
  disabled?: boolean;
  visibility?: string; // What is this???
  readonly pushed_at?: Date;
  readonly created_at?: Date;
  readonly updated_at?: Date;
  permissions?: Permissions;
  allow_rebase_merge?: boolean;
  template_repository?: string;
  temp_clone_token?: string;
  allow_squash_merge?: boolean;
  allow_merge_commit?: boolean;
  readonly subscribers_count?: number;
  readonly network_count?: number;
}
interface Permissions {
  admin: boolean;
  push: boolean;
  pull: boolean;
}
interface Entity {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id?: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  site_admin: boolean;
}
interface Owner extends Entity {
  type: GitHubEntityType.user;
}
interface Organization extends Entity {
  type: GitHubEntityType.organization;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface Repo extends RepositoryEntity {
  license?: License;
  readonly organization?: Organization;
  readonly parent?: RepositoryEntity;
  readonly source?: RepositoryEntity;
}
