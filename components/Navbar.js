import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <nav className="navbar navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="./logo.png.png" alt="image" width="35" height="35" class="d-inline-block  align-item-center mx-2"/>
                atom
                </a>

                <div className="d-flex gap-2">
                <Link href="/signup"><a><button class="btn btn-dark" type="button">Signup</button></a></Link>
                <Link href="/login"><a><button class="btn btn-dark" type="button">Login</button></a></Link>
                </div>
            </div>
      </nav>
     </div>
  )
}

export default Navbar
