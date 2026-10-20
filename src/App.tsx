import { useState } from "react";

import axios from "axios";

import ArticleList from "./components/ArticleList/ArticleList";
import SearchForm from "./components/SearchForm/SearchForm";

import type { Article } from "./types/article";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearch = async (topic: string) => {
    setIsLoading(true);
    setIsError(false);
    setArticles([]);

    try {
      const { data } = await axios.get<{ hits: Article[] }>(
        "https://hn.algolia.com/api/v1/search",
        {
          params: {
            query: topic,
          },
        },
      );

      setArticles(data.hits);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Forms</h1>

      <SearchForm onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops! Something went wrong:(</p>}
      {/* {articles.length > 0 && <ArticleList articles={articles} />} */}
      <ArticleList articles={articles} />
    </>
  );
}

export default App;
