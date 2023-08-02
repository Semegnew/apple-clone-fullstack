import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
//const serverIp = process.env.REACT_APP_IP_ADDRESS;
//const serverPort = process.env.REACT_APP_SERVER_PORT;
const server = process.env.REACT_APP_SERVER;
function Iphone() {
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    console.log("https://apple-clone-full-stack.onrender.com/iphone");
    fetchData();
  }, []);

  //using json file
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("/iphones.json");
  //     setProducts(response.data.products);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //using express server
 const fetchData = async () => {
   try {
    //const response = await axios.get('http://localhost:4550/iphone/');  
    const response = await axios.get(server);
     const jsonData = response.data;
    setProducts(jsonData);
  } catch (error) {
    console.error(error);
  }
};
 
  let order = 1;
  return (
    <div>
      <br /><br /><br /><br />
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products && products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iphone/" + id;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
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
}
export default Iphone;