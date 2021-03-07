import express, { Application, Request, Response, NextFunction } from 'express';
import AuthenRoutes from './routes/authen';

const app: Application = express();



app.get('/', (req: Request, res: Response) => {
   res.send("ello")
})

//! MiddleWare
app.use(AuthenRoutes)

app.listen(5000, () => console.log("Server running"))
