import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";
import { Suspense } from "react";

export default function SearchHeader() {
  return (
    <div className="sticky top-0 bg-base-100">
      <div className="flex w-full p-6 items-center">
        <Link href="/">
          <Image
            src={logo}
            width="80"
            height="20"
            alt="pixel logo"
            className=""
            priority
          />
        </Link>
        <div className="flex-1">
          <Suspense fallback="...Loading">
            <SearchBox />
          </Suspense>
        </div>
        <div className="hidden md:inline-flex space-x-2 items-center">
          <RiSettings3Line className="text-4xl bg-transparent hover:bg-gray-200 rounded-full p-2 cursor-pointer" />
          <TbGridDots className="text-4xl bg-transparent hover:bg-gray-200 rounded-full p-2 cursor-pointer" />
        </div>
        <button className="btn btn-sm btn-primary ml-2">Sign in</button>
      </div>
      <Suspense fallback="...Loading">
        <SearchHeaderOptions />
      </Suspense>
    </div>
  );
}
