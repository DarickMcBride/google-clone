import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  return (
    <>
      <form className="flex w-full mt-5 mx-auto max-w-xl border fill border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow lg:max-w-2xl">
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none bg-transparent"
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 space-x-3">
        <button type="submit" className="btn btn-primary">
          Pixel Search
        </button>
        <button type="submit" className="btn btn-primary">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </>
  );
}
