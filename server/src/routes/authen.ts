import { Request, Response, Router } from 'express';
const router = Router();

router.get('/signup', (req: Request, res: Response) => {
   res.send("Sign Up Page")
})

export default router;