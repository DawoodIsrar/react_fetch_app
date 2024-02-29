// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import FormInput from "./components/FormInput";
import LibForm from "./components/LibForm";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });
  const inputArray = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and should't include any special characters",
      require: true,
      pattern: `/^[a-z\d.]{5,}$/i`,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email",
      errorMessage: "it should be a valid email address",
      pattern: `^[^s@]+@[^s@]+.[^s@]+$ `,
      require: true,
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      placeholder: "fullname",
      label: "Fullname",
      errorMessage:
        "Fullname should be 3-16 characters and should't include any special characters",
      pattern: `^[A-Za-zs]{3,16}$`,

      require: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      errorMessage:
        "password should be 8-20 character and include at least 1 letter, 1 number , 1 speecial character, ",
      pattern: `(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$`,
      require: true,
    },
    {
      id: 1,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirmPassword",
      label: "ConfirmPassword",
      errorMessage: "passwords dont match",
      pattern: values.username,
      require: true,
    },
  ];
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(values);
  return (
    <>
      <div className="form">
        <form className="formarea" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center", color: "purple" }}>Register</h1>
          {inputArray.map((input) => {
            return (
              <FormInput
                placeholder={input.placeholder}
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleChange}
              ></FormInput>
            );
          })}
          <button
            type="submit"
            style={{
              width: "50%",
              border: "none",
              borderRadius: "10px",
              margin: "10px",
              height: "50px",
              backgroundColor: "purple",
              color: "white",
            }}
          >
            Submit
          </button>

          <button
            style={{
              width: "50%",
              border: "none",
              borderRadius: "10px",
              margin: "10px",
              height: "50px",
              backgroundColor: "purple",
              color: "white",
            }}
          >
            Using Libraries
          </button>
        </form>
      </div>
      <div style={{ marginTop: "100px" }}>
        <LibForm />
      </div>
    </>
  );
}

export default App;
