// Lift tickets and passes page

import { Col, Row, Container} from 'react-bootstrap';
import {Product} from "../components/Product"
import products from '../data/products.json';

export function Tickets() {
const filtered = products.filter((products) => products.type === "passes");

  return (
    <Container className="pt-3">
      <h1> Tickets and Passes </h1>
      <Row md={2} xs={1} lg={2}>
        {filtered.map((product) => (
          <Col key={product.id}><Product {...product}/></Col>
        ))}
      </Row>
    </Container>
  );
}
