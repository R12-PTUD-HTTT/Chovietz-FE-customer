import React from "react";
import style from "./styleLogin.module.css";

function LoginPage(props) {
  return (
    <section className="d-flex flex-row justify-content-center">
      <div className="card shadow p-5 mb-5">
        <img src="img/icon/account_circle.svg" />
        <form className={`${style["login-form"]} container`}>
          <label className="row" htmlFor="username">
            Username
          </label>
          <input className="row" type="text" id="username" required />
          <label className="row" htmlFor="password">
            Password
          </label>
          <input className="row" type="password" id="password" required />
          <button className="row btn btn-lg mt-2">Login</button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
