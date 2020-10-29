import { useFormikContext } from "formik";

const Input = ({ name, ...props }) => {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    values,
  } = useFormikContext();

  return (
    <>
      <input
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        {...props}
        className={`${
          errors[name] ? "border-red-500" : "border-gray-300"
        } appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`} 
      />
      {errors[name] && <p className="text-red-500 text-xs italic">{errors[name]}</p>}
    </>
  );
};

export default Input;
