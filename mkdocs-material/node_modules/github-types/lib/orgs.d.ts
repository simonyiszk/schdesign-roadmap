import * as generics from './generics';

export interface Organization extends generics.GitHubEntity {
  type: generics.GitHubEntityType.organization;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  description: string;
  is_verified: boolean;
  has_organization_projects: boolean;
  has_repository_projects: boolean;
  billing_email: string;
  default_repository_permission: string;
  members_can_create_repositories: boolean;
  two_factor_requirement_enabled: boolean;
}
