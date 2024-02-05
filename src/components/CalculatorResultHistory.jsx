import { useSelector } from 'react-redux';

export default function CalculatorResultHistory() {
  const results = useSelector((state) => state.factorializeArray.value);
  return results.length ? (
    <div className="results">
      <p>results history:</p>
      <ol>
        {results.map((result, i) => (
          <li key={i}>{result}</li>
        ))}
      </ol>
    </div>
  ) : null;
}
