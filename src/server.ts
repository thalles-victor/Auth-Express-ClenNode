import 'dotenv/config';
import express from 'express';
import { router } from './routs';


const app = express();

app.use(express.json());

app.use("/auth", router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`)
});