export type GithubEvent = {
   id: string;
   type: string;
   repo_name: string;
   created_at: string;
   description: string;
   emoji: string;
};

const EMOJI_MAP: Record<string, string> = {
   PushEvent: "\u{1F4E4}",
   CreateEvent: "\u{1F4E6}",
   IssuesEvent: "\u{1F527}",
   WatchEvent: "\u{2B50}",
   ForkEvent: "\u{1F374}",
   PullRequestEvent: "\u{1F500}",
};

function eventEmoji(type: string): string {
   return EMOJI_MAP[type] ?? "\u{1F539}";
}

function eventDescription(event: {
   type: string;
   repo: { name: string };
   payload?: Record<string, unknown>;
}): string {
   switch (event.type) {
      case "PushEvent": {
         return `Pushed to ${event.repo.name}`;
      }
      case "CreateEvent":
         return `Created ${event.repo.name}`;
      case "DeleteEvent":
         return `Deleted a branch/tag in ${event.repo.name}`;
      case "IssuesEvent": {
         const action = (event.payload?.action as string) ?? "opened";
         return `${action === "opened" ? "Opened" : action} issue in ${event.repo.name}`;
      }
      case "WatchEvent":
         return `Starred ${event.repo.name}`;
      case "ForkEvent":
         return `Forked ${event.repo.name}`;
      case "PullRequestEvent": {
         const prAction = (event.payload?.action as string) ?? "opened";
         return `${prAction === "opened" ? "Opened" : prAction} PR in ${event.repo.name}`;
      }
      case "IssueCommentEvent":
         return `Commented on issue in ${event.repo.name}`;
      case "ReleaseEvent":
         return `Released in ${event.repo.name}`;
      default:
         return `Activity in ${event.repo.name}`;
   }
}

export async function getUserStats(): Promise<{
   public_repos: number;
   followers: number;
   following: number;
   total_stars: number;
}> {
   try {
      const userRes = await fetch("https://api.github.com/users/RanchMonster", {
         next: { revalidate: 3600 },
      });
      if (!userRes.ok) throw new Error(`GitHub user API responded with ${userRes.status}`);
      const user = await userRes.json();

      const reposRes = await fetch("https://api.github.com/users/RanchMonster/repos?per_page=100", {
         next: { revalidate: 3600 },
      });
      if (!reposRes.ok) throw new Error(`GitHub repos API responded with ${reposRes.status}`);
      const repos: { stargazers_count: number }[] = await reposRes.json();

      const total_stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

      return {
         public_repos: user.public_repos ?? 0,
         followers: user.followers ?? 0,
         following: user.following ?? 0,
         total_stars,
      };
   } catch {
      return { public_repos: 0, followers: 0, following: 0, total_stars: 0 };
   }
}

export async function getRecentActivity(): Promise<GithubEvent[]> {
   try {
      const res = await fetch("https://api.github.com/users/RanchMonster/events/public?per_page=7", {
         next: { revalidate: 3600 },
      });
      if (!res.ok) throw new Error(`GitHub events API responded with ${res.status}`);

      const raw: {
         id: string;
         type: string;
         repo: { name: string };
         created_at: string;
         payload?: Record<string, unknown>;
      }[] = await res.json();

      return raw.map((e) => ({
         id: e.id,
         type: e.type,
         repo_name: e.repo.name,
         created_at: e.created_at,
         description: eventDescription(e),
         emoji: eventEmoji(e.type),
      }));
   } catch {
      return [];
   }
}
