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
      <form
        autoComplete="off"
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form__group">
          <label className="form__group__label" htmlFor="factorialize">
            Number between 0-10000
          </label>
          <input
            id="factorialize"
            className="form__group__input"
            {...register('factorialize', {
              required: 'This field is required',
              pattern: {
                value: /^\d+$/,
                message: 'Field value must be a number',
              },
              min: {
                value: 0,
                message: 'This number is too small.',
              },
              max: {
                value: 10000,
                message: 'This number is too large',
              },
            })}
          />
          <FormErrors errors={errors} />
        </div>
        <button className="form__submit" type="submit">
          Calculate factorial
        </button>
      </form>
      {factorializeValue > 0 ? (
        <div className="result-info">
          <span className="result-info__text">
            last result is:
            <p className="result-info__text--highlighted">
              {factorializeValue}
            </p>
          </span>
        </div>
      ) : null}

      <CalculatorResultHistory />
    </>
  );
}
