import React from 'react'
import './checkout.css'
import { Link } from 'react-router-dom'
export default function Checkout() {
    return (
        <div className="container my-5 ">
            <div className="row justify-content-center ">
                <div className="col-xl-12">
                    <div className="card shadow-lg ">
                        <div className="row mx-auto justify-content-center text-center">
                            <div className="col-12 mt-3 ">
                                <nav aria-label="breadcrumb" className="second ">
                                    <ol className="breadcrumb indigo lighten-6 first ">
                                        <li className="breadcrumb-item font-weight-bold "><Link className="black-text text-uppercase " to="#"><span className="mr-md-3 mr-1">BACK TO SHOP</span></Link><i className="fa fa-angle-double-right " aria-hidden="true"></i></li>
                                        <li className="breadcrumb-item font-weight-bold"><Link className="black-text text-uppercase" to="#"><span className="mr-md-3 mr-1">Cart</span></Link><i className="fa fa-angle-double-right text-uppercase " aria-hidden="true"></i></li>
                                        <li className="breadcrumb-item font-weight-bold"><Link className="black-text text-uppercase active-2" to="#"><span className="mr-md-3 mr-1">CHECKOUT</span></Link></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <h2 className="card-title my-2 ml-4r space">Checkout</h2>
                        <div className="row justify-content-around text-dark">
                            <div className="col-md-5">
                                <div className="card border-0">
                                    <div className="card-header pb-0">
                                        <p className="card-text mt-4 space">THÔNG TIN GIAO HÀNG <Link className=" small ml-3 text-primary"> Chỉnh sửa</Link></p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row justify-content-between">
                                            <div className="col-auto mt-0">
                                                <p className='mb-1'><b>Người nhận hàng: Võ Ngọc Đức</b></p>
                                                <p className='mb-1'><b>SDT: 0123478955</b></p>
                                                <p className='mb-1'><b>Địa chỉ: 123/11 Nguyễn Biểu, Quận 5, TP Hồ Chí Minh</b> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0">
                                    <div className="card-header pb-0">
                                        <p className="card-text mt-4 space">PHƯƠNG THỨC THANH TOÁN</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row justify-content-between">
                                            <div className="col-auto mt-0">
                                                <div className="form-check form-check-inline border border-success rounded-pill px-3 py-2 mb-2">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label className="form-check-label ml-3" for="inlineRadio1"><b>Thanh toán khi nhận hàng</b></label>
                                                </div>
                                            </div>
                                            <div className="col-auto mt-0">
                                                <div className="form-check form-check-inline border border-success rounded-pill px-3 py-2 mb-2">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                    <label className="form-check-label ml-3" for="inlineRadio2"><b>Thẻ ngân hàng</b></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="card border-0 ">
                                    <div className="card-header pb-0">
                                        <p className="card-text mt-4 space">ĐƠN CỦA BẠN <Link className=" small ml-3 text-primary"> Chỉnh sửa</Link> </p>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="row justify-content-between">
                                            <div className="col-auto col-md-7">
                                                <div className="media flex-column flex-sm-row"> <img className=" img-fluid" src="https://i.imgur.com/6oHix28.jpg" width="62" height="62" />
                                                    <div className="media-body my-auto">
                                                        <div className="row ">
                                                            <div className="col-auto">
                                                                <p className="mb-0"><b>Tên sản phẩm</b></p><small className="text-muted">descripton</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" pl-0 flex-sm-col col-auto my-auto">
                                                <p className="boxed-1">2</p>
                                            </div>
                                            <div className=" pl-0 flex-sm-col col-md-3 my-auto text-right">
                                                <p><b>123000 VND</b></p>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="row justify-content-between">
                                            <div className="col-auto col-md-7">
                                                <div className="media flex-column flex-sm-row"> <img className=" img-fluid " src="https://i.imgur.com/9MHvALb.jpg" width="62" height="62" />
                                                    <div className="media-body my-auto">
                                                        <div className="row ">
                                                            <div className="col">
                                                                <p className="mb-0"><b>EC-GO Bag Standard</b></p><small className="text-muted">2 Week Subscription</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-0 flex-sm-col col-auto my-auto">
                                                <p className="boxed">3</p>
                                            </div>
                                            <div className="pl-0 flex-sm-col col-md-3 my-auto text-right">
                                                <p><b>179000 VND</b></p>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="row justify-content-between">
                                            <div className="col-auto col-md-7">
                                                <div className="media flex-column flex-sm-row"> <img className=" img-fluid " src="https://i.imgur.com/6oHix28.jpg" width="62" height="62" />
                                                    <div className="media-body my-auto">
                                                        <div className="row ">
                                                            <div className="col">
                                                                <p className="mb-0"><b>EC-GO Bag Standard</b></p><small className="text-muted">2 Week Subscription</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pl-0 flex-sm-col col-auto my-auto">
                                                <p className="boxed-1">2</p>
                                            </div>
                                            <div className="pl-0 flex-sm-col col-md-3 my-auto text-right">
                                                <p><b>1234500 VND</b></p>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="row ">
                                            <div className="col">
                                                <div className="row justify-content-between">
                                                    <div className="col-4">
                                                        <p className="mb-1"><b>Tổng tiền hàng</b></p>
                                                    </div>
                                                    <div className="flex-sm-col col-auto">
                                                        <p className="mb-1"><b>179 VND</b></p>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-between">
                                                    <div className="col">
                                                        <p className="mb-1"><b>Chi phí vận chuyển</b></p>
                                                    </div>
                                                    <div className="flex-sm-col col-auto">
                                                        <p className="mb-1"><b>0 VND</b></p>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-between">
                                                    <div className="col-4">
                                                        <p><b>Tổng thanh toán</b></p>
                                                    </div>
                                                    <div className="flex-sm-col col-auto">
                                                        <p className="mb-1"><b>537 VND</b></p>
                                                    </div>
                                                </div>
                                                <hr className="my-0" />
                                            </div>
                                        </div>
                                        <div className="row mb-5 mt-4 ">
                                            <div className="col-md-7 col-lg-6 mx-auto"><button type="button" className="btn btn-block btn-outline-primary btn-lg">Đặt đơn</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
