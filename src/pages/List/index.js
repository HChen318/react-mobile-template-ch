import React from "react";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import TestCom from "@/components/Test";
import styles from "./style.module.scss";

function List() {
  let navigate = useNavigate();
  return (
    <div className={styles["index"]}>
      <Button onClick={() => navigate(`/test/one?id=123`)}>跳转二级路由</Button>
      <div className="text">111</div>
      <TestCom />
    </div>
  );
}

export default List;
