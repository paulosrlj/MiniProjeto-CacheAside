import { Router } from 'express';

const router = Router();

import ProdutoController from '../controller/ProdutoController';

router.get('/', ProdutoController.index);

router.get('/:id', ProdutoController.show);

router.post('/', ProdutoController.store);

router.put('/:id', ProdutoController.update);

router.delete('/:id', ProdutoController.delete);

export default router;
