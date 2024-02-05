import { useGetCommits } from '../hooks/useGetCommits';
import { GithubFormStateContext } from '../App';
import { useContext } from 'react';
import Loading from './Loading';
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
        <Loading variant="sm" />
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
