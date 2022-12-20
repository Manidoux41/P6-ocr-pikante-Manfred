import { Router } from 'express';
import { addSauce, deleteSauce, getSauce, getSauces, updateSauce } from '../controllers/saucesController.js';
import { catchErrors } from '../config/helpers.js';

/* Path avec ES modules*/ 
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const saucesRouter = Router();

saucesRouter.get('/', catchErrors(getSauces));

saucesRouter.get('/:id', catchErrors(getSauce));

saucesRouter.post('/', catchErrors(addSauce));

saucesRouter.patch('/:id', catchErrors(updateSauce));

saucesRouter.delete('/:id', catchErrors(deleteSauce));

export default saucesRouter;