import { useSelector } from 'react-redux';

export default function CalculatorResultHistory() {
  const results = useSelector((state) => state.factorializeArray.value);
  return results.length ? (
    <div className="previous_calculations">
      <p className="previous_calculations__title">Calculations history:</p>
      <ol className="previous_calculations__list">
        {results.map((result, i) => (
          <li className="previous_calculations__list__element" key={i}>
            {result}
          </li>
        ))}
      </ol>
    </div>
  ) : null;
}
