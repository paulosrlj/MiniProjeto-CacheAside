import { Router } from 'express';

const router = Router();

import ClienteController from '../controller/ClienteController';

router.get('/', ClienteController.index);

router.get('/:id', ClienteController.show);

router.post('/', ClienteController.store);

router.put('/:id', ClienteController.update);

router.delete('/:id', ClienteController.delete);

export default router;
