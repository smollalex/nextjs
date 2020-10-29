import { useFormikContext } from "formik";

const Checkbox = ({ name, label }) => {
  const { setFieldValue, values } = useFormikContext();
  return (
    <>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            value={values[name]}
            type="checkbox"
            onChange={(e) => setFieldValue(name, e.target.checked)}
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
        </div>
        <div className="ml-3 text-sm leading-5">
          <label htmlFor="comments" className="font-medium text-gray-700">
            {label}
          </label>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
