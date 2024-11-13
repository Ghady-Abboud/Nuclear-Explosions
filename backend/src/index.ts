import express from 'express';
import cors from 'cors';
import { Config } from './config/environment.config';
import routes from './routes/routes';

const app = express();
const config = new Config();
const PORT = 3001;

app.use(cors(
    {
    origin : config.corsOrigins,
    methods : ['GET', 'POST'],
    credentials : true
    }
))


app.use(express.json());

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`🚀Server is running on port: ${PORT}`)
})
