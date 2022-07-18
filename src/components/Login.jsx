// global
import React, { useState, useEffect } from 'react';

import axios from 'axios';
// components
import {Button, Input} from 'blueprint-react';
import { useHistory } from 'react-router-dom'
// styles
import './Login.scss';
import _ from 'lodash';
// import { response } from 'express';
import jwt_decode from "jwt-decode";


function Login() {
    const history = useHistory();

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const refreshToken = async () => {
      try {
        const res = await axios.post("/refresh", { token: user.refreshToken });
        setUser({
          ...user,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };

    const axiosJWT = axios.create()

    axiosJWT.interceptors.request.use(
      async (config) => {
        let currentDate = new Date();
        const decodedToken = jwt_decode(user.accessToken);
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          const data = await refreshToken();
          config.headers["authorization"] = "Bearer " + data.accessToken;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
      


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/login", { username, password });
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    }

    const submitLogin = () => {
      axios.post('http://localhost:5000/api/user/login', {
        email: username,
        password: password,
      }).then((response) => {
        console.log(response);
      });
      history.push('/home/user')
    };

    useEffect(() => {
        fetch('/api/aaaLogin.json')
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);
  

    return (
      <div className="login">
        <div className="wrapper">
            <svg className="logo" />
            <h2 className="title">APIC</h2>
            <div className="version">Version: 1.4</div>
            <div className="imgContainer">
              <svg className="landing_1" />
              <svg className="landing_2" />
              <svg className="landing_3" />
            </div>
            <div className="input_wrapper">
              <form onSubmit={handleSubmit}>
                <Input 
                    value = {username}
                    onChange={(e) => handleUsernameChange(e, 'user')}
                    label={"Username"}
                    required={true}
                    autoComplete="false"
                    type="email"
                    className={"user"}
                />
                <Input
                    value={password}
                    onChange={(e) => handlePasswordChange(e, 'pwd')}
                    label={"Password"}
                    required={true}
                    autoComplete="false"
                    type="password"
                    className={"pass"}
                />
                <Button className={"submit_btn"} onClick={submitLogin} type={Button.TYPE.PRIMARY}>Begin Setup</Button>
              </form>
            </div>
        </div>
      </div>
    )
}

export default Login;