const Select = ({ name, label, error, options, ...rest }) => {
  return (
    <>
      <select
        name={name}
        id={name}
        {...rest}
        className={`${
          error ? "border-red-500" : "border-gray-300"
        } block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" `}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <p class="text-red-500 text-xs italic">{error}</p>}
    </>
  );
};

export default Select;
