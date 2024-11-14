import {Router } from "express";

const router = Router();

router.get('/', (req, res)=> {
    res.send('paper');
})
export default router;