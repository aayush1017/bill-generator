import Link from "next/link";
import React from "react";

function Links() {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    // {
    //   title: "Bill",
    //   path: "/bill",
    // },
  ];
  return (
    <div>
      {links.map((link) => {
        return (
          <>
            <Link href={link.path}>{link.title}</Link>
          </>
        );
      })}
    </div>
  );
}

export default Links;
