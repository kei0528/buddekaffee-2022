import { url } from 'src/utils/url';

export const login = async (password: string) => {
  const res = await fetch(url.baseUrl + 'api/auth', {
    method: 'POST',
    body: JSON.stringify({ password })
  });
  const loginStatus = await res.json();
  return loginStatus;
};
