import { Router } from 'express';
import { getAllUsers, userInfo } from '../controllers/userController.js';
import { logout, signIn, signUp } from '../controllers/authController.js';
import { catchErrors } from "../config/helpers.js";

/* Path avec ES modules*/ 
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const userRouter = Router();

// auth
userRouter.post('/signup', catchErrors(signUp));
userRouter.post('/login', catchErrors(signIn));
userRouter.post('/logout', catchErrors(logout));


userRouter.get('/user', catchErrors(getAllUsers))
userRouter.get('/user/:id', catchErrors(userInfo))

export default userRouter;