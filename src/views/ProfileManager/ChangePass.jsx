import React from 'react';
import './styleProfile.css';
import Subnav from '../../component/Subnav/Subnav';

export default function ChangePass() {
    return (
        <div className="row body-page">
            <div className="col-sm-4">
                <Subnav active="changePass"/>
            </div>
            <div className="col-sm-8">
                <div className="profile-main">
                    <div className="profile-header">
                        <h1 className="header-title">Đổi Mật Khẩu</h1>
                        <div className="header-content">Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
                    </div>
                    <div className="profile-body">
                        <div className="profile-body-content">
                            <form>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Mật Khẩu Hiện Tại</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="password" className="form-control" maxLength="255" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Mật Khẩu Mới</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="password" className="form-control" maxLength="255" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Xác Nhận Mật Khẩu</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="password" className="form-control" maxLength="255" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-save">
                                    <button className="btn btn-primary" type="submit">Xác nhận</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}