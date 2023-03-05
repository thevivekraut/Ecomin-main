import classes from "./ProductItem.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      imageUrl: props.imageUrl,
      quantity: 1,
      price: props.price,
    });
    console.log(cartCtx.items);
  };

  return (
    <div>
      <li className={classes.item}>
        <h3>{props.title}</h3>
        <header>
          <div>{<img src={props.imageUrl} alt="productImages"></img>}</div>
        </header>
        <div className={classes.pribtn}>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
          <button
            onClick={addToCartHandler}
            input={{ id: "amount_" + props.id }}
            className={classes.btn}
          >
            + Add
          </button>
        </div>
      </li>
    </div>
  );
};

export default ProductItem;
