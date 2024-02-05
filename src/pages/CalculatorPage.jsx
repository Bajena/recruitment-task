import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { calculateFactorialize } from '../reducers/factorializeReducer';

import FormErrors from '../components/FormErrors';
import CalculatorResultHistory from '../components/CalculatorResultHistory';

export default function CalculatorPage() {
  const factorializeValue = useSelector((state) => state.factorialize.value);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(calculateFactorialize(data.factorialize));
  };

  return (
    <div className="card">
      <h2>Factorialize calculator</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="type a number between 1-1000"
          min="1"
          max="1000"
          {...register('factorialize', {
            required: 'this field is required',
            min: {
              value: 0,
              message: 'This number is too small.',
            },
            max: {
              value: 1000,
              message: 'This number is too great.',
            },
          })}
        />
        <FormErrors errors={errors} />
        <input type="submit" />
      </form>
      {factorializeValue > 0 ? (
        <p>
          last result is: <strong>{factorializeValue}</strong>
        </p>
      ) : null}

      <CalculatorResultHistory />
    </div>
  );
}
