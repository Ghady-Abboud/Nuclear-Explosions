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

  private initializeRoutes() {
    this.router.get("/", this.RadiusCalculation);
  }

  public RadiusCalculation = (req: Request, res: Response): void => {
    try {
      const R = {};
      let allresults: Array<number> = [];
      for (let i = 0; i < Object.keys(this.data).length; i++) {
        const bomb = this.data[i];
        const k = [180, 120, 70, 50];
        for (var kvalue of k) {
          for (var yieldvalue of bomb["yield"]) {
            const equationResult = kvalue * Math.pow(yieldvalue, 1 / 3);

            allresults.push(equationResult);
          }
        }

        R[bomb["designation"]] = allresults;
        allresults = [];
      }
      res.status(200).json(R);
    } catch (err) {
      console.error(err);
    }
  };

  public getRouter(): Router {
    return this.router;
  }
}

export default calculateRadius;
