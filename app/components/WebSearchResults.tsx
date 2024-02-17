import Link from "next/link";
import Parser from "html-react-parser";
import { Result } from "../types/types";

export default function WebSearchResults({ results }: { results: Result }) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-base-content text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              href={result.link}
              className="group-hover:underline decoration-info txt-xl truncate font-md text-info"
            >
              {result.title}
            </Link>
          </div>
          <p>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}
