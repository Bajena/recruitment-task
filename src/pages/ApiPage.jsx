import { useForm } from 'react-hook-form';
import Errors from '../components/Errors';

export default function ApiPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
  };

  return (
    <div className="card">
      <h2>Github API</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="type a github login"
          {...register('power', {
            required: 'this field is required',
          })}
        />
        <Errors errors={errors} />
        <input type="submit" />
      </form>
    </div>
  );
}
