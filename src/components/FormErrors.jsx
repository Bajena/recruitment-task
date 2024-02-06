export default function FormErrors({ errors }) {
  return (
    <div className="form__group__errors">
      {Object.keys(errors).length
        ? Object.values(errors).map((error, i) => (
            <span key={i}>{error.message}</span>
          ))
        : null}
    </div>
  );
}
