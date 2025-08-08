"use client";
import { ROUTES } from "@/constants/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const HeaderSection = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="header py-[20px] bg-black">
      <div className="container mx-auto text-white">
        <nav>
          <ul className="flex gap-[10px]">
            <li>
              <Link
                className={isActive(ROUTES.HOME) ? "text-yellow-400" : ""}
                href={ROUTES.HOME}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={isActive(ROUTES.ABOUT) ? "text-yellow-400" : ""}
                href={ROUTES.ABOUT}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={isActive(ROUTES.SERVICES) ? "text-yellow-400" : ""}
                href={ROUTES.SERVICES}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={isActive(ROUTES.CONTACT) ? "text-yellow-400" : ""}
                href={ROUTES.CONTACT}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
