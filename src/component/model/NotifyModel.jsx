import React from "react";
import { Button, Modal } from "react-bootstrap";

function NotifyModel({ message, onClickClose }) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "10000",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div style={{ width: "400px", marginTop: "0 auto" }}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{message}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={onClickClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default NotifyModel;
