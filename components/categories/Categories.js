const Category = ({ categories, currentCategory, onCategoryChange }) => {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="flex w-full max-w-xs p-4 bg-white">
        <div className="flex flex-col w-full">
          <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase my-px">
            Categories
          </span>

          {categories.map((category) => (
            <a
              key={category._id}
              href="#"
              className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100 my-px"
              onClick={() => onCategoryChange(category)}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
