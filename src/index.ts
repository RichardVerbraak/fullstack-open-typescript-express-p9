import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();

app.get('/ping', (_req, res) => {
    console.log('someone pinged');
    res.send('Ping');
});

app.use('/api/diaries', diaryRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});