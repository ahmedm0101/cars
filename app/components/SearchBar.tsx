"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  let router = useRouter();
  let handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };
  let updateSearchParams = (model: string, manufacturer: string) => {
    let searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    let newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathName, { scroll: false });
  };
  let SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  return (
    <>
      <form className="searchbar" onSubmit={handleSearch} action="">
        <div className="searchbar__item">
          <SearchManufacturer
            setManufacturer={setManufacturer}
            manufacturer={manufacturer}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            alt="model icon"
            width={25}
            height={25}
            className="w-5 h-5 absolute ml-4"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </form>
    </>
  );
}
