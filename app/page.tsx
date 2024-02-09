import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import logo from "../public/logo.png";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <div className="flex flex-col items-center mt-24 ">
          <Image
            src={logo}
            width="0"
            height="0"
            alt="pixel logo"
            className="w-60 h-24"
            priority
          />
          <HomeSearch />
        </div>
      </main>
    </>
  );
}
