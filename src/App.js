// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import FormInput from "./components/FormInput";

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

  const [click, setClick] = useState(false);
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  // handling api call using axios and make perfect error handling whenever request cnacle
  // console.log(click);
  // const cancelToken = axios.CancelToken.source();
  // const getPost = async () => {
  //   console.log("useEffect mount");
  //   await axios
  //     .get("https://jsonplaceholder.typicode.com/posts", {
  //       cancelToken: cancelToken.token,
  //     })
  //     .then((res) => {
  //       setPosts(res.data);
  //       console.log("posts", res.data);
  //     })
  //     .catch((err) => {
  //       if (axios.isCancel(err)) {
  //         console.log("axios cancel");
  //       } else {
  //         console.log(err);
  //       }
  //     });

  // cleanup function
  // return () => {
  //   cancelToken.cancel();
  // };
  // };
  // handling api call using fetch and make perfect error handling whenever request cnacle
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          signal,
        });
        console.log(res);
        const data = await res.json();
        console.log(data);
        setLoading(false);

        setPosts(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("cancel");
        } else {
          console.log("another error");
        }
      }
      // cleanup function
      return () => {
        controller.abort();
      };
    };
    getPost();
  }, [click]);

  console.log(values);
  return (
    <>
      {/* <div className="form">
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
        </form>
      </div> */}
      <div style={{ width: "50%" }}>
        <button onClick={(e) => setClick(!click)}>Press to load post</button>
        <button onClick={(e) => setClick(!click)}>
          Press to load other post
        </button>
        <button onClick={(e) => setClick(!click)}>
          Press to load newer post
        </button>
        <>
          {loading ? (
            <div>Loading......</div>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </>
      </div>
    </>
  );
}

export default App;
