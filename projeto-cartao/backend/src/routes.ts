import {Router} from 'express';
import { CreateUserController } from './controller/user/CreateUserController';
import { CreateCardController } from './controller/card/CreateCardController';
import { AuthCardController } from './controller/card/AuthCardController';
import { DetailCardController } from './controller/card/DetailCardController';
import { isAuthenticated } from './middleware/isAuthenticated';
const router = Router();

//-/-/-/Rotas-----/*

router.post('/user',new CreateUserController().handle);
router.post('/card', new CreateCardController().handle);
router.post('/validation',new AuthCardController().handle);
router.get('/infocard',isAuthenticated, new DetailCardController().handle);

export{router};