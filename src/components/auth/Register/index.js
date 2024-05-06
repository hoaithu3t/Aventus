import React, { useState } from "react";
import Register1 from "./Register1";
import Register2 from "./Register2";

const Register = () => {
  const [role1, setRole1] = useState(true);
  const changeRole = () => {
    setRole1(!role1);
  };
  return (
    <div>
      {role1 ? (
        <Register1 changeRole={changeRole} />
      ) : (
        <Register2 changeRole={changeRole} />
      )}
    </div>
  );
};

export default Register;
