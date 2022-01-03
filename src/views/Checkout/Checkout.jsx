import React from 'react'
import './checkout.css'
import { Link } from 'react-router-dom'
export default function Checkout() {
    return (
        <div class="container my-5 ">
            <div class="row justify-content-center ">
                <div class="col-xl-12">
                    <div class="card shadow-lg ">
                        <div class="row mx-auto justify-content-center text-center">
                            <div class="col-12 mt-3 ">
                                <nav aria-label="breadcrumb" class="second ">
                                    <ol class="breadcrumb indigo lighten-6 first ">
                                        <li class="breadcrumb-item font-weight-bold "><a class="black-text text-uppercase " href="#"><span class="mr-md-3 mr-1">BACK TO SHOP</span></a><i class="fa fa-angle-double-right " aria-hidden="true"></i></li>
                                        <li class="breadcrumb-item font-weight-bold"><a class="black-text text-uppercase" href="#"><span class="mr-md-3 mr-1">Cart</span></a><i class="fa fa-angle-double-right text-uppercase " aria-hidden="true"></i></li>
                                        <li class="breadcrumb-item font-weight-bold"><a class="black-text text-uppercase active-2" href="#"><span class="mr-md-3 mr-1">CHECKOUT</span></a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <h2 class="card-title my-2 ml-4r space">Checkout</h2>
                        <div class="row justify-content-around">
                            <div class="col-md-5">
                                <div class="card border-0">
                                    <div class="card-header pb-0">
                                        <p class="card-text text-muted mt-4 space">THÔNG TIN GIAO HÀNG</p>
                                    </div>
                                    <div class="card-body">
                                        <div class="row justify-content-between">
                                            <div class="col-auto mt-0">
                                                <p><b>BBBootstrap Team Vasant Vihar 110020 New Delhi India</b></p>
                                            </div>
                                            <div class="col-auto">
                                                <p><b>BBBootstrap@gmail.com</b> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border-0">
                                    <div class="card-header pb-0">
                                        <p class="card-text text-muted mt-4 space">PHƯƠNG THỨC THANH TOÁN</p>
                                    </div>
                                    <div class="card-body">
                                        <div class="row justify-content-between">
                                            <div class="col-auto mt-0">
                                                <p><b>BBBootstrap Team Vasant Vihar 110020 New Delhi India</b></p>
                                            </div>
                                            <div class="col-auto">
                                                <p><b>BBBootstrap@gmail.com</b> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="card border-0 ">
                                    <div class="card-header pb-0">
                                        <p class="card-text text-muted mt-4 space">ĐƠN CỦA BẠN <Link class=" small text-muted ml-3"> Chỉnh sửa</Link> </p>
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="row justify-content-between">
                                            <div class="col-auto col-md-7">
                                                <div class="media flex-column flex-sm-row"> <img class=" img-fluid" src="https://i.imgur.com/6oHix28.jpg" width="62" height="62"/>
                                                    <div class="media-body my-auto">
                                                        <div class="row ">
                                                            <div class="col-auto">
                                                                <p class="mb-0"><b>Tên sản phẩm</b></p><small class="text-muted">descripton</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class=" pl-0 flex-sm-col col-auto my-auto">
                                                <p class="boxed-1">2</p>
                                            </div>
                                            <div class=" pl-0 flex-sm-col col-md-3 my-auto text-right">
                                                <p><b>123000 VND</b></p>
                                            </div>
                                        </div>
                                        <hr class="my-2"/>
                                            <div class="row justify-content-between">
                                                <div class="col-auto col-md-7">
                                                    <div class="media flex-column flex-sm-row"> <img class=" img-fluid " src="https://i.imgur.com/9MHvALb.jpg" width="62" height="62"/>
                                                        <div class="media-body my-auto">
                                                            <div class="row ">
                                                                <div class="col">
                                                                    <p class="mb-0"><b>EC-GO Bag Standard</b></p><small class="text-muted">2 Week Subscription</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="pl-0 flex-sm-col col-auto my-auto">
                                                    <p class="boxed">3</p>
                                                </div>
                                                <div class="pl-0 flex-sm-col col-md-3 my-auto text-right">
                                                    <p><b>179000 VND</b></p>
                                                </div>
                                            </div>
                                            <hr class="my-2"/>
                                                <div class="row justify-content-between">
                                                    <div class="col-auto col-md-7">
                                                        <div class="media flex-column flex-sm-row"> <img class=" img-fluid " src="https://i.imgur.com/6oHix28.jpg" width="62" height="62"/>
                                                            <div class="media-body my-auto">
                                                                <div class="row ">
                                                                    <div class="col">
                                                                        <p class="mb-0"><b>EC-GO Bag Standard</b></p><small class="text-muted">2 Week Subscription</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pl-0 flex-sm-col col-auto my-auto">
                                                        <p class="boxed-1">2</p>
                                                    </div>
                                                    <div class="pl-0 flex-sm-col col-md-3 my-auto text-right">
                                                        <p><b>1234500 VND</b></p>
                                                    </div>
                                                </div>
                                                <hr class="my-2"/>
                                                    <div class="row ">
                                                        <div class="col">
                                                            <div class="row justify-content-between">
                                                                <div class="col-4">
                                                                    <p class="mb-1"><b>Tổng tiền hàng</b></p>
                                                                </div>
                                                                <div class="flex-sm-col col-auto">
                                                                    <p class="mb-1"><b>179 VND</b></p>
                                                                </div>
                                                            </div>
                                                            <div class="row justify-content-between">
                                                                <div class="col">
                                                                    <p class="mb-1"><b>Chi phí vận chuyển</b></p>
                                                                </div>
                                                                <div class="flex-sm-col col-auto">
                                                                    <p class="mb-1"><b>0 VND</b></p>
                                                                </div>
                                                            </div>
                                                            <div class="row justify-content-between">
                                                                <div class="col-4">
                                                                    <p><b>Tổng thanh toán</b></p>
                                                                </div>
                                                                <div class="flex-sm-col col-auto">
                                                                    <p class="mb-1"><b>537 VND</b></p>
                                                                </div>
                                                            </div>
                                                            <hr class="my-0"/>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-5 mt-4 ">
                                                        <div class="col-md-7 col-lg-6 mx-auto"><button type="button" class="btn btn-block btn-outline-primary btn-lg">ADD GIFT CODE</button></div>
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
