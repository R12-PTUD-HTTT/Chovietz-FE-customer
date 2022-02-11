import React from 'react';
import './styleProfile.css';
import Subnav from '../../component/Subnav/Subnav';
import { useState } from 'react';
import { changePassword } from "../../api/user";
import CustomAlert from '../../component/Alert/CustomAlert';


export default function ChangePass() {
    const [mess, setMess] = useState("");
    const [isAlert, setIsAlert] = useState(false);
    const [variant, setVariant] = useState("success");
    const [data, setData] = useState({
        current: "",
        newpass: "",
        comfirm: "",
    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...data, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await changePassword(data);
            if(result.status === 200){
                setMess("Thay đổi mật khẩu thành công");
                setIsAlert(true);
            }
            else {
                setMess(result.data.message);
                setIsAlert(true);
            }
            setData({
                current: "",
                newpass: "",
                comfirm: "",
            })
        } catch (error) {
            setMess(error);
            setVariant("danger");
            setIsAlert(true);
        }
    }
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
                            <form method='put' onSubmit={handleSubmit}>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Mật Khẩu Hiện Tại</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="password" className="form-control" maxLength="255" name='current' value={data.current} onChange={handleChange}/>
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
                                                <input type="password" className="form-control" maxLength="255" name='newpass' value={data.newpass} onChange={handleChange}/>
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
                                                <input type="password" className="form-control" maxLength="255" name='comfirm' value={data.comfirm} onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-save">
                                    <button className="btn btn-primary" type="submit">Xác nhận</button>
                                </div>
                            </form>
                        </div>
                        <CustomAlert
                        message={mess}
                        isShow={isAlert}
                        onClose={setIsAlert}
                        variant={variant}/>
                    </div>
                </div>
            </div>
        </div>
    )
}