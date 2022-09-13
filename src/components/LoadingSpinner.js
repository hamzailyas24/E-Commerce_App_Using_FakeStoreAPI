import React from "react";
import { Container, Spinner } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <>
      <Container className="text-center">
        <Spinner animation="border" variant="dark" />
      </Container>
    </>
  );
}

export default LoadingSpinner;
