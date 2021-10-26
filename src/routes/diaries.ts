/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from 'express';

import diaryService from '../services/diaryService';
import { toNewDiaryEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    const diaries = diaryService.getNonSensitiveEntries();
    res.send(diaries);
});

router.post('/', (req, res) => {
    try {
        const newEntry = toNewDiaryEntry(req.body);
    
        const addedEntry = diaryService.addDiary(newEntry);
        
        res.json(addedEntry);
      } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';

        if(error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        res.status(400);
        res.send(errorMessage);
      }
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