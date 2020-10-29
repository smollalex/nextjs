const Search = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search by title..."
      onChange={(e) => onChange(e.currentTarget.value)}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-4"
    />
  );
};

export default Search;
