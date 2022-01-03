import React from 'react';
import './styleProfile.css';
import Subnav from '../../component/Subnav/Subnav';

export default function Profile() {
    return (
        <div className="row body-page">
            <div className="col-sm-4">
                <Subnav active="profile"/>
            </div>
            <div className="col-sm-8">
                <div className="profile-main">
                    <div className="profile-header">
                        <h1 className="header-title">Hồ sơ của tôi</h1>
                        <div className="header-content">Quản lý thông tin cá nhân</div>
                    </div>
                    <div className="profile-body">
                        <div className="profile-body-content">
                            <form>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Tên</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="text" className="form-control" maxLength="255" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Giới tính</label>
                                    </div>
                                    <div className="content-value mx-4">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadioInline1">Nam</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadioInline2">Nữ</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Ngày sinh</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="text" className="form-control" maxLength="255" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Email</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="email" className="form-control" maxLength="255" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Số điện thoại</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="text" className="form-control" maxLength="255" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-save">
                                    <button className="btn btn-primary" type="submit">Thay đổi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}