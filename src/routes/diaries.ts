import express from 'express';
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
    const diaries = diaryService.getNonSensitiveEntries();
    res.send(diaries);
});

router.post('/', (_req, res) => {
    res.send('Posting a diary');
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const diary = diaryService.findEntryById(id);

    if(diary) {
        res.status(200);
        res.send(diary);
    } else {
        res.status(404);
    }
});

export default router;