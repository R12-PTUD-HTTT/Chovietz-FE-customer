import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import food from "../../../../assets/images/food.png";

function OrderItem({ order }) {
  return (
    <React.Fragment>
      <Card style={{ marginTop: "10px" }}>
        <Card.Header as="h5">
          {order.shop.store_name} - {order.created_Date}
        </Card.Header>
        <Card.Body>
          {order.products?.map((product, index) => (
            <Row key={index} style={{ marginTop: "5px" }}>
              <Col xs={2}>
                <img src={food} alt="" />
              </Col>
              <Col xs={10}>
                <Row>
                  <Col>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Col>
                  <Col>Đ {product.price}</Col>
                  <Col>Số lượng: {product.quantity}</Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default OrderItem;
