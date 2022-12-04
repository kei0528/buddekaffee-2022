import { url } from 'src/utils/url';
import { SendMailType } from 'src/types/mail.type';

export const sendMail = async (body: SendMailType) => {
  console.log(body);
  const res = await fetch(url.baseUrl + 'api/mail', {
    method: 'POST',
    body: JSON.stringify(body)
  });
  const data = await res.json();

  return data;
};
