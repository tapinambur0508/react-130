import axios from "axios";

import type { Article } from "../types/article";

export async function fetchArticles(
  topic: string,
  page: number,
  pageSize: number,
): Promise<{
  hits: Array<Article>;
  nbHits: number;
  nbPage: number;
  hitsPerPage: number;
}> {
  const { data } = await axios.get<{
    hits: Array<Article>;
    nbHits: number;
    nbPage: number;
    hitsPerPage: number;
  }>("https://hn.algolia.com/api/v1/search", {
    params: {
      query: topic,
      page: page - 1,
      hitsPerPage: pageSize,
    },
  });

  return data;
}
