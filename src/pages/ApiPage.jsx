import { useForm } from 'react-hook-form';
import Errors from '../components/Errors';
import { useGetProjects } from '../hooks/useGetProjects';
import { useState } from 'react';
import SingleGithubProject from '../components/SingleGithubProject';

export default function ApiPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [params, setParams] = useState({ login: '', enabled: false });
  const { data, isLoading } = useGetProjects(params);

  const onSubmit = (data) => {
    setParams({ login: data.login, enabled: true });
  };

  return (
    <div className="card">
      <h2>Github API</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="type a github login"
          {...register('login', {
            required: 'this field is required',
          })}
        />
        <Errors errors={errors} />
        <input type="submit" />
      </form>
      {params.enabled ? (
        isLoading ? (
          <p>loading...</p>
        ) : data?.length ? (
          data.map((project) => (
            <SingleGithubProject key={project.id} projectData={project} />
          ))
        ) : (
          <p>No public projects available</p>
        )
      ) : null}
    </div>
  );
}
