
import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export default async function ImageSearchPage({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10 space-y-4">
        <h1 className="text-3xl ">No results found.</h1>
        <p className="text-lg">Try searching for something else</p>
        <Link href="/" className="btn btn-square btn-primary w-auto px-4">
          Home
        </Link>
      </div>
    );
  }

  return <div>{results && <ImageSearchResults results={data} />}</div>;
}
