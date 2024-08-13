import React, { useState, useEffect } from "react";
import { getAllProducts } from "../services/ProductService";
import { getCoverImageByProductId } from "../services/ProductImage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddToCartButton from "./AddToCartButton";

export default function Product() {

  return (
    <div className="container">
      <h1 className="text-center my-4">Products available to Buy</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="container">
        <hr />
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div
                className="card mb-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ backgroundColor: "white" }}
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={coverImages[product.id] || ""}
                    className="card-img-top"
                    alt={product.productName}
                    style={{ height: "300px" }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title"> {product.productName}</h5>
                  <p className="card-text">
                    <span>Brand: </span>
                    {product.brand}
                  </p>
                  <p className="card-text text-muted">
                    ₹{product.price} <span> only</span>
                  </p>
                  {product.inventory === 0 && (
                    <div>
                      <p style={{ color: "red" }}>Out of Stock</p>
                    </div>
                  )}
                  {product.inventory > 0 && (
                    <div>
                      <button
                        onClick={() => buyProduct(product.id)} // Pass a function reference
                        className="btn btn-success me-3"
                        style={{ borderRadius: "20px" }}
                      >
                        Buy Now
                      </button>
                      
                      <AddToCartButton  
                    productId={product.id}
                    userId={userId}
                    quantity={1}/>

                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
