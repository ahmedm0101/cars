"use client";
import React, { useState } from "react";
import { CustomFilterProps } from "../types";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);
  let router = useRouter();
  let handelUpdateParams = (e: { title: string; value: string }) => {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set(title, e.value.toLowerCase());
    let newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };
  return (
    <>
      <div className="w-fit">
        <Listbox
          value={selected}
          onChange={(e) => {
            setSelected(e);
            handelUpdateParams(e);
          }}
        >
          <div className="relative w-fit z-10">
            <ListboxButton className="custom-filter__btn">
              <span className="block truncate">{selected.title}</span>
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="chevron up down"
              />
            </ListboxButton>
            <Transition
              leave="transition ease-in duaration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="custom-filter__options">
                {options.map((option) => (
                  <ListboxOption
                    key={option.title}
                    value={option}
                    className={({ focus }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        focus ? `bg-primary-blue text-white` : `text-gray-900`
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-bold" : "font-normal"
                        }`}
                      >
                        {" "}
                        {option.title}
                      </span>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
}
