import React from 'react'
import './subnav.css'
import { Link } from 'react-router-dom'

export default function Subnav(props) {
    return (
        <div>
            <nav className="nav flex-column">
                    <Link className={props.active == 'profile' ? "nav-link text-danger" : "nav-link"} to="/profile"><i class="bi bi-person-circle"></i>Tài khoản của tôi</Link>
                    <Link className={props.active == 'changePass' ? "nav-link text-danger" : "nav-link"} to="/changepass"><i class="bi bi-key"></i>Đổi mật khẩu</Link>
            </nav>
        </div>
    )
}
