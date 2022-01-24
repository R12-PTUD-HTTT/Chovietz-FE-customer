import React from "react";
import style from "./styleLogin.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUserLogin } from "../../redux/actions/userAction";

function LoginPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(`${name} ${value}`);
    setData({ ...data, [name]: value });
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    console.log(data);
    dispatch(
      fetchUserLogin(
        data,
        ({ userRole }) => {
          history.push("/");
        },
        (message) => {
          alert(message);
        }
      )
    );
  };

  return (
    <section className="d-flex flex-row justify-content-center">
      <div className="card shadow p-5 mb-5">
        <img src="img/icon/account_circle.svg" alt="" />
        <form
          className={`${style["login-form"]} container`}
          onSubmit={handleSubmitLogin}
        >
          <label className="row" htmlFor="username">
            Username
          </label>
          <input
            className="row"
            type="text"
            id="username"
            onChange={handleChange}
            name="username"
            value={data.username}
            required
          />
          <label className="row" htmlFor="password">
            Password
          </label>
          <input
            className="row"
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <button className="row btn btn-lg mt-2">Login</button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
