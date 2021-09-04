import express from 'express';
import cors from 'cors'
import { createUser, getAllUsers } from './controllers/userControllers.js';

const port = 7000;

const app = express();
app.use(express.json());
app.use(cors())

app.post('/api/users', createUser)
app.get('/api/users', getAllUsers)

app.listen(port, console.log({ success: true, message: `Server listens  @${port}` }));
