import { Router } from "express";

const router = Router();

router.get('/', (req, res)=> {
    res.send('search');
})

export default router;