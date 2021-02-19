import {Router} from 'express';
import candidate from './routers/candidate';

const router = Router();

candidate(router)
export default router;