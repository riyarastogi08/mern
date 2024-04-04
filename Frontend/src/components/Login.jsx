import React from 'react'

const Login = () => {
  return (
    <div>
      <>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title> Login Page </title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "   \nBody {  \n  font-family: Calibri, Helvetica, sans-serif;  \n  background-color: pink;  \n}  \nbutton {   \n       background-color: #4CAF50;   \n       width: 100%;  \n        color: orange;   \n        padding: 15px;   \n        margin: 10px 0px;   \n        border: none;   \n        cursor: pointer;   \n         }   \n form {   \n        border: 3px solid #f1f1f1;   \n    }   \n input[type=text], input[type=password] {   \n        width: 100%;   \n        margin: 8px 0;  \n        padding: 12px 20px;   \n        display: inline-block;   \n        border: 2px solid green;   \n        box-sizing: border-box;   \n    }  \n button:hover {   \n        opacity: 0.7;   \n    }   \n  .cancelbtn {   \n        width: auto;   \n        padding: 10px 18px;  \n        margin: 10px 5px;  \n    }   \n        \n     \n .container {   \n        padding: 25px;   \n        background-color: lightblue;  \n    }   \n"
    }}
  />
  <center>
    {" "}
    <h1> Student Login Form </h1>{" "}
  </center>
  <form>
    <div className="container">
      <label>Username : </label>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        required=""
      />
      <label>Password : </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        required=""
      />
      <button type="submit">Login</button>
      <input type="checkbox" defaultChecked="checked" /> Remember me
      <button type="button" className="cancelbtn">
        {" "}
        Cancel
      </button>
      Forgot <a href="#"> password? </a>
    </div>
  </form>
</>

    </div>
  )
}

export default Login