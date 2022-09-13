import React from "react";
import { Badge, Button, Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AppNavbar({ title }) {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const calculateTotalPrice = () => {
    if (cartItems) {
      const total = cartItems.reduce(
        (currValue, item) => currValue + item.price * item.quantity,
        0
      );
      return total.toFixed(2);
    }
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          {" "}
          {title}{" "}
        </Navbar.Brand>
        <Button
          onClick={() => navigate("/cart")}
          className="fw-bold text-white bg-dark border-white shadow-none rounded rounded-0"
        >
          {" "}
          Your Cart <Badge> {cartItems.length} </Badge>{" "}
        </Button>
        <h5 className="text-white"> Total: ${calculateTotalPrice()} </h5>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
