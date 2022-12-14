import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userName = localStorage.getItem('name')
   ? localStorage.getItem('name') : 'Rajneeshkumar@.com'

   const userPassword = localStorage.getItem('password')
   ? localStorage.getItem('password') : '12345'

const handleSubmit = (e) => {
  e.preventDefault()
  if(name === userName && password === userPassword){
    TransformStream.success('Login Success')
    navigate("/login")
  } else {
    toast.error("Envalid")
  }
}

  // const [inpval, setInpval]  = useState({
  //   name: "",
  //   password: ""
  // })
  // console.log(inpval);

  // const getData = (e) => {
  //  const {value, name} = e.target;

  //  setInpval(() => {
  //     return {
  //       ...inpval,
  //       [name]:value
  //     }
  //  })
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
        <h2 class="text-center text-dark mt-5">Signup</h2>
        <div class="card my-5 ">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center ">
              <img src="../logo.png.png"  class="img-fluid profile-image-pic  rounded-circle my-2 rounded-sm "
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3 " >
              <input type="text" class="form-control mt-3" style={{height:"50px"}} id="Username" aria-describedby="emailHelp"
                placeholder="username" value={name} onChange={handleChange}/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" style={{height:"50px"}} id="password" placeholder="password" value={password} onChange={handleChange}/>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-dark px-5 mb-5 w-100 mt-2" style={{height:"50px"}} onClick={handleSubmit}>Submit</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Already have an account, <a href="/login" class="text-dark fw-bold"> Login</a>
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

