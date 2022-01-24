import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";

function ChangeReceiverInfor({ user, onUpdateUserSuccess }) {
  const [receiver, setReceiver] = useState({});
  useEffect(() => {
    if (user?.receiver) {
      setReceiver({ ...user.receiver });
    }
  }, [user?.receiver]);

  return (
    <div style={{ position: "relative", backgroundColor: "#fff" }}>
      <Card>
        <Modal.Dialog style={{ width: "500px", height: "" }}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Tên</Form.Label>
                  <Form.Control type="text" placeholder="Tên" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control type="text" placeholder="SDT" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Thành phố (Tỉnh)</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>TP Hồ Chí Minh</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Quận (huyện)</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Thủ Đức</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Phường (Xã)</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Linh Trung</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Địa chỉ (VD: 60 T đường Linh Trung)</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Card>
    </div>
  );
}

export default ChangeReceiverInfor;
