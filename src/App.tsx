import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { Alert, Flex, Pagination, Spin } from "antd";

import { fetchArticles } from "./services/articles";

import ArticleList from "./components/ArticleList/ArticleList";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [topic, setTopic] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const { data, error, isFetching, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["articles", topic, page, pageSize],
    queryFn: () => fetchArticles(topic!, page, pageSize),
    enabled: topic !== null,
    // staleTime: 60 * 1000, // 1 minute in milliseconds
    placeholderData: keepPreviousData,
  });

  const handleSearch = (topic: string) => {
    setTopic(topic);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };

  return (
    <>
      <h1>React Query</h1>

      <Flex vertical gap="middle">
        <SearchForm onSearch={handleSearch} />
        {isLoading && <Spin />}
        {isError && (
          <Alert
            type="error"
            title="Oops! Something went wrong"
            description={error.message}
          />
        )}

        {isSuccess && (
          <>
            <Spin spinning={isFetching}>
              <ArticleList articles={data.hits} />
            </Spin>
            <Pagination
              current={data.nbPage}
              total={data.nbHits}
              pageSize={data.hitsPerPage}
              onChange={handlePageChange}
            />
          </>
        )}
      </Flex>
    </>
  );
}

export default App;
