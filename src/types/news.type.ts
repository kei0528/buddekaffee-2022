export type NewsType = {
  title: string;
  lastEdit: number;
  description: string;
  status?: 'SUCCESS' | 'ERROR';
  message?: string;
};
