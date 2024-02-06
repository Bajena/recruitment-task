import { useCommits } from '../hooks/useCommits';
import { useSelector } from 'react-redux';

import Loading from './Loading';
export default function CommitList({ projectName }) {
  const loginValue = useSelector((state) => state.login.value);
  const { data, isLoading } = useCommits({
    login: loginValue,
    repo: projectName,
  });

  return isLoading ? (
    <Loading variant="sm" />
  ) : data?.length ? (
    <div className="projects-container__project__commits-container">
      <ul>
        {data.map((el) => (
          <li
            className="projects-container__project__commits-container__list__element"
            key={el.node_id}
          >
            {el.commit.message}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>no commits available</p>
  );
}
