import { useFormikContext } from "formik";

const Button = ({ label, type }) => {
  const { dirty } = useFormikContext();

  return (
    <button
      disabled={!dirty}
      type={type}
      className={`${
        !dirty ? "opacity-50 cursor-not-allowed" : ""
      } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
    >
      {label}
    </button>
  );
};

export default Button;
