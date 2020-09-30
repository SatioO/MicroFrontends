import React from "react";
import { Link } from "@reach/router";
import { checkAuth } from "@Accion/Styleguide"

const links = [
  {
    name: "People",
    href: "/people",
  },
  {
    name: "Planets",
    href: "/planets",
  },
];

export default function Root(props) {
  React.useEffect(() => {
    checkAuth().then(status => console.log(status))
  }, [])

  return (
    <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        {links.map((link) => {
          return (
            <Link key={link.href} className="p-6" to={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}