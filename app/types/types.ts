export interface Result {
  items: {
    title: string;
    link: string;
    formattedUrl: string;
    htmlSnippet: string;
    displayLink: string;
    image: { contextLink: string };
  }[];
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
  };
}
