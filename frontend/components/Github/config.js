import CommitInfo from './CommitInfo';
import LanguageInfo from './LanguageInfo';
import RepositoryInfo from './RepositoryInfo';
import OrgInfo from './OrgInfo';
import UserInfo from './UserInfo';
import heatmap from './heatmap';
import CodeCourse from './CodeCourse';

export default {
  heatmap: heatmap,
  info: UserInfo,
  repos: RepositoryInfo,
  orgs: OrgInfo,
  languages: LanguageInfo,
  commits: CommitInfo,
  course: CodeCourse
};
