import {PackageJson} from 'type-fest';
import {LintIssue} from '../lint-issue';
import {doVersContainArchiveUrl} from '../validators/dependency-audit';
import {RuleType} from '../types/rule-type';
import {Severity} from '../types/severity';

const lintId = 'no-archive-devDependencies';
const nodeName = 'devDependencies';
const message = 'You are using devDependencies via url to archive file. Please use devDependencies from npm.';

export const ruleType = RuleType.OptionalObject;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lint = (packageJsonData: PackageJson | any, severity: Severity, config: any): LintIssue | null => {
  if (packageJsonData.hasOwnProperty(nodeName) && doVersContainArchiveUrl(packageJsonData, nodeName, config)) {
    return new LintIssue(lintId, severity, nodeName, message);
  }

  return null;
};