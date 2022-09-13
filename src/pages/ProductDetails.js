import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function ProductDetails() {
  const { productID } = useParams();

  const [productDetails, setproductDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productID}`
      );
      const _productDetails = response.data;
      console.log(_productDetails);
      setproductDetails(_productDetails);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <>
      <Container className="mt-4" fluid>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Row className="p-5">
            <Col>
              <img
                src={productDetails.image}
                alt={productDetails.title}
                height={300}
              />
            </Col>

            <Col md={10} className="mx-3">
              <h2>{productDetails.title}</h2>
              <h3 className="text-danger">{productDetails.price}</h3>
              <p>{productDetails.description}</p>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default ProductDetails;
