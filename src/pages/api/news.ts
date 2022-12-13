import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { NewsType } from 'src/types/news.type';

const newsHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // GET
  if (req.method === 'GET') {
    try {
      const newsJson = fs.readFileSync(path.join(process.cwd() + '/public/siteData', 'news.json'), 'utf-8');
      res.send(newsJson);
    } catch (err) {
      const error = err as any;
      res.status(500).json({ message: error.message, status: 'ERROR' });
    }
  }

  // POST / PUTi
  if (req.method === 'PUT' || req.method === 'POST') {
    try {
      const reqBody = JSON.parse(req.body) as unknown;
      const contents = reqBody as NewsType;

      const title = contents.title;
      const lastEdit = contents.lastEdit;
      const description = contents.description;

      // Case body is not fulfilled
      if (!title || !lastEdit || !description) {
        res.status(400).json({
          message: 'Missing requested body content',
          status: 'ERROR'
        });
        return;
      }

      // Write JSON File
      const newsUpdated = { title, lastEdit, description };
      const newsUpdatedAsJson = JSON.stringify(newsUpdated);
      fs.writeFileSync(path.join(process.cwd() + '/public/siteData', 'news.json'), newsUpdatedAsJson);

      res.status(200).json({ ...newsUpdated, status: 'SUCCESS' });
    } catch (err) {
      const error = err as any;
      res.status(500).json({ message: error.message, status: 'ERROR' });
    }
  }
};

export default newsHandler;
