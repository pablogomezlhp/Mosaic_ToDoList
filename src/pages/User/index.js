import React from "react";

import CreateUser from "../../components/create-user.component";

import "../../global.css";

export default function Exercise() {
  return (
    <>
      <h2>Create one user</h2>
      <CreateUser />
      <div id="lastPage"></div>
    </>
  );
}
