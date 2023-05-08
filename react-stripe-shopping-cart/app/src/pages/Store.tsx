// Store page used for ski related gear

import { Col, Row, Container} from 'react-bootstrap';
import {Product} from "../components/Product"
import products from '../data/products.json';

export function Store() {
const filtered = products.filter((products) => products.type === "store");

  return (
    <Container className="pt-3">
      <h1 className="gap-3"> Store </h1>
      <Row md={2} xs={1} lg={3}>
        {filtered.map((product) => (
          <Col key={product.id}><Product {...product}/></Col>
        ))}
      </Row>
    </Container>
  );
}
