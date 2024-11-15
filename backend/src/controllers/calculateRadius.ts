import { Router, Request, Response} from "express";

/*const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('testing successful!')
})

export default router
*/

class calculateRadius {
    private router : Router;
    private data : Array<any>;

    public constructor(data : Array<any>) {
        this.router = Router();
        this.initializeRoutes();
        this.data = data;
    }

    private initializeRoutes() {
        this.router.get('/', this.RadiusCalculation);
    }

    public RadiusCalculation(req: Request, res: Response): void{
        res.send("Class Testing Successful!");
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default calculateRadius