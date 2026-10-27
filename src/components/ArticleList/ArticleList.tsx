import css from "./ArticleList.module.css";

import type { Article } from "../../types/article";

interface ArticleListProps {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul className={css.list}>
      {articles.map((article) => (
        <li key={article.story_id}>
          <a href={article.url} className={css.link}>
            {article.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
