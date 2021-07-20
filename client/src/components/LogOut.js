import React from "react";
import { authService } from "../firebase";

export default () => {
  const onLogOutClick = () => authService.signOut();
  return (
    <>
      <button onClick={onLogOutClick}></button>
    </>
  );
};
