import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";


function Validation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setEmail("");
      setPassword("");
    }
  };
  const formValidation = () => {
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;

    if (email.trim().length < 5) {
      emailErr.emailShort = "email is too short";
      isValid = false;
    }
    if (email.trim().length > 20) {
      emailErr.emailLong = "email is too Long";
      isValid = false;
    }
    if (!password.includes("123")) {
      passwordErr.password123 = "Password must have 123";
      isValid = false;
    }
    setEmailErr(emailErr);
    setPasswordErr(setPasswordErr);
    return isValid;
  };

  return (
    <div className="Validation">
      <TextField
        id="email"
        label="Email"
        type="text"
        value={email}
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />{" "}
      {Object.keys(emailErr).map((key) => {
        return <div style={{ color: "red" }}>{emailErr[key]}</div>;
      })}
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        variant="outlined"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      {Object.keys(passwordErr).map((key) => {
        return <div style={{ color: "red" }}>{passwordErr[key]}</div>;
      })}
      <Button
        onClick={(e) => onSubmit(e.target.value)}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </div>
  );
}

export default Validation;
