import type { IgResType } from 'src/types/instagram.type';

const ig_fetcher = async () => {
  // const TOKEN = import.meta.env.PUBLIC_INSTAGRAM_TOKEN;
  // const URL = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token&access_token=${TOKEN}`;
  // const data = await fetch(URL);
  // const res = (await data.json()) as IgResType;
  // return res;
};

export const Footer = () => {
  const igData = ig_fetcher();

  return (
    <footer className='mx-5 mt-10  py-5 border-t sm:px-12'>
      <div className='max-w-max-section mx-auto'>
        <div className='flex gap-10'>
          <div>
            <h5>Budde Kaffee</h5>
            <address className='not-italic'>
              Buddestraße 31F
              <br />
              13507 Berlin
            </address>
          </div>
          <div className='flex flex-col'>
            <span>MI-FR: 9:00 - 16:00</span>
            <span>SA: 10:00 - 17:00</span>
            <span>SO: 11:00 - 16:00</span>
          </div>
        </div>
        <div></div>
      </div>
      <small className='mt-10 file: block text-center'>&copy; Budde Kaffee 2018 - {new Date().getFullYear()}</small>
    </footer>
  );
};
