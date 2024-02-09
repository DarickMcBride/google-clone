"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?searchTerm=${search}`);
  };

  const randomSearch = async () => {
    setLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    setLoading(false);
    if (!res.ok) return;
    const data = await res.json();

    router.push(`/search/web?searchTerm=${data[0]}`);
  };

  return (
    <>
      <form
        className="flex w-full mt-5 mx-auto max-w-xl border fill border-neutral-content  px-5 py-3 
      rounded-full hover:shadow-lg focus-within:shadow-lg transition-shadow lg:max-w-2xl"
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none bg-transparent"
          onChange={(e) => setSearch(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center items-center sm:flex-row mt-8 gap-x-2">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="btn btn-primary"
        >
          Pixel Search
        </button>
        {!loading && (
          <button
            type="submit"
            onClick={randomSearch}
            disabled={loading}
            className="btn btn-primary"
          >
            I&apos;m Feeling Lucky
          </button>
        )}
        {loading && (
          <span className="loading content-center text-secondary loading-bars loading-lg"></span>
        )}
      </div>
    </>
  );
}
