import Link from "next/link";
import { useEffect, useState } from "react";

/** Components */
import Table from "../common/table";
import Like from "../like/Like";

const CatalogTable = ({
  data,
  columns,
  sortColumn,
  onSort,
}) => {

  
  useEffect(()=> {

  }, []);
  return (
    <Table
      data={data}
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

CatalogTable.getInitialProps = async (ctx) => {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (product) => (
        <Link href={`/catalog/${product._id}?foo=bar`}>
          <a href="">{product.title}</a>
        </Link>
      ),
    },
    { path: "category.name", label: "Category" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (product) => (
        <Like liked={product.liked} onClick={() => onLike(product)} />
      ),
    },
    {
      key: "delete",
      content: (product) => (
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => onDeleteProduct(product)}
        >
          Delete
        </button>
      ),
    },
  ];
  return columns;
};
export default CatalogTable;
