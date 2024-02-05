import { useQuery } from '@tanstack/react-query';

const getGithubProjectsQuery = (login, enabled) => ({
  queryKey: ['github-projects', login],
  queryFn: () => getLastGithubProjects(login),
  staleTime: 1000 * 60 * 5,
  enabled,
});

async function getLastGithubProjects(login, count = 5) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${login}/repos?type=public&sort=created&page=1&per_page=${count}&direction=desc`,
      {
        method: 'GET',
      }
    );
    if (response.status !== 200) {
      throw new Error('failed to fetch github projects');
    }
    const githubProjects = await response.json();
    return githubProjects;
  } catch (error) {
    return error;
  }
}

export function useProjects({ login, enabled }) {
  return useQuery(getGithubProjectsQuery(login, enabled));
}
