import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CommentPage } from "./comment";
import { NewestPage } from "./newest";
export function Routers(props) {
  const { selectPage } = props;
  useEffect(() => {
  }, [selectPage]);
  return <div>{selectPage === "comment" ? <CommentPage /> : <NewestPage />}</div>;
}
