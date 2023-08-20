import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const server = process.env.REACT_APP_SERVER;
const SingleProduct = (props) => {
  const [products, setProducts] = useState([]);
  const id = useParams()['pid'];
  
 //  //use json

  useEffect(() => {
    axios.get('/iphones.json')
      .then((res) => res.data)
      .then((data) => {
        console.log("Data:", data?.products); // Log the received data
        if (Array.isArray(data?.products)) {
          const singleProduct = data.products.filter((x) => x.product_url === id);
          console.log("Filtered products:", singleProduct); // Log the filtered products
          setProducts(singleProduct);
        } else {
          console.log("Invalid data format");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);



  //using express

  // useEffect(() => {
  //   //const response = await axios.get('http://localhost:4550/iphone/');  
  //   fetch(`${server}iphone`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const productList = data;
  //       const singleProduct = productList.filter(
  //         (x) => x.product_url === id
  //       );
  //       setProducts(singleProduct);
  //       console.log(products);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);



  return (
    <div>
      <br /><br /><br /><br /><br />
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            // let productPage = "/iphone/" + id;
            let details = product.product_description;

            let productDiv = (
              <div key={id} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <div className="title-wraper bold">{title}</div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={img} alt={title} />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;