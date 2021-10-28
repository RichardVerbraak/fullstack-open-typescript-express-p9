/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from 'express';

import { getNonSensitiveEntries, addDiary, findEntryById } from '../services/diaryService';
import { toNewDiaryEntry } from '../utils';

const router = express.Router();

// Gets all entries without the comment field
router.get('/', (_req, res) => {
    const diaries = getNonSensitiveEntries();
    res.send(diaries);
});

// Returns the diary by id
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const diary = findEntryById(id);

    if(diary) {
        res.status(200);
        res.send(diary);
    } else {
        res.status(404);
    }
});

// Adds new diary entry
router.post('/', (req, res) => {
    try {
        // Parsing the entry
        const newEntry = toNewDiaryEntry(req.body);

        // Adding the parsed entry
        const addedEntry = addDiary(newEntry);  
        
        res.json(addedEntry);
      } catch (error) {
        let errorMessage = 'Something went wrong.';

        if(error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        res.status(400);
        res.send(errorMessage);
      }
});



export default router;