
const TableHeader = ({ columns, onSort, sortColumn }) => {

  console.log("Columns", columns)
  const raiseSort = (path) => {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fas fa-sort-up"></i>;
    return <i className="fas fa-sort-down"></i>;
  };

  return (
    <>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              key={column.path || column.key}
              onClick={() => raiseSort(column.path)}
            >
              {column.label}
              {renderSortIcon(column)}
            </th>
          ))}
          <th className="px-6 py-3 bg-gray-50"></th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
