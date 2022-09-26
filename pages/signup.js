import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   if (e.target.name == "name") {
  //     setEmail(e.target.value);
  //   } else if (e.target.name == "password") {
  //     setPassword(e.target.value);
  //   }
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = { email, password };

  //   let res = await fetch("http://localhost:3000/api/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   let response = await res.json();
  //   console.log(response);
  //   setName("");
  //   setPassword("");
  // };

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
         <div class="container" >
    <div class="row ">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Signup Form</h2>
        <div class="card my-5 ">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="../logo.png.png"  class="img-fluid profile-image-pic  rounded-circle my-3 rounded-sm"
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3 ">
              <input type="text" class="form-control " id="Username" aria-describedby="emailHelp"
                placeholder="UserName"/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password"/>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-dark px-5 mb-5 w-100">Submit</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Already Signup <a href="#" class="text-dark fw-bold"> Login</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>
  );
};

export default SignUp;

