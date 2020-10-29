/** Core React */
import React from "react";

/** JOI */
import Joi from "joi-browser";

/** Services */
import { getCategories } from "../../services/categoriesService";
import { getCatalog, saveProduct } from "../../services/productsService";

/** Component */
import Form from "../common/form";

class CatalogForm extends Form {
  state = {
    data: {
      title: "",
      categoryId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    categories: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    categoryId: Joi.string()
      .required()
      .label("category"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  async populateCategories() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }

  async populateProduct() {
    try {
      const productId = this.props.match.params.id;
      if (productId === "new") return;

      const { data: product } = await getCatalog(productId);
      this.setState({ data: this.mapToViewModel(product) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateCategories();
    await this.populateProduct();
  }

  mapToViewModel = product => {
    return {
      _id: product._id,
      title: product.title,
      categoryId: product.category._id,
      numberInStock: product.numberInStock,
      dailyRentalRate: product.dailyRentalRate
    };
  };

  doSubmit = () => {
    saveProduct(this.state.data);
    this.props.history.push("/catalog");
  };

  render = () => {
    return (
      <div className="container">
        <form onSubmit={this.handleSumbit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("categoryId", "Category", this.state.categories)}
          {this.renderInput("numberInStock", "Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  };
}

export default CatalogForm;
