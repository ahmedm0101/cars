import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";
import { footerLinks } from "../constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-300">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-10">
          <Image
            src={logo}
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            carhub 2025 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  className="text-gray-500"
                  key={item.title}
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap mt-10 justify-between items-center border-t sm:px-16 px-6 py-10 border-gray-300">
        <p>@2025 Carhub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privecy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
