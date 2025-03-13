import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";
import { useEffect } from "react";

export const ProductCard = ({ product }) => {
  const dispath = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, price, image } = product;

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === id);
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispath(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispath(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
