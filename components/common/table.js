import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, columns, sortColumn, onSort }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {data.length > 0 && (
                <table className="min-w-full divide-y divide-gray-200">
                  <TableHeader
                    columns={columns}
                    onSort={onSort}
                    sortColumn={sortColumn}
                  />
                  <TableBody data={data} columns={columns} />
                </table>
              )}
              {data.length === 0 && (
                <span className="text-center">Not found</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
