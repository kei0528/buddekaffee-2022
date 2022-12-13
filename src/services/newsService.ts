import { NewsType } from 'src/types/news.type';
import { url } from 'src/utils/url';

export const getNews = async () => {
  const res = await fetch(url.baseUrl + 'api/news');
  const data = (await res.json()) as unknown;
  const d = data as NewsType;
  return d;
};

export const postNews = async (news: NewsType) => {
  const res = await fetch(url.baseUrl + 'api/news', {
    method: 'POST',
    body: JSON.stringify(news)
  });
  const data = (await res.json()) as unknown;
  const d = data as NewsType;
  return d;
};
