import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const ll = links.map((l) => {
    return <a key={l} href={'#'+l}>{l}</a>
  })

  return <nav>{ll}</nav>;
}

export default NavBar;
