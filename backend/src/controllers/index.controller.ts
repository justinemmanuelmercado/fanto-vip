import { NextFunction, Request, Response } from 'express';

class IndexController {

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "Welcome to the API" }).status(200);
    } catch (error) {
      next(error);
    }
  }
}

export default IndexController;
