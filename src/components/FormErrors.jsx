export default function FormErrors({ errors }) {
  return Object.keys(errors).length ? (
    <div className="form__group__errors">
      {Object.values(errors).map((error, i) => (
        <span key={i}>{error.message}</span>
      ))}
    </div>
  ) : null;
}
