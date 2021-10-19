import express from 'express';

const app = express();

app.get('/ping', (_req, res) => {
    console.log('someone pinged');
    res.send('Ping');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
