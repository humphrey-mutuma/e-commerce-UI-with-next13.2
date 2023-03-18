import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center p-10 bg-slate-100 space-x-10">
      <Link href="/">Home</Link>
      <Link href="/todos">Todos</Link>
    </header>
  );
}

export default Header;
