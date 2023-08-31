import { Field } from "formik";
import Label from "../Label/Label";
interface InputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean | undefined;
}
const InputField = ({ name, label, placeholder, required }: InputFieldProps) => {
  return (
    <Field
      name={name}
      render={({ field, form: { touched, errors } }) => (
        <div>
          <Label required={required}>{label}</Label>
          <input {...field} type="text" placeholder={placeholder} className={`border h-8 w-full rounded pl-1`} />
          {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
      )}
    />
  )
}

export default InputField