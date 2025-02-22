import { MouseEventHandler } from "react";

export interface CustomButtonTypeProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface CarCardProps {
  car: CarProps;
}
export interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}
export interface FilterProps {
  manufacturer: string;
  fuel: string;
  model: string;
  limit: number;
  year: number;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: "fuel" | "year";
  options: OptionProps[];
}
