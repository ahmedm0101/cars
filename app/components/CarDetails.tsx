"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CarDetailsProps } from "../types";
import Image from "next/image";
import { generateCarImageUrl } from "../utils";

export default function CarDetails({
  car,
  closeModel,
  isOpen,
}: CarDetailsProps) {
  // console.log(Object.entries(car));

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterTo="opacity-100"
            enterFrom="opacity-0"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh]
                 overflow-y-auto transform rounded-2xl bg-white
                 text-left shadow-xl p-6 transition-all flex flex-col gap-5"
                >
                  <button
                    className="absolute top-2 right-2 z-10 w-fit bg-primary-blue-100 rounded-full p-2"
                    type="button"
                    onClick={closeModel}
                  >
                    <Image
                      alt="close"
                      src="/close.svg"
                      className="object-contain"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="w-full relative h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        alt="car model"
                        fill
                        priority
                        src={generateCarImageUrl(car)}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image
                          alt="car model"
                          fill
                          priority
                          src={generateCarImageUrl(car,'29')}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image
                          alt="car model"
                          fill
                          priority
                          src={generateCarImageUrl(car,'33')}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image
                          alt="car model"
                          fill
                          priority
                          src={generateCarImageUrl(car,'13')}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="font-semibold text-xl text-center capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between text-right w-full gap-5"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
