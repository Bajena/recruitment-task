import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Errors from '../components/Errors';

export default function CalculatorPage() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const calculatePower = (n) => {
    if (n > 1) return n * calculatePower(n - 1);
    return 1;
  };
  const onSubmit = (data) => {
    setResult(calculatePower(data.power));
  };
  const [result, setResult] = useState(null);

  return (
    <div className="card">
      <h2>Power calculator</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="type a number between 1-1000"
          min="1"
          max="1000"
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
        <Errors errors={errors} />
        <input type="submit" />
      </form>

      {result ? (
        <p>
          last result is: <strong>{result}</strong>
        </p>
      ) : null}
    </div>
  );
}
