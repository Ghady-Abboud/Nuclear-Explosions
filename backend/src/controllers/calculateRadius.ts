import { Router, Request, Response } from "express";

/*const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('testing successful!')
})

export default router
*/

class calculateRadius {
  private router: Router;
  private data: object;

  public constructor(data: object) {
    this.router = Router();
    this.initializeRoutes();
    this.data = data;
  }

  private initializeRoutes() {
    this.router.get("/", this.RadiusCalculation);
  }

  public RadiusCalculation = (req: Request, res: Response): void => {
    try {
      const listOfDesignations: Array<string> = [];
      for (let i = 0; i < Object.keys(this.data).length; i++) {
        const bomb = this.data[i];
        listOfDesignations.push(bomb["designation"]);
      }
      res.send(listOfDesignations);
    } catch (err) {
      console.error(err);
    }
  };

  public getRouter(): Router {
    return this.router;
  }
}

export default calculateRadius;
