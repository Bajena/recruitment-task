import { useGetCommits } from '../hooks/useGetCommits';

export default function CommitList({ projectName }) {
  const { data, isLoading } = useGetCommits({
    login: 'xanoosh',
    repo: projectName,
  });
  return isLoading ? (
    <p>Loading...</p>
  ) : data?.length ? (
    <ul>
      {data.map((el) => (
        <li key={el.node_id}>{el.commit.message}</li>
      ))}
    </ul>
  ) : (
    <p>no commits available</p>
  );
}
