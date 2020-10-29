import { useState, useEffect } from "react";

import MainLayout from "../../components/layouts/MainLayout";

/** Services */
import { getCategories } from "../../services/categoriesService";
import { getCatalog, deleteProduct } from "../../services/productsService";

/** Components */
import CatalogTable from "../../components/catalog/Table";
import Search from "../../components/common/search";
import Categories from "../../components/categories/Categories";
import Pagination, { paginate } from "../../components/pagination/Pagination";

/** Lodash */
import _ from "lodash";

/** Plugins */
import { toast } from "react-toastify";

const Catalog = ({ categories, catalog }) => {
  //console.log("render");

  let [searchQuery, setSearchQuery] = useState(),
    [currentCategoryId, setCurrentCategoryId] = useState(),
    [pageSize, setPageSize] = useState(3),
    [currentPage, setCurrentPage] = useState(1),
    [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" }),
    [totalCount, setTotalCount] = useState(),
    [data, setData] = useState(catalog);

    
  const getPagedData = () => {
    let newData = catalog; // записали исходный каталог
    console.log("NewData = ", newData)
    let resultData;
    
    // фильтрация по категории
    if (currentCategoryId) {
      resultData = newData.filter((product) => {
        product.category._id === currentCategoryId;
      });
      console.log("resultData = ", resultData)
    }

    // фильтрация по строке поиска
    if (searchQuery) {
      resultData = newData.filter(
        (product) =>
          product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
      );
    }

    // сортировка
    if (sortColumn) {
      resultData = _.orderBy(newData, [sortColumn.path], [sortColumn.order]);
    }

    let result = paginate(resultData, currentPage, pageSize);
    setData(result);
    setTotalCount(result.length);
  };

  const handleDeleteProduct = async (product) => {
    /* if (!user) {
      toast.error("Don't have enough permission");
      return null;
    } */

    const catalogAftreDelete = catalog.filter((m) => m._id !== product._id);

    this.setState({
      catalog: catalogAftreDelete,
    });

    try {
      await deleteProduct(product._id);
      toast.info("Product removed");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("Product already removed");
      }
    }
  };

  const handleLike = (product) => {
    const index = catalog.indexOf(product);
    catalog[index].liked = !catalog[index].liked;

    /* this.setState({
      catalog,
    }); */
  };

  const handleSort = (column) => {
    setSortColumn(column);
    getPagedData();
  };

  const handleCategory = (_id) => {
    setCurrentCategoryId(_id);
    getPagedData();
  };
  return (
    <MainLayout head_title="Catalog">
      {/* {posts.map((post) => (
        <Link href={`/post/[id]`} as={`/post/${post.id}`} key={post.id}>
          <a>{post.title}</a>
        </Link>
      ))} */}

      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <Categories
              categories={categories}
              currentCategory={currentCategoryId}
              onCategoryChange={({_id}) => handleCategory(_id)}
            />
          </div>
          <div className="col-span-3 py-4">
            {/* {user && (
              <NavLink to="/catalog/new" className="btn btn-primary mb-4">
                New product
              </NavLink>
            )} */}

            <Search
              value={searchQuery}
              onChange={(query) => setSearchQuery(query)}
            />

            <CatalogTable
              data={data}
              sortColumn={sortColumn}
              onSort={handleSort}
              onLike={handleLike}
              onDeleteProduct={handleDeleteProduct}
            />

            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

Catalog.getInitialProps = async (ctx) => {
  let { data } = await getCategories();
  const categories = [{ _id: "", name: "All" }, ...data];
  let { data: catalog } = await getCatalog();
  return { categories, catalog };
};

export default Catalog;
