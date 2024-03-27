// import Link from "next/link";
import React from "react";
import Links from "./links/links";

function Navbar() {
  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
