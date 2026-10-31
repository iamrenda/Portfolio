import { type News } from "@/types/News";
import NewsItem from "./NewsItem";

type Props = {
  filteredNews: News[];
};

const NewsList = ({ filteredNews }: Props) => {
  return (
    <ul>
      {filteredNews.map((news: News) => (
        <NewsItem key={news.title} newsItem={news} />
      ))}
    </ul>
  );
};

export default NewsList;
