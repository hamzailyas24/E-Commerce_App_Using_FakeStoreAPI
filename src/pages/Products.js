import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      const _products = response.data;
      console.log(_products);
      setProducts(_products);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Container className="mt-4 mb-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Row>
            {products.map((product) => {
              return (
                <Col key={product.id}>
                  <ProductCard product={product} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Products;
