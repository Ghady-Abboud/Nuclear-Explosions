import { Router } from "express";
import paperRoutes from '../src/controllers/paper.routes';
import searchRoutes from '../src/controllers/search.routes';

const router = Router();

router.use('/papers', paperRoutes);
router.use('/search', searchRoutes);

export default router;