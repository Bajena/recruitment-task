import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { calculatePower } from '../reducer';

import FormErrors from '../components/FormErrors';

export default function CalculatorPage() {
  const powerValue = useSelector((state) => state.power.value);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(calculatePower(data.power));
  };

  return (
    <div className="card">
      <h2>Power calculator</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="type a number between 1-160"
          min="1"
          max="160"
          {...register('power', {
            required: 'this field is required',
            min: {
              value: 1,
              message: 'This number is too small.',
            },
            max: {
              value: 160,
              message: 'This number is too great.',
            },
          })}
        />
        <FormErrors errors={errors} />
        <input type="submit" />
      </form>
      {powerValue ? (
        <p>
          last result is: <strong>{powerValue}</strong>
        </p>
      ) : null}
    </div>
  );
}
