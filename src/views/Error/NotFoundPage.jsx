import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "../../assets/images/notFound.png";
import style from "./custom.module.css";
const NotFoundPage = () => {
  return (
    <>
      <div className="container text-center">
        <div className="logo-notFound">
          <img src={notFound} alt="" style={{ width: "30%" }} />
        </div>
        <div className="content-404">
          <h5>Trang truy cập không tồn tại</h5>
          <Button variant="success">
            <Link to="/" className={style.returnButton}>
              Trở lại trang chủ
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
