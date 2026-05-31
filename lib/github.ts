export interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
}

export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/RanchMonster/repos?sort=updated&per_page=50",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const repos: Repo[] = await res.json();

  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
}
