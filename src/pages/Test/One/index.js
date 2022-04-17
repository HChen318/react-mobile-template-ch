import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function One() {
  // const { id } = useParams();
  const [params] = useSearchParams();

  console.log(params.get("id"), "==id");
  return <div>二级路由页面</div>;
}

export default One;
