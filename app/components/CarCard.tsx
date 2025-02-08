"use client";
import React, { useState } from "react";
import { CarCardProps, CarProps } from "../types";
import { calculateCarRent, generateCarImageUrl } from "../utils";
import Image from "next/image";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

export default function CarCard({ car }: CarCardProps) {
  let { city_mpg, drive, make, model, transmission, year } = car;
  let carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="mt-6 flex text-[32px] font-extrabold">
        <span className="text-[14px] self-start font-semiboldbold">$</span>
        {carRent}
        <span className="text-[14px] self-end font-semiboldbold">/day</span>
      </p>
      <div className="w-full relative h-40 my-3 object-contain">
        <Image
          alt="car model"
          fill
          priority
          className="object-contain"
          src={generateCarImageUrl(car)}
        />
      </div>
      <div className="flex relative mt-2 w-full">
        <div className="flex group-hover:invisible justify-between w-full text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="steering wheel"
              width={20}
              height={20}
              className="object-contain"
              src="/steering-wheel.svg"
            />
            <p className="text-[14px]">
              {transmission == "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="tire"
              width={20}
              height={20}
              className="object-contain"
              src="tire.svg"
            />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="gas"
              width={20}
              height={20}
              className="object-contain"
              src="/gas.svg"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full bg-primary-blue by-[16px] rounded-full"
            textStyles="text-[14px] text-white leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}
