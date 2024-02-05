import { useCommits } from '../hooks/useCommits';
import { useSelector } from 'react-redux';

import Loading from './Loading';
export default function CommitList({ projectName }) {
  const loginValue = useSelector((state) => state.login.value);
  const { data, isLoading } = useCommits({
    login: loginValue,
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
