import type { Article } from "../../types/article";

interface ArticleListProps {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.story_id}>
          <a href={article.url}>{article.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
