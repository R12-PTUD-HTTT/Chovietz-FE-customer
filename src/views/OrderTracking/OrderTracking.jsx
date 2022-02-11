import React, { useState, useEffect } from 'react'
import {getOrderDetail} from "../../api/order"
import './ordertracking.css'
import CustomAlert from '../../component/Alert/CustomAlert';

export default function OrderTracking() {

    const orderId = "61ee05b6ef78e66f48ef3787";
    const [order, setOrder] = useState({});
    const [mess, setMess] = useState("");
    const [isAlert, setIsAlert] = useState(false);
    const [variant, setVariant] = useState("success");
    useEffect(async() => {
        try {
            const result = await getOrderDetail();
            const order = result.data;
            setOrder({
                ...order,
            })
        } catch (error) {
            console.log(error);
            setMess(error);
            setIsAlert(true);
        }
    },[]);
    return (
        <>
        <CustomAlert
        message={mess}
        isShow={isAlert}
        onClose={setIsAlert}
        variant={variant}/>
        <div class="container py-5">
            <article class="card shadow-lg">
                <header class="card-header"> My Orders / Tracking </header>
                <div class="card-body">
                    <h6>Order ID: {orderId}</h6>
                    <article class="card">
                        <div class="card-body row">
                            <div class="col"> <strong>Thời gian nhận hàng ước tính:</strong> <br />1/1/2022 7:00AM </div>
                            <div class="col"> <strong>Giao bởi:</strong> <br /> Nguyễn Phan, | <i class="fa fa-phone"></i> +1598675986 </div>
                            <div class="col"> <strong>Trạng thái:</strong> <br /> Đang giao hàng </div>
                            <div class="col"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
                        </div>
                    </article>
                    <div class="track">
                        <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Xác nhận đơn</span> </div>
                        <div class="step active"> <span class="icon"> <i class="fa fa-user"></i> </span> <span class="text"> Đóng gói </span> </div>
                        <div class="step active"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> Đang giao hàng </span> </div>
                        <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Giao thành công</span> </div>
                    </div>
                    <hr/>
                    <a href="#" class="btn btn-warning" data-abc="true"> <i class="fa fa-chevron-left"></i> Trở về</a>
                </div>
            </article>
        </div>
        </>
    )
}
