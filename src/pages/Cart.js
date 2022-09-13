import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../reducers/cart";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const onQunatityChange = (e, id) => {
    const quantity = Number(e.target.value);
    dispatch(updateQuantity({ quantity, id }));
  };

  const removeCartitem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Container>
        {cartItems.map((item) => {
          return (
            <Card key={item.id} className="my-3 p-2">
              <Row>
                <Col>
                  <img
                    src={item.image}
                    height={200}
                    width={200}
                    alt="product"
                  />
                </Col>
                <Col md={9}>
                  <h4>{item.title}</h4>
                  <strong>
                    <p> Price: <span className="text-danger"> ${item.price} </span> </p>
                  </strong>
                  <span>Quantity: </span>
                  <input
                    onChange={(e) => onQunatityChange(e, item.id)}
                    value={item.quantity}
                  />
                  <Button
                    variant="danger"
                    size="sm"
                    className="mx-2"
                    onClick={() => removeCartitem(item.id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

export default Cart;
