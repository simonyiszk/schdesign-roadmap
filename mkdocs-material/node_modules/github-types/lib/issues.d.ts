import { GitHubEntityType } from './generics';

interface IssuePullRequestUrls {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
}
interface IssueUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
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
  type: GitHubEntityType.user;
  site_admin: boolean;
}
declare enum IssueState {
  open = 'open',
  closed = 'closed',
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  description: string;
  color: string;
  default: boolean;
}
export interface Milestone {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  state: IssueState;
  title: string;
  description: string;
  creator: IssueUser;
  open_issues: number;
  closed_issues: number;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  due_on: Date;
}

export interface Issue {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: string;
  title: string;
  body: string;
  user: IssueUser;
  labels: Label[];
  assignee: IssueUser;
  assignees: IssueUser[];
  milestone: Milestone;
  locked: boolean;
  active_lock_reason: string;
  comments: number;
  pull_request: IssuePullRequestUrls;
  closed_at: Date;
  created_at: Date;
  updated_at: Date;
  closed_by: IssueUser;
}
