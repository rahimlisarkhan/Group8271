import React from "react";

import styles from "./setting.module.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import General from "./General";
import Personal from "./Personal";
import NotFound from "../404";
import SettingBar from "../../feature/setting/SettingBar";

function Setting() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SettingBar />
      </div>

      <div className={styles.right}>
        <h1>Setting</h1>

        <div className={styles.content}>
          {/* Deyisilecek Erazi */}
          <Routes>
            <Route path="/" element={<Navigate to="general" replace />} />

            <Route path="general" element={<General />} />
            <Route path="personal" element={<Personal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Setting;
