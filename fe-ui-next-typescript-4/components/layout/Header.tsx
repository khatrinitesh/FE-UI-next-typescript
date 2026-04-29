"use client";

import { NAV_ITEMS } from "@/constants/constants";
import { IMAGES } from "@/utils/assets";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  return (
    <header className="bg-black text-white py-4 relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <img
            src={isHome ? IMAGES.logo1 : IMAGES.logo2}
            alt="logo"
            className="h-10"
          />
        </Link>

        {/* ✅ Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={clsx(
                  "transition",
                  pathname === item.path ? "text-yellow-400" : "text-white",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-black z-50 transform transition-transform",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-4">
          {/* Close button */}
          <button onClick={() => setOpen(false)} className="mb-6 text-white">
            ✕
          </button>

          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    pathname === item.path ? "text-yellow-400" : "text-white",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
