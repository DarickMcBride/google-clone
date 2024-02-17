"use client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [search, setSearch] = useState(searchTerm || "");
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?searchTerm=${search}`);
  };

  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-6 
    py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        className="w-full bg-transparent focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />

      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setSearch("")}
      />

      <AiOutlineSearch
        className="text-2xl sm:inline-flex text-primary ml-1 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
}
