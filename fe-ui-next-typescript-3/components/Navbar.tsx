"use client";

import { NAV_ITEMS } from "@/constants/data";
import { IMAGES } from "@/utils/assets";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="header py-4 bg-black">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <img
            src={isHome ? IMAGES.logo1 : IMAGES.logo2}
            alt="logo"
            width={100}
            height={30}
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx("text-white", {
                " font-semibold": pathname === item.href,
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ✅ HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white cursor-pointer"></span>
          <span className="w-6 h-[2px] bg-white cursor-pointer"></span>
          <span className="w-6 h-[2px] bg-white cursor-pointer"></span>
        </button>
      </div>
      <div
        className={clsx(
          "fixed inset-0 z-50 flex items-center justify-center transition-all duration-300",
          {
            "opacity-100 visible bg-black/40": open,
            "opacity-0 invisible": !open,
          },
        )}
      >
        <div className="bg-white rounded-lg p-6 w-3/4 text-center space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={clsx("block", {
                "text-blue-600 font-semibold": pathname === item.href,
              })}
            >
              {item.label}
            </Link>
          ))}

          {/* CLOSE */}
          <button className="mt-4 text-red-500" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </header>
  );
}
