

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layouts = () => {
  return (
    <Container>
        {children}
      {/* <Row>
        <Col>
          <h1>Header</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <p>Main content</p>
        </Col>
        <Col md={4}>
          <div>Sidebar</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer>Footer</footer>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Layouts;

