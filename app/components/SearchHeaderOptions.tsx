"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const selectTab = (tab: string) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };

  return (
    <div className="flex space-x-2 select-none w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-primary cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-primary !border-primary"
        }`}
        onClick={() => selectTab("All")}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-primary cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-primary !border-primary"
        }`}
        onClick={() => selectTab("Images")}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
