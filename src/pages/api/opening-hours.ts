import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import { OpeningHoursType } from 'src/types/openingHours.type';

const openingHours = (req: NextApiRequest, res: NextApiResponse) => {
  // GET
  if (req.method === 'GET') {
    try {
      const openingHoursJson = fs.readFileSync(path.join(process.cwd() + '/public/siteData', 'openingHours.json'), 'utf-8');
      res.send(openingHoursJson);
    } catch (err) {
      const error = err as any;
      res.status(500).json({ message: error.message });
    }
  }

  // POST
  if (req.method === 'POST') {
    try {
      const reqBody = JSON.stringify(req.body);
      const reqBodyParsed = JSON.parse(reqBody) as unknown;
      const requestedOpeningHours = reqBodyParsed as OpeningHoursType;

      const newsUpdatedAsJson = JSON.stringify(requestedOpeningHours);
      fs.writeFileSync(path.join(process.cwd() + '/public/siteData', 'openingHours.json'), newsUpdatedAsJson);

      res.status(200).send(newsUpdatedAsJson);
    } catch (err) {
      const error = err as any;
      res.status(500).json({ message: error.message });
    }
  }
};

export default openingHours;
