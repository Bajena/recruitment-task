export default function Errors({ errors }) {
  return Object.keys(errors).length ? (
    <div className="errors">
      {Object.values(errors).map((error, i) => (
        <span key={i}>{error.message}</span>
      ))}
    </div>
  ) : null;
}
