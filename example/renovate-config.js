module.exports = {
  branchPrefix: "test-renovate/",
  username: "renovate-release",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  onboarding: true,
  platform: "github",
  includeForks: true,
  repositories: ["ch0nen/8_jobs_and_docker"],
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
