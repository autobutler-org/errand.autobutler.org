/**
 * Every string that appears on the page lives here, so copy changes happen in
 * one file rather than across component templates.
 */

export interface Link {
  readonly label: string;
  readonly href: string;
}

export interface Step {
  readonly title: string;
  readonly body: string;
}

/** One row of a label/value list, e.g. the hero's fact sheet. */
export interface Fact {
  readonly label: string;
  readonly value: string;
}

/** A section of numbered steps, rendered by `StepList`. */
export interface StepSection {
  readonly id: string;
  readonly eyebrow: string;
  readonly heading: string;
  readonly lede?: string;
  readonly steps: readonly Step[];
}

export const orgSiteUrl = "https://autobutler.org";
export const quarkSiteUrl = "https://quark.autobutler.org";
export const githubOrgUrl = "https://github.com/autobutler-org";
export const repoUrl = `${githubOrgUrl}/errand.autobutler.org`;

export const masthead = {
  wordmark: "Errand",
  links: [
    { label: "How it works", href: "#how" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Quark", href: quarkSiteUrl },
  ] as readonly Link[],
  /** Rendered apart from the other links, as the one solid button in the bar. */
  cta: { label: "AutoButler", href: orgSiteUrl } as Link,
  menuLabel: "Menu",
} as const;

export const hero = {
  headline: "Runners that come back",
  subhead: "Self-hosted GitHub Actions runners on Kubernetes.",
  lede:
    "Errand runs GitHub Actions jobs on a cluster you control. A runner starts for each job, " +
    "does the work, and goes away. Arm and x64 pools grow with the queue.",
  primary: { label: "See how it works", href: "#how" } as Link,
  secondary: { label: "Read the roadmap", href: "#roadmap" } as Link,
  /**
   * Plain facts about the stack as it runs today. Each one is backed by copy
   * further down the page.
   */
  factsLabel: "Errand at a glance",
  facts: [
    { label: "Status", value: "Running AutoButler's own CI" },
    { label: "Built on", value: "Actions Runner Controller" },
    { label: "Architectures", value: "Arm64 and x64" },
    { label: "Each runner", value: "4 cores, 16 GiB" },
    { label: "First cluster", value: "Azure Kubernetes Service" },
  ] as readonly Fact[],
} as const;

export const howItWorks: StepSection = {
  id: "how",
  eyebrow: "How it works",
  heading: "Change one line in your workflow.",
  steps: [
    {
      title: "Pick a runner label",
      body: "Point a job's runs-on at an Errand label instead of ubuntu-latest. Workflows, secrets, and permissions stay in GitHub.",
    },
    {
      title: "A runner starts for the job",
      body: "GitHub's Actions Runner Controller sees the queued job and starts a runner pod. The node pool adds machines when the queue grows.",
    },
    {
      title: "The job runs, then it is gone",
      body: "Each runner gets four cores and 16 GiB. When the job ends, the runner is removed and the next job gets a clean one.",
    },
  ],
};

export const roadmap: StepSection = {
  id: "roadmap",
  eyebrow: "Roadmap",
  heading: "Ours first, then yours.",
  lede: "Errand is not open to other teams yet. It opens up in this order.",
  steps: [
    {
      title: "Our own CI",
      body: "Errand runs AutoButler's builds today, for Quark and the projects around it, on one Azure cluster.",
    },
    {
      title: "We host it",
      body: "The same stack, run by us for other teams. That waits on a stronger wall between jobs, so one team's build can never reach another's.",
    },
    {
      title: "You run it",
      body: "Bring a Kubernetes cluster, a container registry, and a storage bucket, and run the same stack on your own infrastructure.",
    },
  ],
};

export const callToAction = {
  eyebrow: "From AutoButler",
  heading: "Built by the people behind Quark.",
  body: "AutoButler makes Quark, a private home cloud. Errand is the build system we made to ship it.",
  action: { label: "Visit AutoButler", href: orgSiteUrl } as Link,
} as const;

export const footer = {
  note: "Errand is built by AutoButler.",
  links: [
    { label: "autobutler.org", href: orgSiteUrl },
    { label: "Quark", href: quarkSiteUrl },
    { label: "GitHub", href: githubOrgUrl },
  ] as readonly Link[],
} as const;
