import Head from "next/head";
import Image from "next/image";
import { React, useState } from "react";
import cx from 'classnames';
import styles from '../styles/Form.module.css'

import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get("https://63060a35697408f7edd13ad6.mockapi.io/api/v1/loginformS")
        .then((res) => setData(res.data));
    }
    getData();
  }, []);

  console.log(data);

  return (
    <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h3 className="h3 mb-3 fw-normal">LOGIN PANEL FORM </h3>

          <div className="form-floating">
            <input type="email" className="form-control" id="email 1" placeholder="xyz@example.com" />
            <label htmlFor="floatingInput">Enter your valid email id</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="password 1" placeholder="8@ABc_01" />
            <label htmlFor="floatingPassword"> your unique Password</label>
          </div>

          <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> SAVE PASSWORD?
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Cancel</button>
        </form>
      </main>

  );
}