import { Router } from 'express';

const router = Router();

import PedidoController from '../controller/PedidoController';

router.get('/', PedidoController.index);

router.get('/pedidosusuario', PedidoController.show);

router.post('/', PedidoController.store);

router.put('/:id', PedidoController.update);

router.delete('/:id', PedidoController.delete);

export default router;
