import { Router, Request, Response } from "express";

// R = k . (W)^(1/3)
// W => Yield of the bomb in KT
// k => Scaling factor based on overpressure level // ~180 for 1 psi (light damage to buildings) // ~120 for 5 psi (severe damage to structures).
class calculateRadius {
  private router: Router;
  private data: object;

  public constructor(data: object) {
    this.router = Router();
    this.initializeRoutes();
    this.data = data;
  }

  private initializeRoutes() {1
    this.router.get("/", this.RadiusCalculation);
  }

  public RadiusCalculation = (req: Request, res: Response): void => {
    try {
      const { query } = req.query;
      const k = 120;

      if (query) {
        for (let i = 0; i < Object.keys(this.data).length; i++) {
          if (this.data[i].designation === query) {
            const bombData = this.data[i];
            const bombyield = bombData["yield"][0];
            const R = k * Math.pow(bombyield, 1 / 3);
            res.status(200).send(R.toFixed(4));
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  public getRouter(): Router {
    return this.router;
  }
}

export default calculateRadius;
