import React from 'react';
import './styleProfile.css';
import Subnav from '../../component/Subnav/Subnav';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectIsLogin,  selectUserId} from "../../redux/selectors/userSelector";
import { fetchUserProfile, updateUserProfile } from "../../api/user";
import CustomAlert from '../../component/Alert/CustomAlert';

export default function Profile() {
    const [mess, setMess] = useState("");
    const [isAlert, setIsAlert] = useState(false);
    const [variant, setVariant] = useState("success");
    const [data, setData] = useState({
        name: "",
        gender: "Nam",
        date_of_birth: "",
        email: "",
        phoneNumber: "",
    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(`${name} ${value}`);
        setData({ ...data, [name]: value });
      };
    useEffect(async ()=>{
        try {
            const profileRes = await fetchUserProfile();
            const profile = profileRes.data;
             console.log(profile);
            setData({...data,
                name: profile.name,
                gender: profile.gender,
                date_of_birth: profile.date_of_birth.substring(0, 10),
                email: profile.email,
                phoneNumber: profile.phoneNumber})
        } catch (error) {
            console.log(error);
        }
    },[]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data);
        try {
            const result = await updateUserProfile(data);
            if(result.status === 200){
                setMess("Thay đổi thông tin thành công");
                setIsAlert(true);
            }
        } catch (error) {
            console.log(error);
        }
    }
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
                            <form method='put' onSubmit={handleSubmit}>
                                <div className="body-content">
                                    <div className="content-name">
                                        <label>Tên</label>
                                    </div>
                                    <div className="content-value">
                                        <div className="input-with-validator-wrapper">
                                            <div className="input-with-validator">
                                                <input type="text" className="form-control" maxLength="255" name='name' onChange={handleChange} value={data.name || ""}/>
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
                                            <input type="radio" id="customRadioInline1" name="gender" className="custom-control-input" onChange={handleChange} checked={data.gender === "Nam"} value={"Nam"}/>
                                            <label className="custom-control-label" htmlFor="customRadioInline1">Nam</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline2" name="gender" className="custom-control-input" onChange={handleChange} checked={data.gender === "Nữ"} value={"Nữ"}/>
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
                                                <input type="date" className="form-control" maxLength="255" name='date_of_birth' onChange={handleChange} value={data.date_of_birth || ""}/>
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
                                                <input type="email" className="form-control" maxLength="255" name='email' onChange={handleChange} value={data.email || ""}/>
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
                                                <input type="text" className="form-control" maxLength="255" name='phoneNumber' onChange={handleChange} value={data.phoneNumber || ""}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-save">
                                    <button className="btn btn-primary" type="submit">Thay đổi</button>
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