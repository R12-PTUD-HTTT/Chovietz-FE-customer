import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.module.css';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import { SignUp } from '../../api/user';

export default function SignUpCustomer() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [cmnd, setCmnd] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    if (password === rePassword) {
      event.preventDefault();
      try {
        const res = await SignUp({
          username: username,
          password: password,
          email: email,
          cmnd: cmnd,
          address: address,
          birthday: birthday,
          name: name,
          phoneNumber: phone,
        });
        console.log(res);
        if (res.status === 200) {
          alert('Đăng ký thành công');
        }
      } catch (error) {
        console.log('Failed to sign up', error);
      }
    } else {
      alert('Mật khẩu không khớp');
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="cad card m-5">
            <h3 className="text-center mb-4">Đăng ký Mua hàng</h3>
            <div className="form-card">
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Tên đăng nhập<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Họ tên<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ tên của bạn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    CMND/CCCD<span className="text-danger"> *</span>
                  </label>
                  <input
                    // style={{ width: '50%' }}
                    type="text"
                    placeholder="Nhập CMND/CCCD"
                    value={cmnd}
                    onChange={(e) => setCmnd(e.target.value)}
                  />
                  <input
                    style={{ width: '50%', float: 'right' }}
                    type="file"
                    placeholder="Tải hình ảnh CMND"
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Số điện thoại<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Ngày sinh<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Email<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Mật Khẩu<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Nhập lại mật khẩu
                    <span className="text-danger"> *</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    value={rePassword}
                    onChange={(e) => {
                      setRePassword(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-12 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Địa chỉ<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập địa chỉ"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
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
                  <button onClick={handleSubmit} className="btn  btn-success">
                    <div className="h5">Đăng kí tài khoản</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
