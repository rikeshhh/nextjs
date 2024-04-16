export default function Input({
  name,
  register,
  errors,
  placeholder,
  type,
  accept,
  minLength,
  maxLength,
  pattern,
  message,
}) {
  return (
    <>
      <input
        type={type}
        {...register(name, {
          required: true,
          minLength: minLength,
          maxLength: maxLength,
          pattern: pattern,
        })}
        placeholder={placeholder}
        accept={accept}
      />
      {errors[name] && ( 
        <p className="text-red-500">{errors[name].message}</p>
      )}
    </>
  );
}
