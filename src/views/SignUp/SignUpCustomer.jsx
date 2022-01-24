import React from 'react';
import { Link } from 'react-router-dom';
import style from './SignUp.module.css';

export default function SignUpCustomer() {
  return (
    <>
      <main>
        <div className="container">
          <div className="cad card m-5">
            <h3 className="text-center mb-4">Đăng ký Mua hàng</h3>
            <form className="form-card" onsubmit="event.preventDefault()">
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Họ tên<span className="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder="Nhập họ tên của bạn"></input>
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Email<span className="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder="Nhập email của bạn"></input>
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    CMND/CCCD<span className="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder="Nhập CMND/CCCD"></input>
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Số điện thoại<span className="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder="Nhập số điện thoại"></input>
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Ngày sinh<span className="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder="dd/mm/yyyy"></input>
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Mật Khẩu<span className="text-danger"> *</span>
                  </label>
                  <input type="password" placeholder="Nhập mật khẩu"></input>
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Nhập lại mật khẩu<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                  ></input>
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-12 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Địa chỉ<span className="text-danger"> *</span>
                  </label>
                  <input type="text" placeholder=""></input>
                </div>
              </div>
              <div className="row justify-content-between text-center">
                <div className="form-check col-12 p-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  ></input>
                  <label className="form-check-label">
                    Tôi đồng ý với các{' '}
                    <Link
                      className="font-weight-bold "
                      to=""
                      title="Xem Hợp đồng kinh doanh"
                    >
                      <u>Điều khoản và chính sách của ChoVietz</u>
                    </Link>
                  </label>
                </div>
              </div>
              <div className="row justify-content-between text-center ">
                <div className="form-group col-12">
                  <button type="submit" className="btn  btn-success">
                    <div className="h5">Đăng kí tài khoản</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
