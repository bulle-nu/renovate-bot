module.exports = {
  branchPrefix: "test-renovate/",
  username: "renovate-release",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  onboarding: true,
  platform: "github",
  includeForks: true,
  dryRun: "full",
  autodiscover: true,
  autodiscoverFilter: ["bulle-nu/*"],
  // repositories: ["bulle-nu/8_jobs_and_docker.git"],
  packageRules: [
    {
      description: "lockFileMaintenance",
      matchUpdateTypes: [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance",
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
