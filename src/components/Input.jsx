export default function Input({ label, isTextArea, ...props }) {
  return (
    <p>
      <label {...props}>{label}</label>
      {isTextArea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
