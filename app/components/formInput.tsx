import { useField } from "remix-validated-form";

type inputProps = {
  name: string;
  label: string;
};

export const FormInput = ({ name, label }: inputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...getInputProps({ id: name })} />
      {error && <span className="my-error-class">{error}</span>}
    </div>
  );
};
