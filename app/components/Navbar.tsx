"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import CustomButton from "./CustomButton";

export default function Navbar() {
  let handleSignin = () => {};
  return (
    <>
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src={logo}
              alt="Car Hub Logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="max-xl:bg-primary-blue max-xl:text-white xl:bg-white rounded-full min-w-[130px] bg-white"
            handleClick={handleSignin}
          />
        </nav>
      </header>
    </>
  );
}
