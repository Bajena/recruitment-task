import { useForm } from 'react-hook-form';
import FormErrors from '../components/FormErrors';
import { useProjects } from '../hooks/useProjects';
import SingleGithubProject from '../components/SingleGithubProject';
import Loading from '../components/Loading';

import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../reducers/loginReducer';

export default function ApiPage() {
  const loginValue = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { login: loginValue } });
  const { data, isLoading } = useProjects({
    login: loginValue,
    enabled: loginValue.length > 0,
  });

  const onSubmit = (data) => {
    dispatch(setLogin(data.login));
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
        <FormErrors errors={errors} />
        <input type="submit" />
      </form>
      {isLoading ? (
        <Loading variant="sm" />
      ) : data?.length ? (
        data.map((project) => (
          <SingleGithubProject key={project.id} projectData={project} />
        ))
      ) : (
        <p>No public projects available</p>
      )}
    </div>
  );
}
