import { useGetCommits } from '../hooks/useGetCommits';
import { GithubFormStateContext } from '../App';
import { useContext } from 'react';
export default function CommitList({ projectName }) {
  const [params] = useContext(GithubFormStateContext);
  const { data, isLoading } = useGetCommits({
    login: params.login,
    repo: projectName,
  });
  return (
    <>
      <p>Commit list:</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : data?.length ? (
        <ul>
          {data.map((el) => (
            <li key={el.node_id}>{el.commit.message}</li>
          ))}
        </ul>
      ) : (
        <p>no commits available</p>
      )}
    </>
  );
}
