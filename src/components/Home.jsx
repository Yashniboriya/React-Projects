import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const img3 =
  "https://m.media-amazon.com/images/I/51XGrwhczrL._SX300_SY300_QL70_FMwebp_.jpg";

const img4 =
  "https://images-eu.ssl-images-amazon.com/images/I/41zaQIbMRCL._AC_SX184_.jpg";

const img5 =
  "https://m.media-amazon.com/images/I/61j8iInsZhL._AC_UL600_FMwebp_QL65_.jpg";

const img6 = "https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Watch",
      price: 11999,
      imgSrc: img3,
      id: "third",
    },
    {
      name: "Laptop bag",
      price: 200,
      imgSrc: img4,
      id: "forth",
    },
    {
      name: "Hoodie",
      price: 100,
      imgSrc: img5,
      id: "fifth",
    },
    {
      name: "Apple iPhone 14",
      price: 4500,
      imgSrc: img6,
      id: "sixth",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
