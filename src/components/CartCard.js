import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const dispath = useDispatch();
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => dispath(remove(product))}>Remove</button>
    </div>
  );
};
