import { NextApiRequest, NextApiResponse } from 'next';

const authHandler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const reqBody = JSON.parse(req.body);
      const passEntered = reqBody.password;
      if (!passEntered || passEntered !== process.env.LOGIN_PASS) {
        res.json({ result: 'FAILED' });
      } else {
        res.json({ result: 'SUCCESS' });
      }
    }
  } catch (err) {
    res.json({ result: 'FAILED' });
  }
};

export default authHandler;
