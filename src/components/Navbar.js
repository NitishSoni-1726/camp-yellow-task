import React from "react";
function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark d-flex align-items-center">
        <h1 className="navbar-brand text-light m-1 p-2 ms-3" href="#">
          Wuri
        </h1>
        <h1 className="text-light nav-link m-1 p-3 me-3">Writing Assistant</h1>
      </nav>
    </>
  );
}

export default Navbar;
