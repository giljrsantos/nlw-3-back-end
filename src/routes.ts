import { Router } from 'express';
import OrphanageController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';
import multer from 'multer';



const routes = Router()
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', upload.array('images') , OrphanageController.create);


export default routes;