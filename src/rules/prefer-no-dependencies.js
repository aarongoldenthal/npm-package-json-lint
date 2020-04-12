const {exists} = require('../validators/property');
const LintIssue = require('../LintIssue');

const lintId = 'prefer-no-dependencies';
const nodeName = 'dependencies';
const message = 'dependencies should not be defined';
const ruleType = 'standard';

const lint = (packageJsonData, severity) => {
  if (exists(packageJsonData, nodeName)) {
    return new LintIssue(lintId, severity, nodeName, message);
  }

  return true;
};

module.exports = {
  lint,
  ruleType,
};
