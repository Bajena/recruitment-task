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
    <>
      <p className="section-container__description">Calculator</p>
      <hr className="section-container__separator" />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label className="form__group__label" htmlFor="factorialize">
            number between 1-1000
          </label>
          <input
            type="number"
            min="1"
            max="1000"
            className="form__group__input"
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
        </div>
        <button className="form__submit" type="submit">
          Calculate
        </button>
      </form>
      {factorializeValue > 0 ? (
        <p>
          last result is: <strong>{factorializeValue}</strong>
        </p>
      ) : null}

      <CalculatorResultHistory />
    </>
  );
}
