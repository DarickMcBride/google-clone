//create an interface for result object
interface Result {
  title: string;
  link: string;
}

export default async function WebSearchPage({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await res.json();
  const results = data.items;

  return (
    <div>
      {results &&
        results.map((result: Result, id: number) => (
          <h1 key={id}>{result?.title}</h1>
        ))}
    </div>
  );
}
