import React from 'react'
import './ordertracking.css'

export default function OrderTracking() {
    return (
        <div class="container py-5">
            <article class="card">
                <header class="card-header"> My Orders / Tracking </header>
                <div class="card-body">
                    <h6>Order ID: OD45345345435</h6>
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
    )
}
