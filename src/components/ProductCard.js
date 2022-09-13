import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { additem } from "../reducers/cart";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isProductExist = cartItems.find((item) => item.id === product.id);

  const addItemtoCart = () => {
    dispatch(additem({ ...product, quantity: 1 }));
  };

  return (
    <>
      <Card
        style={{ width: "18rem", maxHeight: "500px" }}
        className="m-2 p-1 shadow"
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "250px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title style={{ color: "red" }}>USD {product.price}$</Card.Title>
          <Button variant="dark" onClick={() => navigate(`/${product.id}`)}>
            See More
          </Button>
          {isProductExist ? (
            <p className="text-danger">Added to cart</p>
          ) : (
            <Button className="m-1" variant="danger" onClick={addItemtoCart}>
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
