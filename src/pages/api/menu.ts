import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const menuHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const newsJson = fs.readFileSync(path.join(process.cwd() + '/public/siteData', 'menu.json'), 'utf-8');
      res.send(newsJson);
    } catch (err) {
      const error = err as any;
      res.status(500).json({ message: error.message, status: 'ERROR' });
    }
  }
};

export default menuHandler;
