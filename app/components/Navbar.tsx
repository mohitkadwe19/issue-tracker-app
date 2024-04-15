"use client";
import Link from "next/link";
import React from "react";
import { GiAlienBug } from "react-icons/gi";
import { links } from "../utils/constants";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const path = usePathname();
  return (
    <div>
      <nav className="flex space-x-6 border mb-5 px-5 h-14 items-center rounded-md shadow-sm">
        <Link href="/" className="text-zinc-900">
          <GiAlienBug />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={classnames({
                  "text-zinc-900": path === link.href,
                  "text-gray-500": link.href !== path,
                  "hover:text-zinc-900 transition-colors": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
