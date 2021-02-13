import { Router } from 'express';

import WarningsController from './controllers/WarningsController';

const routes = Router();

routes.post('/warnings', WarningsController.create);
routes.get('/warnings', WarningsController.index);
routes.get('/warnings/:id', WarningsController.show);

export default routes;