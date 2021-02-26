import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
};

export default Navbar;
