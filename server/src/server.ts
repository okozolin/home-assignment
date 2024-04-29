import express, { Express, Request, Response } from "express";
import cors from "cors";

import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app: Express = express();
app.use(cors());
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Orit - Server is up!");
});

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.listen(port, () => {
  console.log(`🔋 Server is running at http://localhost:${port}`);
});

