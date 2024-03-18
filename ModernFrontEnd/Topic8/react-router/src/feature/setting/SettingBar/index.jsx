import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./settingbar.module.css";

function SettingBar() {
  const navigate = useNavigate();
  //   const params = useParams();
  const { pathname } = useLocation();

  //   const nestedPathname = params["*"];

  //   const active = (path) => nestedPathname == path;
  const active = (path) => pathname.includes(path);

  return (
    <div>
      <ul>
        <li
          className={`${styles.item} ${active("general") ? styles.active : ""}`}
          onClick={() => navigate("general")}
        >
          General
        </li>
        <li
          className={`${styles.item} ${
            active("personal") ? styles.active : ""
          }`}
          onClick={() => navigate("personal")}
        >
          Personal
        </li>
        <li
          className={`${styles.item} ${
            active("password") ? styles.active : ""
          }`}
          onClick={() => navigate("password")}
        >
          Password
        </li>
        <li
          className={`${styles.item} ${active("tags") ? styles.active : ""}`}
          onClick={() => navigate("tags")}
        >
          Tags
        </li>
      </ul>
    </div>
  );
}

export default SettingBar;
