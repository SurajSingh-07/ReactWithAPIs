import { useState, useEffect } from "react";
import axios from "../utils/axios";

function Show() {
  const [product, setProduct] = useState([]);

  const getProducts = () => {
    // const api = "https://fakestoreapi.com/products";

    axios
      .get("/products")
      .then((product) => {
        console.log(product);
        setProduct(product.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
      {/* <button
        onClick={getProducts}
        className="text-xl m-10 bg-slate-500 text-white rounded-md py-1 px-3"
      >
        Get Products
      </button> */}

      {/* <button
        onClick={setProducts}
        className="text-xl m-10 bg-slate-700 text-white rounded-md py-1 px-3 "
      >
        Set Products
      </button> */}

      <hr className="border-b-[1px] border-black mb-5" />

      {product.length > 0 ? (
        product.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-red-500 text-white mt-2 px-3 py-1 font-semibold"
            >
              {item.title}
            </li>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Show;
