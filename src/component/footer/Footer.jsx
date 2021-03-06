import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <>
      <footer className="section-footer">
        <section className="footer-top padding-y bg-soft-green">
          <div className="container">
            <div className="row">
              <aside className="col-lg-4 col-md-12 mb-md-5 mb-sm-3 pl-md-5 pr-md-5">
                <article className="footer-widget mr-3">
                  <img
                    src="img/logo/logo.png"
                    className="footer-logo mb-3"
                    alt=""
                  />
                  <p className="mt-3">
                    Luôn cung cấp sản phẩm chất lượng, nguồn gốc rõ ràng, đảm
                    bảo an toàn vệ sinh thực phẩm.
                  </p>
                  <div className="footer-social">
                    <h4 className="mb-3 mt-4">Theo dõi</h4>
                    <Link title="Facebook" target="_blank" to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link title="Instagram" target="_blank" to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link title="Youtube" target="_blank" to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </article>
              </aside>
              <div className="col-lg-8 col-md-12 pt-md-3 pt-sm-3">
                <div className="row">
                  <aside className="col-lg-4 col-md-4 pl-lg-5 pl-xl-5 footer-widget">
                    <h6 className="title mb-5">Thông tin</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="#">Trang chủ</Link>
                      </li>
                      <li>
                        <Link to="#">Sản phẩm</Link>
                      </li>
                      <li>
                        <Link to="#">Liên hệ : 0315498744</Link>
                      </li>
                      <li>
                        <Link to="#">Đăng nhập</Link>
                      </li>
                    </ul>
                  </aside>
                  <aside className="col-lg-3 col-md-3 footer-widget">
                    <h6 className="title mb-5">Mở rộng</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="#">CSKH</Link>
                      </li>
                      <li>
                        <Link to="#">Thông tin vận chuyển</Link>
                      </li>
                      <li>
                        <Link to="#">Điều khoản - chính sách</Link>
                      </li>
                      <li>
                        <Link to="#">Đặt hàng &amp; Trả hàng</Link>
                      </li>
                    </ul>
                  </aside>
                  <aside className="col-lg-5 col-md-5 footer-widget">
                    <h6 className="title mb-5">Thông báo</h6>
                    <form className="form-inline mb-3">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="form-control"
                        name=""
                      />
                      <button className="btn mt-3 mb-4 btn-warning">Gửi</button>
                    </form>
                    <div className="payment-method">
                      <Link to="" className="mr-4">
                        <img src="img/payment/paypal.png" alt="" />
                      </Link>
                      <Link to="" className="mr-4">
                        <img src="img/payment/mastercard.png" alt="" />
                      </Link>
                      <Link to="" className="">
                        <img src="img/payment/visa.png" alt="" />
                      </Link>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-copyright bg-green">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Made with
                  <span>
                    <i className="fa fa-heart"></i>
                  </span>
                  love by
                  <Link target="_blank" to="https://themespell.com/">
                    Themespell
                  </Link>
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 text-right">
                <p>&copy; All right reserved.</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
