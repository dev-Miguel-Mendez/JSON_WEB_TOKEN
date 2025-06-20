import { Router } from "express";
import { validate } from "../middleware/validateBody.js";
import { loginSchema, signupSchema } from "../zodSchemas/user-schema.js";
import { signin, signup, triggerBadRequest } from "../controllers/users/users.js";
//*types:





export const router = Router();


router.post('/signup', validate(signup, signupSchema) )

router.post('/signin', validate(signin, loginSchema))

router.post('/logout', triggerBadRequest)

