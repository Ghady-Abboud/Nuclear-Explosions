import { Router } from "express";
import paperRoutes from './paper.routes';
import searchRoutes from './search.routes';

const router = Router();

router.use('/papers', paperRoutes);

router.use('/search', searchRoutes);

export default router;