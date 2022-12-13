import { useEffect, useState } from 'react';
import { useNewsData } from 'src/hooks/useNewsData';
import { postNews } from 'src/services/newsService';
import { NewsType } from 'src/types/news.type';

export type LabelType = 'Title' | 'Description' | null;

export const useManageNewsState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, mutate } = useNewsData();
  const [news, setNews] = useState<NewsType>({ title: '', description: '', lastEdit: 0 });
  const [textAreaShown, setTextAreaShown] = useState<LabelType>(null);

  const setNewsTitle = (value: string) => setNews(state => ({ ...state, title: value }));
  const setNewsDescription = (value: string) => setNews(state => ({ ...state, description: value }));
  const toggleTextAreaShown = (key: LabelType) => setTextAreaShown(state => (state === key ? null : key));

  useEffect(() => {
    setNews({ ...data, lastEdit: new Date().getTime() });
  }, [data]);

  const toggleOpen = () => setIsOpen(state => !state);

  const sendNews = async () => {
    const res = await postNews(news);
    if (res.status === 'SUCCESS') {
      mutate('api/news');
      toggleOpen();
    } else {
      alert(`Failed to save news. Probably you tried to save without contents. \n Error message: ${res.message}`);
    }
  };

  return { isOpen, toggleOpen, news, setNewsDescription, setNewsTitle, textAreaShown, toggleTextAreaShown, sendNews };
};
